import './titulo.style.css'

const Titulo = (props) => {
    return(
        <div>
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="subtitulo">
                <h2>{props.subtitulo}</h2>
            </div>
        </div>
    )
}

export default Titulo 