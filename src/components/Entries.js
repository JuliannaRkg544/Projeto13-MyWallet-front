import ContainerTwo from "./ContainerTwo";
import UserContext from "./Context/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Entries() {
  const { user } = useContext(UserContext);
  const token = user.token;
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [desc, setDesc] = useState("");

  function handleSubmmit(e) {
    e.preventDefault();
    const body = {
      value: parseFloat(value),
      type: "entry",
      desc,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("token das entrdaas ", token);
    const REACT_APP_API_URL = `${process.env.REACT_APP_API_URL}/transactions`
    const URL = "http://localhost:5000/transactions";
    axios
      .post(REACT_APP_API_URL, body, config)
      .then((response) => {
        console.log(response.data);
        navigate("/transactions");
      })
      .catch((e) => console.log("deu ruim eo enviar uma entrada", e));
  }
  return (
    <ContainerTwo>
      <header>Nova Entrada</header>
      <form>
        <input
          type="text"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <button onClick={handleSubmmit}>Salvar Entrada</button>
      </form>
    </ContainerTwo>
  );
}
