import { Slide,} from "react-awesome-reveal";
import { DivContainer } from "./styles";
import MenuList from "../../common/MenuList";
import Container from "../../common/Container";
import { Row, Col } from "antd";
import Input from "../../common/Input";
import { Outlet } from "react-router-dom";

const Dasboard = () => {
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
                <Outlet />
              </Col>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
};

export default Dasboard;
