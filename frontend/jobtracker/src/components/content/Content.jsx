import { useEffect, useState } from 'react';
import './Content.css'
import axios from 'axios';

function Content() {

    const [ candidaturas, setCandidaturas ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/candidaturas')
        .then(res => {
            setCandidaturas(res.data)
        }). catch(error => console.log(error))
    }, [])

    return(
        <>
        <section className='container-content'>
            <div className='content-layout'>
                <div className='content-titles'>
                    <div><h3>Titulo/Nome empresa</h3></div>
                    <div><h3>Data candidatura</h3></div>
                    <div><h3>Status</h3></div>
                    <div><h3></h3></div>
                </div>

                {candidaturas.map((candidatura, i) => (
                <div className='inner-content' key={i}>
                    <div>{candidatura.empresa}</div>
                    <div>{candidatura.data_candidatura}</div>
                    <div>{candidatura.status_candidatura}</div>
                    <div>
                        <button className='edit-btn'>Editar</button>
                        <button className='exclude-btn'>Excluir</button>
                        <button className='infos-btn'>Infos</button>
                    </div> 
                </div>
                ))}

            </div>
        </section>
        </>
    )
}

export default Content