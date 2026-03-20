import "./App.css";
import "./components/header/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import AddCandidatura from "./pages/addCandidatura/addCandidatura.jsx";
import InfosCandidatura from "./pages/infosCandidatura/InfosCandidatura.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

function App() {
  return (
    <>  
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/addCandidatura" element={<AddCandidatura />}/>
          <Route path="/infosCandidatura/:id_candidatura" element={<InfosCandidatura />} />
        </Routes>
       </BrowserRouter> 
    </>
  );
}

export default App;
