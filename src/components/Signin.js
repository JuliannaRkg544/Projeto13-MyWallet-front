import ContainerOne from "./ContainerOne";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <ContainerOne>
      <header>My Wallet</header>
      <input type="text" placeholder="Nome"></input>
      <input type="email" placeholder="E-mail"></input>
      <input type="password" placeholder="Senha"></input>
      <input type="password" placeholder="Confirme a senha"></input>
      <button>Cadastrar</button>
      <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </ContainerOne>
  );
}
