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
  const URL = process.env.REACT_APP_API_URL;

  function handleSubmmit(e) {
    e.preventDefault();
    const body = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    axios
      .post(`${URL}/signup`, body)
      .then((response) => {
        console.log("eu vim do back", response.data);
        navigate("/");
      })
      .catch((err) => console.log("deu ruim", err));
  }

  return (
    <ContainerOne>
      <header>My Wallet</header>
      <form>
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
      </form>
      <button onClick={handleSubmmit}>Cadastrar</button>
      <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </ContainerOne>
  );
}
