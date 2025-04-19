import React from "react";
import './style.css';

export default function Card(props) {

    let classCard = "Card " + props.tema;

    return (
        <div className={classCard}>
            <p>{props.data}</p>

            <h3>{props.titulo}</h3>

            <p>{props.empresa}</p>

            <p>{props.paragrafo}</p>
        </div>
    );
};