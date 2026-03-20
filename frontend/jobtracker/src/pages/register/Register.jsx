import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
      e.preventDefault()
      
      axios.post('http://localhost:3030/users', {nome, email, senha})
      .then(res => console.log(res.data))
      .catch(error => console.log(error))

      // NÃO DEIXAR O USUARIO SER CRIADO SE O EMAIL JÁ ESTIVER SENDO UTILIZADO
    }

    return(
        <>
        <section className="container-login">
        <div className="inner-login">
          <div>
            <h1 className="title">JobTracker</h1>
          </div>
          <form action="" className="form-login" onSubmit={handleSubmit}>
            <div>
              <label>Nome</label>
              <input type="text" onChange={(e) => setNome(e.target.value)} required/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" onChange={(e) => setSenha(e.target.value)} required/>
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