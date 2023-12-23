import { lazy, useState } from "react";
import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { ValidationTypeProps, RegisterProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import Validate from "./validation";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { DivContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Container = lazy(() => import("../../common/Container"));
const CodeSenderForm = lazy(() => import("../../components/CodeSenderForm"));
const SuccessMessage = "You will receive an email to confirm your registration";

const Register = () => {
  const [ showContact, setShowContent ] = useState(false);
  const [ email, setEmail ] = useState("");
  const ShowCodeSenderForm = () => { setShowContent(true); } 
  const SaveEmail = () => { setEmail(values.email); }
  const { values, errors, handleChange, handleSubmit } = useForm(Validate,
                                                                 SuccessMessage,
                                                                 ShowCodeSenderForm,
                                                                 SaveEmail) as RegisterProps | any;
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
      { showContact ? <CodeSenderForm email={email} /> :
      <DivContainer>
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
     </DivContainer>
     }
    </Container>
  );
};

export default Register;

