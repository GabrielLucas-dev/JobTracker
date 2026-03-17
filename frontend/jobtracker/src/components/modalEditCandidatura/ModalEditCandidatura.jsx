import "./ModalEditCandidatura.css";

function ModalEditCandidatura() {
  return (
    <>
      <section className="container-modal-edit">
        <div className="inner-candidatura edit-candidatura">
            <button className="add-btn" /*onClick={}*/>Cancelar</button>
          <form>
            <label>Nome empresa</label>
            <input type="text" className="input-candidatura" />
            <label>Data da cabdidatura</label>
            <input type="text" className="input-candidatura" />
            <label>Status*</label>
            <select name="status_candidatura" id="">
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
            />
            <label>Observação</label>
            <textarea className="input-candidatura"></textarea>

            <div className="submit-btn">
              <input type="submit" value="Confirmar" className="add-btn" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ModalEditCandidatura;
