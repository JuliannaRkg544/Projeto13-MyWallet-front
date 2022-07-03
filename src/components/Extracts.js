import ContainerTwo from "./ContainerTwo";

export default function Extracts() {
  return (
    <ContainerTwo>
      <header>Nova Saída</header>
      <input type="text" placeholder="Valor"></input>
      <input type="text" placeholder="Descrição"></input>
      <button>Salvar saída</button>
    </ContainerTwo>
  );
}
