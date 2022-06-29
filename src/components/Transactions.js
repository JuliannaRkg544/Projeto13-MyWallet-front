import styled from "styled-components";

export default function Transactions() {
  return (
    <Style>
      <header>Olá Fulano </header>
      <main></main>
      <footer>
        <div>
          <p>Nova entrada</p>
        </div>
        <div>
          <p>Nova Saída</p>
        </div>
      </footer>
    </Style>
  );
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
  main {
    width: 100%;
    height: 446px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 13px;
  }
  div {
    width: 50%;
    margin-right: 15px;
    height: 114px;
    background-color: #a328d6;
    display: flex;
    justify-content: start;
    padding: 15px;
    border-radius: 5px;
  }
  div p {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    width: 40px;
    height: 64px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
