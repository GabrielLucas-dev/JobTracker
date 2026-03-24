import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLoginSubmit() {
    axios.post("http://localhost:3030/users", { email, senha })
    .then((res) => console.log(res.data))
    .catch(error => console.log(error))
  }

  return (
    <>
      <section className="container-login">
        <div className="inner-login">
          <div>
            <h1 className="title">JobTracker</h1>
          </div>
          <form action="" className="form-login" onSubmit={handleLoginSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha</label>
              <input
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div>
              <input type="submit" value="Entrar" className="btn-login" />
            </div>
            <div className="no-account">
              <p>
                Ainda não tem uma conta? <Link to="/register">Registre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
