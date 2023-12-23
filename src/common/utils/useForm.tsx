import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any, successMessage: string, callEndRequest: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: successMessage,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = validate(values);
    setErrors((errors) => ({ ...validationResult, [event.target.name]: "" }));
    const url = "http://localhost:3000/users";

    if (Object.values(validationResult).every((x) => x === "")) {
      axios
        .post(url, {...values, }, { headers: { 'Content-Type': 'application/json' }})
        .then(() => { 
          setValues("");
          openNotificationWithIcon();
          callEndRequest();
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
