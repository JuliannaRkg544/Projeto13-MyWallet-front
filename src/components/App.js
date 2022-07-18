import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entries from "./Entries";
import Extracts from "./Extracts";
import Transactions from "./Transactions";
import UserContext from "./Context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/extracts" element={<Extracts />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
