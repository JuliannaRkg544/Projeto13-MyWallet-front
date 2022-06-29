import ContainerOne from "./ContainerOne";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <ContainerOne>
      <header>My Wallet</header>
      <input type="email" placeholder="E-mail"></input>
      <input type="password" placeholder="Senha"></input>
      <button>Entrar</button>
      <Link to={"/signin"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </ContainerOne>
  );
}
