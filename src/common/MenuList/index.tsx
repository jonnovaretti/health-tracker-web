import { Container, Item, ListContainer, TextItem } from "./styles";

const MenuList = (props: any) => (
  <Container>
    <ListContainer>
      <Item>
        <TextItem>
          {"Files"}
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
