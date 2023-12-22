import { lazy } from "react";
import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Container = lazy(() => import("../../common/Container"));

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  return (
    <Container>
     <ContactContainer>
       <Row justify="space-between" align="middle">
         <Col lg={12} md={12} sm={24} xs={24}>
           <Slide direction="right">
             <FormGroup autoComplete="off" onSubmit={handleSubmit}>
               <Col span={24}>
                 <Input
                   type="text"
                   name="name"
                   placeholder="Your Name"
                   value={values.name || ""}
                   onChange={handleChange}
                 />
                 <ValidationType type="name" />
               </Col>
               <Col span={24}>
                 <Input
                   type="text"
                   name="email"
                   placeholder="Your Email"
                   value={values.email || ""}
                   onChange={handleChange}
                 />
                 <ValidationType type="email" />
               </Col>
               <Col span={24}>
                 <Input
                   type="password"
                   name="password"
                   placeholder="Your password"
                   value={values.password || ""}
                   onChange={handleChange}
                 />
                 <ValidationType type="password" />
               </Col>
               <Col span={24}>
                 <Input
                   type="password"
                   name="passwordConfirmation"
                   placeholder="Confirm password"
                   value={values.passwordConfirmation || ""}
                   onChange={handleChange}
                 />
                 <ValidationType type="passwordConfirmation" />
               </Col>
               <ButtonContainer>
                 <Button name="submit">{"Submit"}</Button>
               </ButtonContainer>
             </FormGroup>
           </Slide>
         </Col>
       </Row>
     </ContactContainer>
    </Container>
  );
};

export default Register;

