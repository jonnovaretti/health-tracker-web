export interface validateCodeSenderProps {
  email: string;
  code: string;
}

export default function Validate(values: validateCodeSenderProps) {
  let errors = {} as validateCodeSenderProps;

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.code) {
    errors.code = "Password is required";
  }
  return errors;
}
