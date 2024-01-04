import { Slide,} from "react-awesome-reveal";
import { DivContainer } from "./styles";
import MenuList from "../../common/MenuList";
import Container from "../../common/Container";
import { Row, Col } from "antd";
import Input from "../../common/Input";

const Dasboard = () => {
  const handleChange = () => {};
  return (
    <Container>
      <Row justify="space-between" align="middle">
        <Col lg={4}>
          <DivContainer>
             <Slide direction="left">
                <MenuList />
             </Slide>
          </DivContainer>
        </Col>
        <Col lg={17}>
          <Slide direction="right">
              <Col span={24}>
                <Input
                  type="file"
                  name="Upload new blood test file"
                  placeholder="Your file"
                  onChange={handleChange}
                />
              </Col>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
};

export default Dasboard;
