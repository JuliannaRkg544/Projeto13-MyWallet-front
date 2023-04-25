import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerTwo from "./ContainerTwo";
import UserContext from "./Context/UserContext";

export default function Extracts() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [desc, setDesc] = useState("");
  const { user } = useContext(UserContext);
  const token = user.token;

  function handleSubmmit(e) {
    e.preventDefault();
    const body = {
      value: parseFloat(value),
      type: "extract",
      desc,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = "http://localhost:5000/transactions";
    const REACT_APP_API_URL = `${process.env.REACT_APP_API_URL}/transactions`

    axios
      .post(REACT_APP_API_URL, body, config)
      .then((response) => {
        console.log(response.data);
        navigate("/transactions");
      })
      .catch((e) => console.log("deu ruim eo enviar uma saída", e));
  }

  return (
    <ContainerTwo>
      <header>Nova Saída</header>
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
      <button onClick={handleSubmmit}>Salvar saída</button>
    </ContainerTwo>
  );
}
