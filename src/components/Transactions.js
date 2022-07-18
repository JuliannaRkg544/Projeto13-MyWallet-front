import styled from "styled-components";
import Vectorlesss from "../assets/imgs/Vectorlesss.png";
import Vectorpluss from "../assets/imgs/Vectorpluss.png";
import Vector from "../assets/imgs/Vector.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./Context/UserContext";
import { useContext, useEffect, useState } from "react";
import RenderTransaction from "./RenderTransaction";

export default function Transactions() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  function signOut() {
    const token = user.token;
    const URL = `${process.env.REACT_APP_API_URL}/logout`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(URL, {}, config)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.log("erro ao sair :/", err));
  }

  useEffect(() => {
    async function render() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/logout`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(response.data);
        setTransactions(response.data);
      } catch (error) {
        console.log(error.response);
      }
    }

    render();
  }, []);

  function build() {
    console.log("tamanho ", transactions.length);
    if (transactions.length > 0) {
      return transactions.map((t, index) => {
        return (
          <RenderTransaction
            desc={t.desc}
            value={t.value}
            type={t.type}
          ></RenderTransaction>
        );
      });
    } else {
      return <p>Não há registros de entrada ou saída</p>;
    }
  }
  return (
    <Style>
      <header>
        <span> Olá {user.name}</span>{" "}
        <img src={Vector} alt="vect" onClick={signOut} />
      </header>
      <main>{build()}</main>
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
    width: 95%;
    height: 114px;
    background-color: #a328d6;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom p {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    width: 40px;
    height: 64px;
  }
  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
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
