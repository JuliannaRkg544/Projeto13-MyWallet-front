import styled from "styled-components";
import Vectorlesss from "../assets/imgs/Vectorlesss.png";
import Vectorpluss from "../assets/imgs/Vectorpluss.png";
import Vector from "../assets/imgs/Vector.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./Context/UserContext";
import { useContext } from "react";

export default function Transactions() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function signOut() {
    const token = user.token;
    //deletar token do database
    //navegar para pagina inicial
    const URL = "http://127.0.0.1:5000/logout";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("http://127.0.0.1:5000/logout", {}, config)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.log("erro ao sair :/", err));
  }
  return (
    <Style>
      <header>
        <span> Olá {user.name}</span>{" "}
        <img src={Vector} alt="vect" onClick={signOut} />
      </header>
      <main></main>
      <footer>
        <Link to={"/entries"}>
          <div className="bottom">
            <img id="plus" src={Vectorpluss} alt="plus" />
            <p>Nova entrada</p>
          </div>
        </Link>
        <Link to={"/extracts"}>
          <div className="bottom">
            <img id="less" src={Vectorlesss} alt="less" />
            <p>Nova Saída</p>
          </div>
        </Link>
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
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  div {
    width: 100%;
    margin-right: 15px;
    height: 114px;
    background-color: #a328d6;
    display: flex;
    justify-content: start;
    padding: 15px;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
  }
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
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
    justify-content: space-around;
    width: 100%;
  }
  #less {
    width: 9.38px;
    height: 1.56px;
  }
  img {
    margin-bottom: 20px;
  }
  #plus {
    width: 9.38px;
    height: 9.38px;
  }
`;
