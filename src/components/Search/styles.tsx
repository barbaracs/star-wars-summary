import styled from "styled-components";

const Input = styled.input`
  width: 60%;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #848422;
  border-radius: 100px;
  padding: 0 20px;
  font-size: 15px;
  line-height: 1;
  color: white;
  background-color: rgb(55 55 55);

  :focus,
  :focus-visible {
    border: 1px solid #d3d30e;
    outline: none;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
`

export default {
  Input
}