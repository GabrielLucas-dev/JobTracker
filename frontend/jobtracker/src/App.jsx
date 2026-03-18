import "./App.css";
import "./components/header/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import AddCandidatura from "./pages/addCandidatura/addCandidatura.jsx";
import InfosCandidatura from "./pages/infosCandidatura/InfosCandidatura.jsx";

function App() {
  return (
    <>  
       <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/addCandidatura" element={<AddCandidatura />}/>
          <Route path="/infosCandidatura/:id_candidatura" element={<InfosCandidatura />} />
        </Routes>
       </BrowserRouter> 
    </>
  );
}

export default App;
