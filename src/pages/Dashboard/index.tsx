import { lazy } from "react";
import { Row, Col } from "antd";
import { Slide,} from "react-awesome-reveal";
import { DivContainer } from "./styles";

const Container = lazy(() => import("../../common/Container"));
const Dasboard = () => {
  return (
    <Container>
      <DivContainer>
       <Row justify="space-between" align="middle">
         <Col lg={12} md={12} sm={24} xs={24}>
           <Slide direction="right">
           </Slide>
         </Col>
       </Row>
     </DivContainer>
    </Container>
  );
};

export default Dasboard;
