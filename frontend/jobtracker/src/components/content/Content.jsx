import './Content.css'

function Content() {
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
                <div className='inner-content'>
                    <div>Atendo360</div>
                    <div>10/03/2026 18h50</div>
                    <div>Aprovado</div>
                    <div>
                        <button className='edit-btn'>Editar</button>
                        <button className='exclude-btn'>Excluir</button>
                        <button className='infos-btn'>Infos</button>
                    </div>
                </div>
                <div className='inner-content'>
                    <div>Atendo360</div>
                    <div>10/03/2026 18h50</div>
                    <div>Reprovado</div>
                    <div>
                        <button className='edit-btn'>Editar</button>
                        <button className='exclude-btn'>Excluir</button>
                        <button className='infos-btn'>Infos</button>
                    </div>
                </div>
                <div className='inner-content'>
                    <div>Atendo360</div>
                    <div>10/03/2026 18h50</div>
                    <div>Aguardando</div>
                    <div>
                        <button className='edit-btn'>Editar</button>
                        <button className='exclude-btn'>Excluir</button>
                        <button className='infos-btn'>infos</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Content