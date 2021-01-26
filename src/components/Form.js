import { memo, useState } from "react";
import { func } from "prop-types";
import { useForm } from "../hooks/useForm";
import { countries } from "../samples/countries";

const Form = ({ addData }) => {
  const [inputs, handleInputChange, reset] = useForm({ city: "", country: "" });
  const { city, country } = inputs;

  const [error, setError] = useState(false);

  const submit = e => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    addData({ city, country }); // inputs.
    setError(false);
    reset();
  };

  return (
    <form onSubmit={submit}>
      <div className="content-inputs">
        <label id="label-city" htmlFor="city">
          Ciudad:
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={handleInputChange}
          placeholder="Agregar ciudad..."
        />

        <label id="label-country" htmlFor="country">
          País:
        </label>
        <input
          id="country"
          type="text"
          name="country"
          value={country}
          list="countries"
          onChange={handleInputChange}
          placeholder="Agregar país..."
        />
        <datalist id="countries">
          {countries.map(item => (
            <option key={item.ISO2} value={item.ISO2}>
              {item.Country}
            </option>
          ))}
        </datalist>

        <button type="submit">Buscar clima</button>
      </div>
      {error && <p className="error">Los campos están vacíos</p>}
    </form>
  );
};

Form.propTypes = {
  addData: func.isRequired
};

const FormMemo = memo(Form);
export { FormMemo as Form };
