import { memo } from "react";
import { shape } from "prop-types";
import { Error } from "../assets/icons/Error";

const Results = ({ data }) => {
  const { cod, name, main, coord, sys, weather } = data;

  return (
    <div className="container">
      {cod !== "404" ? (
        <>
          <h1>{name}</h1>
          <div className="card-content">
            <div className="card">
              <h2>Temperatura</h2>
              <p>El clima de {name} es:</p>
              <h2 className="text-shadow">{main && main.temp} &#176;C</h2>
              <p>Máxima: {main && main.temp_max} &#176;C</p>
              <p>Minima: {main && main.temp_min} &#176;C</p>
            </div>

            <div className="card">
              <h2>Clima</h2>
              {weather &&
                weather.map(item => (
                  <div key={item.id}>
                    <img
                      className="img-weather"
                      src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                      alt="Clima"
                    />
                    <p className="description">{item.description}</p>
                  </div>
                ))}
            </div>

            <div className="card">
              <h2>Coordenadas</h2>
              <p>El país es:</p>
              <h2 className="text-shadow">{sys && sys.country}</h2>
              <p>Latitud: {coord && coord.lat}</p>
              <p>Longitud: {coord && coord.lon}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>No se encontraron resultados</h1>
          <div className="card-content">
            <Error />
          </div>
        </>
      )}
    </div>
  );
};

Results.propTypes = {
  data: shape({})
};

Results.defaultProps = {
  data: {}
};

const ResultsMemo = memo(Results);
export { ResultsMemo as Results };
