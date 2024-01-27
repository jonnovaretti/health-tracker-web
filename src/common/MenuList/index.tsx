import { Container, Item, ListContainer, TextItem } from "./styles";

const MenuList = () => (
  <Container>
    <ListContainer>
      <Item>
        <TextItem>
          {"Search"}
        </TextItem>
      </Item>
      <Item>
        <TextItem>
          {"Analysis"}
        </TextItem>
      </Item>
    </ListContainer>
  </Container>
);

export default MenuList;
