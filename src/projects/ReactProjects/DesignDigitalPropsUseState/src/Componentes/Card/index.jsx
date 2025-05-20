import React from "react";
import styles from './style.module.css';

export default function Card(props) {
    return (
        <div className={`${styles['Card']} ${styles[props.tema]}`}>
            <p>{props.data}</p>

            <h3>{props.titulo}</h3>

            <p>{props.empresa}</p>

            <p>{props.paragrafo}</p>
        </div>
    );
};