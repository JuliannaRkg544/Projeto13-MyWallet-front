import Login from "./Login";
import Signin from "./Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entries from "./Entries";
import Outs from "./Outs";
import Transactions from "./Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/outs" element={<Outs />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
