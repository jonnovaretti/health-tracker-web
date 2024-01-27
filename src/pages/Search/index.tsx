import Container from "../../common/Container";
import { Col, Row } from "antd";
import Input from "../../common/Input";
import { Button } from "../../common/Button";

const Search = () => {
  const change = () => {};
  return (
    <Container>
      <Row> 
      	<Col lg={16}>
      	  <Input
	    type="text"
	    name="Test Name"
	    placeholder="Input the blood test name you want to search"
	    onChange={change}
      	  />
	</Col>
	<Col lg={5}>
      	  <Input
	    type="number"
	    name="Result"
	    placeholder="Input the result" 
	    onChange={change}
      	  />
	</Col>
      </Row>
      <Row>
	<Button name="submit">{"Search"}</Button>
      </Row>
    </Container>
  );
};

export default Search;
