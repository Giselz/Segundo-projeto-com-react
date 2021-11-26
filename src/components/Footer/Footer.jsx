import './footer.style.css'

function Footer (){
    return(    
        <div className="footer">
            <p className="textoFooter">Feito com 💜 por <a className="linkGitHubAutora" href="https://github.com/Giselz" rel="noreferrer" target="_blank">
            <span className="autora">Gisele dos Santos </span></a> 
            | <a className="linkGitHubReprograma" href="https://reprograma.com.br/" rel="noreferrer" target="_blank" > <span className="reprograma">Reprograma</span></a>
            </p>
        </div>
    )
}
export default Footer