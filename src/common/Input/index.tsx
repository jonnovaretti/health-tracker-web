import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t, type, value, disabled=false }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      disabled={disabled}
      value={value}
      type={type}
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
