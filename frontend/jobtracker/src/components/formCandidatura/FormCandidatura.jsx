import { Link } from "react-router-dom";
import "./FormCandidatura.css";
import { useState } from "react";

function FormCandidatura() {
  const [empresa, setEmpresa] = useState("");
  const [dataCandidatura, setDataCandidatura] = useState("");
  const [status, setStatus] = useState("selecione");
  const [localCandidatura, setLocalCandidatura] = useState("");
  const [observacao, setObservacao] = useState("");

  function handleStatus(e) {
    setStatus(e.target.value);
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
          <form action="">
            <label htmlFor="">Nome empresa</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="EX: Eempresa tal"
            />
            <label htmlFor="">Data da candidatura</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setDataCandidatura(e.target.value)}
              placeholder="EX: 01/01/2026"
            />
            <label htmlFor="">Status</label>
            <select name="status-candidatura" id="" onChange={handleStatus}>
              <option value="selecione">Selecione</option>
              <option value="aguardando">Aguardando</option>
              <option value="aprovado">Aprovado</option>
              <option value="entrevista">Em entrevista</option>
              <option value="reprovado">Reprovado</option>
              <option value="cancelada">Cancelada</option>
            </select>
            <label htmlFor="">Local da candidatura</label>
            <input
              type="text"
              className="input-candidatura"
              onChange={(e) => setLocalCandidatura(e.target.value)}
              placeholder="EX: Linkedin"
            />
            <label htmlFor="">Observação</label>
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
