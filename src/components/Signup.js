import ContainerOne from "./ContainerOne";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  function up() {
    const URL = "http://127.0.0.1:5000/signup";
    const body = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    axios
      .post(URL, body)
      .then((response) => {
        console.log("eu vim do back", response.data);
        navigate("/");
      })
      .catch((err) => console.log("deu ruim", err));
  }

  return (
    <ContainerOne>
      <header>My Wallet</header>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
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
      <input
        type="password"
        placeholder="Confirme a senha"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      ></input>
      <button onClick={up}>Cadastrar</button>
      <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </ContainerOne>
  );
}
