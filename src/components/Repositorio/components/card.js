import React from 'react';
import '../repositorio.style.css'

function Card({id,name,href}) {
    return (
    <a href={href} className="card" rel="noreferrer" target="_blank">
        <h3 key={id}>{name}</h3>
    </a>);
}

export default Card;