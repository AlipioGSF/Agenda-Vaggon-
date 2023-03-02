import "./App.css";
import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/User";
import { Agenda } from "./pages/Agenda";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
