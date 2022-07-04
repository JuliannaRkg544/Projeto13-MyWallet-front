import ContainerOne from "./ContainerOne";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "./Context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  // eslint-disable-next-line

  function handleSubmmit(e) {
    e.preventDefault();
    const URL = "https://mywalletbackjuliana.herokuapp.com/";
    const body = {
      email,
      password,
    };

    axios
      .post(URL, body)
      .then((response) => {
        // eslint-disable-next-line
        const { token, name } = response.data;
        setUser({ name, token });
        console.log("TOKEN ", response.data.token);
        navigate("/transactions");
      })
      .catch((err) => {
        console.log("erro ao logar", err);
      });
  }
  return (
    <ContainerOne>
      <header>My Wallet</header>
      <form>
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
      </form>
      <button onClick={handleSubmmit}>Entrar</button>
      <Link to={"/signup"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </ContainerOne>
  );
}
