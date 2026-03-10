import "./Header.css";

function Header() {
  return (
    <>
      <section className="container-header">
          <h1>JobTracker</h1>
          <div className="header-button">
            <button>Adicionar candidatura</button>
          </div>
      </section>
      <section className="container-title">
          <h2>Aqui está a lista de vagas que você se candidatou:</h2>
      </section>

    </>
  );
}

export default Header;
