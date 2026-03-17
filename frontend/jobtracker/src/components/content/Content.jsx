import { useEffect, useState } from "react";
import "./Content.css";
import axios from "axios";
import ModalEditCandidatura from "../modalEditCandidatura/ModalEditCandidatura";
import Header from "../header/Header";

function Content() {
  const [candidaturas, setCandidaturas] = useState([]);

  // GET ALL ----------------------------------------
  useEffect(() => {
    axios
      .get("http://localhost:3030/candidaturas")
      .then((res) => {
        setCandidaturas(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // DELETE -----------------------------------------
  const handleDelete = async (id_candidatura) => {
    try {
      await axios.delete(
        `http://localhost:3030/candidaturas/${id_candidatura}`,
      );
      window.location.reload();
    } catch (error) {
      console.log("ERRO ao deletar: ", error);
    }
  };

  // MODAL EDIT --------------------------------------
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  //EDIT --------------------------------------------- ARRUMAR HOJEEEEEEE (17/03/26)

  const [candidaturaSelecionada, setCandidaturaSelecionada] = useState(null);
  const handleEdit = (candidatura) => {
    setCandidaturaSelecionada(candidatura)
    setIsOpen(true);
  }

  return (
    <>
      <div className={isOpen ? "blur" : ""}>
        <Header />
        <section className="container-content">
          <div className="content-layout">
            <div className="content-titles">
              <div>
                <h3>Titulo/Nome empresa</h3>
              </div>
              <div>
                <h3>Data candidatura</h3>
              </div>
              <div>
                <h3>Status</h3>
              </div>
              <div>
                <h3></h3>
              </div>
            </div>

            {candidaturas.map((candidatura, i) => (
              <div className="inner-content" key={i}>
                <div>{candidatura.empresa}</div>
                <div>{candidatura.data_candidatura}</div>
                <div>{candidatura.status_candidatura}</div>
                {isOpen ? (
                  ""
                ) : (
                  <div>
                    <button
                      className="edit-btn"
                      onClick={(e) => handleEdit(candidatura)}
                    >
                      Editar
                    </button>
                    <button
                      className="exclude-btn"
                      onClick={(e) => handleDelete(candidatura.id_candidatura)}
                    >
                      Excluir
                    </button>

                    <button className="infos-btn">Infos</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="modal-edit">
        {isOpen ? <ModalEditCandidatura onClose={closeModal} candidatura={candidaturaSelecionada}/> : ""}
      </div>
    </>
  );
}

export default Content;
