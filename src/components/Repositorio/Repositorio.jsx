import { useState, useEffect } from 'react'
import './repositorio.style.css'
import Card from './components/card'


const Repositorio = () => {
    const [repositories, setRepositories] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(() =>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/giselz/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()
    },[])

    useEffect(() =>{
        const buscaDireta = busca.trim().toLowerCase()
        setFiltro(
            repositories.filter(repo =>{
                return repo.name.includes(buscaDireta)
            })
        )
    },[repositories, busca])
    return(
                <div className="card-container" >
                    <div className="div-input">
                        <input className="input" placeholder="Busque um repositório" onChange={e => { setBusca(e.target.value)}}/>
                    </div>
                    <div className="list-card">
                        {filtro.map(repo=>
                            <Card href={repo.html_url} id={repo.id} name={repo.name}/>
                        )}
                    </div>
                </div>
    )
}

export default Repositorio 