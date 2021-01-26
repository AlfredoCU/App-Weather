import { useState, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { Header, Form, Results } from "../components/index";

const App = () => {
  const [data, setData] = useState({ city: "Guadalajara", country: "MX" });

  const addData = useCallback(
    dt => {
      setData(() => ({ ...dt }));
    },
    [setData]
  );

  const { city, country } = data;
  const weather = useFetch(city, country);

  return (
    <>
      <Header title="Aplicación del clima" />
      <Form addData={addData} />
      <Results data={weather} />
    </>
  );
};

export default App;
