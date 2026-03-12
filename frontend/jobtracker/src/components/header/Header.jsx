import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <section className="container-header">
          <h1>JobTracker</h1>
          <div className="header-button">
            <Link to="/addCandidatura" className="add-btn">Adicionar candidatura</Link>
          </div>
      </section>
      <section className="container-title">
          <h2>Aqui está a lista de vagas que você se candidatou:</h2>
      </section>
    </>
  );
}

export default Header;
