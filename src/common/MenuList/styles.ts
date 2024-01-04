import styled from "styled-components";

export const Container = styled("div")`
  z-index: 1000;
  left: 30px;
  width: 200px;
  background: #2e186a;
   -webkit-transition: all 0.5s ease;
   -moz-transition: all 0.5s ease;
   -o-transition: all 0.5s ease;
   transition: all 0.5s ease;
`;

export const ListContainer = styled("ul")`
   top: 0;
   width: 200px;
   margin: 0;
   padding: 0;
   list-style: none;
   border-radius: 0;
`;

export const Item = styled("li")`
   text-indent: 15px;
   line-height: 40px;
`;

export const TextItem = styled("a")`
   display: block;
   border: 1px solid;
   text-decoration: none;
   font-weight: 700;
   color: ${(p) => (p.color ? "#2E186A" : "#fff")};
   transition: all 0.3s ease-in-out;
   &:hover,
   &:active,
   &:focus {
     color: #fff;
     background-color: rgb(255, 130, 92);
   }
`;

