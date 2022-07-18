import styled from "styled-components";

export default function ContainerTwo({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  margin: 25px 25px;
  header {
    font-size: 26px;
    font-weight: 700;
    line-height: 30.52px;
    margin-bottom: 20px;
    color: #fff;
  }
  input {
    border: none;
    width: 100%;
    height: 58px;
    margin-top: 13px;
    padding-left: 15px;
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
  button:hover {
    filter: brightness(1.2);
    cursor: pointer;
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
