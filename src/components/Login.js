import ContainerOne from "./ContainerOne";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function log() {
    const URL = "http://127.0.0.1:5000/";
    const body = {
      email,
      password,
    };

    axios
      .post(URL, body)
      .then((response) => {
        // eslint-disable-next-line
        const token = response.data;
        console.log("TOKEN ", response.data);
        navigate("/transactions");
      })
      .catch((err) => {
        console.log("erro ao logar", err);
      });
  }
  return (
    <ContainerOne>
      <header>My Wallet</header>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={log}>Entrar</button>
      <Link to={"/signup"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </ContainerOne>
  );
}
