import { useEffect, useState } from "react";
import "./ModalEditCandidatura.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function ModalEditCandidatura({ onClose, candidatura }) {

  const [empresa, setEmpresa] = useState("");
  const [dataCandidatura, setDataCandidatura] = useState("");
  const [statusCandidatura, setStatusCandidatura] = useState("");
  const [localCandidatura, setLocalCandidatura] = useState("");
  const [oberservacao, setObservacao] = useState("");

  useEffect(() => {
    if (candidatura) {
      setEmpresa(candidatura.empresa);
      setDataCandidatura(candidatura.data_candidatura);
      setStatusCandidatura(candidatura.status_candidatura);
      setLocalCandidatura(candidatura.local_candidatura);
      setObservacao(candidatura.observacao);
    }
  }, [candidatura]);

  function handleStatus(e) {
    e.preventDefault();
    setStatusCandidatura(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/candidaturas/${candidatura.id_candidatura}`, {
        empresa,
        dataCandidatura,
        statusCandidatura,
        localCandidatura,
        oberservacao,
      }) 
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

      console.log(candidatura)
  }

  return (
    <>
      <section className="container-modal-edit">
        <div className="inner-candidatura edit-candidatura">
          <button className="add-btn" onClick={onClose}>
            Cancelar
          </button>
          <form onSubmit={handleEditSubmit}>
            <label>Nome empresa</label>
            <input
              type="text"
              className="input-candidatura"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <label>Data da cabdidatura</label>
            <input
              type="text"
              className="input-candidatura"
              value={dataCandidatura}
              onChange={(e) => setDataCandidatura(e.target.value)}
            />
            <label>Status*</label>
            <select
              name="status_candidatura"
              id=""
              value={statusCandidatura}
              onChange={handleStatus}
            >
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
              placeholder="EX: Linkedin"
              required
              value={localCandidatura}
              onChange={(e) => setLocalCandidatura(e.target.value)}
            />
            <label>Observação</label>
            <textarea
              className="input-candidatura"
              value={oberservacao}
              onChange={(e) => setObservacao(e.target.value)}
            ></textarea>

            <div className="submit-btn">
              <input
                type="submit"
                value="Confirmar"
                className="add-btn"
                onClick={handleEditSubmit}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ModalEditCandidatura;
