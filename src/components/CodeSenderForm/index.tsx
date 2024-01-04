import { useEffect, lazy } from "react";
import { DivContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { Row, Col } from "antd";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { useForm } from "../../common/utils/useForm";
import Validate from "./validate";
import { ValidationTypeProps } from "./types";
import { Slide, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Container = lazy(() => import("../../common/Container"));
const SuccessMessage = "Successfully confirmation";
const CodeSenderForm = (props: { email: string }) => {
  const navigateTo = useNavigate();
  const Navigate = () => { navigateTo('/login'); }
  useEffect(() => { values.email = props.email; }, []);
  const { values, errors, handleChange, handleSubmit } = useForm(Validate,
                                                                 'users/confirm',
                                                                 SuccessMessage,
                                                                 Navigate) as any;
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
                      disabled={true}
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      value={props.email || ""}
                      onChange={handleChange}
                    />
                    <ValidationType type="email" />
                  </Col>
                  <Col span={24}>
                    <Input
                      type="text"
                      name="code"
                      placeholder="Input your code here"
                      value={values.code || ""}
                      onChange={handleChange}
                    />
                    <ValidationType type="code" />
                  </Col>
                  <ButtonContainer>
                    <Button name="submit">{"Submit"}</Button>
                  </ButtonContainer>
                </FormGroup>
              </Slide>
            </Col>
          </Row>
        </DivContainer>
      </Container>
  )
};

export default CodeSenderForm;
