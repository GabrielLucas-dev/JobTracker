import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <>
        <section className="container-login">
        <div className="inner-login">
          <div>
            <h1 className="title">JobTracker</h1>
          </div>
          <form action="" className="form-login">
            <div>
              <label>Nome</label>
              <input type="text" onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div>
              <input type="submit" value="Entrar" className="btn-login"/>
            </div>
            <div className="no-account">
                <p>Já tem uma conta? <Link to='/Login'>Login</Link></p>
            </div>
          </form>
        </div>
      </section>
      </>
    )
}

export default Register