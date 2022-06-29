import ContainerTwo from "./ContainerTwo";

export default function Entries() {
  return (
    <ContainerTwo>
      <header>Nova Entrada</header>
      <input type="text" placeholder="Valor"></input>
      <input type="text" placeholder="Descrição"></input>
      <button>Salvar Entrada</button>
    </ContainerTwo>
  );
}
