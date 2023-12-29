export interface validateRegisterProps {
  name: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

export default function Validate(values: validateRegisterProps) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
  let errors = {} as validateRegisterProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!passwordRegex.test(values.password)) {
    errors.password = "Password does not meet the requirements";
  }
  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = "Confirmation needs be to equal to password";
  }
  return errors;
}
