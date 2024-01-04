import { lazy } from "react";
import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { ResponseToken, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import Validate from "./validation";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { DivContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { useNavigate} from "react-router-dom";

const Container = lazy(() => import("../../common/Container"));
const SuccessMessage = "Login successfull";
const Login = () => {
  const navigateTo = useNavigate();
  const FinishRequest = () => {
    navigateTo('/dashboard');
  };
  const { values, errors, handleChange, handleSubmit, response } = useForm(Validate,
                                                                           'users/login',
                                                                           SuccessMessage,
                                                                           FinishRequest) as any;

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
      <DivContainer>
       <Row justify="space-between" align="middle">
         <Col lg={12} md={12} sm={24} xs={24}>
           <Slide direction="right">
             <FormGroup autoComplete="off" onSubmit={handleSubmit}>
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
               <ButtonContainer>
                 <Button name="login">{"Login"}</Button>
               </ButtonContainer>
             </FormGroup>
           </Slide>
         </Col>
       </Row>
     </DivContainer>
    </Container>
  );
};

export default Login;
