export interface validateRegisterProps {
  email: string;
  password: string;
}

export default function Validate(values: validateRegisterProps) {
  let errors = {} as validateRegisterProps;

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
