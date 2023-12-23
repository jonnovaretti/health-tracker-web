import { useState } from "react";
import { notification } from "antd";
import axios from "axios";

export function useForm(validate: any,
                        endpoint: string,
                        successMessage: string,
                        callSuccessfulRequest?: any,
                        callBeforeRequest?: any) 
{
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: successMessage,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = validate(values);
    setErrors(() => ({ ...validationResult, [event.target.name]: "" }));
    const url = "http://localhost:3000/" + endpoint;

    if (Object.values(validationResult).every((x) => x === "")) {
      if (callBeforeRequest !== undefined) callBeforeRequest();

      axios
        .post(url, {...values, }, { headers: { 'Content-Type': 'application/json' }})
        .then(() => { 
          setValues("");
          openNotificationWithIcon();
          if (callSuccessfulRequest !== undefined) callSuccessfulRequest();
        });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
