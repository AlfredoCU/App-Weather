import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const reset = () => {
    setInputs(initialState);
  };

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  return [inputs, handleInputChange, reset];
};
