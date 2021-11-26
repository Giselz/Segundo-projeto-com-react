import React from 'react';
import '../repositorio.style.css'

function Card({id,name}) {
    return (
    <div className="card">
        <h3 key={id}>{name}</h3>
    </div>) ;
}

export default Card;