import styled from "styled-components";

export default function ContainerOne({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 25px;
  header {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50.37px;
    margin-bottom: 20px;
    color: #fff;
  }
  input {
    border: none;
    width: 100%;
    padding: 15px;
    height: 58px;
    margin-top: 13px;
    background-color: #fff;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  button {
    border: none;
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a328d6;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-top: 13px;
    border-radius: 5px;
  }
  span {
    font-weight: 700;
    color: #fff;
    width: 200x;
    height: 18px;
  }
  a {
    margin-top: 36px;
    text-decoration: none;
  }
`;
