import { data, Link } from "react-router-dom";
import "./FormCandidatura.css";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function FormCandidatura() {
  const [empresa, setEmpresa] = useState("");
  const [dataCandidatura, setDataCandidatura] = useState("");
  const [statusCandidatura, setStatusCandidatura] = useState("selecione");
  const [localCandidatura, setLocalCandidatura] = useState("");
  const [observacao, setObservacao] = useState("");

  const navigate = useNavigate();

  function handleStatus(e) {
    e.preventDefault();
    setStatusCandidatura(e.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if(statusCandidatura === "selecione") return alert("Selecione um status para a sua candidatura!")

    axios.post('http://localhost:3030/candidaturas', {empresa, dataCandidatura, statusCandidatura, localCandidatura, observacao})
    .then(res => { 
      console.log(res.data)
      navigate('/home');
    })
    .catch(error => console.log("ERRO: ", error)) 

    empresa('')
    dataCandidatura('')
    statusCandidatura('selecione')
    localCandidatura('')
    observacao('')
  }


  return (
    <>
      <div className="title">
        <h1>JobTracker</h1>
      </div>
      <div className="inner-back-btn">
        <Link to="/home" className="back-btn">
          Voltar
        </Link>
      </div>
      <section className="container-candidatura">
        <div className="inner-candidatura">
          <form action="" onSubmit={handleFormSubmit}>
            <label>Nome empresa*</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="EX: Eempresa tal"
              required
            />
            <label>Data da candidatura*</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setDataCandidatura(e.target.value)}
              placeholder="EX: 01/01/2026"
              required
            />
            <label>Status*</label>
            <select name="status_candidatura" id="" onChange={handleStatus}>
              <option value="selecione">Selecione</option>
              <option value="aguardando">Aguardando</option>
              <option value="aprovado">Aprovado</option>
              <option value="entrevista">Em entrevista</option>
              <option value="reprovado">Reprovado</option>
              <option value="cancelado">Cancelada</option>
            </select>
            <label>Local da candidatura*</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setLocalCandidatura(e.target.value)}
              placeholder="EX: Linkedin"
              required
            />
            <label>Observação</label>
            <textarea
              name=""
              id=""
              placeholder=""
              onChange={(e) => setObservacao(e.target.value)}
              
            ></textarea>

            <div className="submit-btn">
              <input type="submit" value="Confirmar" className="add-btn" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormCandidatura;
