import { useEffect, useState } from "react";
import "./InfosCandidatura.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function InfosCandidatura() {
  const { id_candidatura } = useParams();
  const [candidatura, setCandidatura] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3030/candidaturas/${id_candidatura}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCandidatura(res.data);

          if (!token) {
            alert("A sessão expirou, faça login novamente");
            navigate("/login");
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [id_candidatura, token, navigate]);

  return (
    <>
      <div className="inner-back-btn">
        <Link to="/home" className="back-btn">
          Voltar
        </Link>
      </div>
      <section className="container-infos">
        <div className="inner-infos">
          <h3>id</h3>
          <p>{candidatura.id_candidatura}</p>

          <h3>Empresa</h3>
          <p>{candidatura.empresa}</p>

          <h3>Data da candidatura</h3>
          <p>{candidatura.data_candidatura}</p>

          <h3>Status da candidatura</h3>
          <p>{candidatura.status_candidatura}</p>

          <h3>Observação</h3>
          <p>
            {candidatura.observacao
              ? candidatura.observacao
              : "Não há nenhuma observação"}
          </p>

          <h3>Criada em</h3>
          <p>{candidatura.criada_em}</p>
        </div>
      </section>
    </>
  );
}

export default InfosCandidatura;
