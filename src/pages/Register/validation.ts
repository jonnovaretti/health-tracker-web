export interface validateRegisterProps {
  name: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

export default function Validate(values: validateRegisterProps) {
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
  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = "Confirmation needs be to equal to password";
  }
  return errors;
}
