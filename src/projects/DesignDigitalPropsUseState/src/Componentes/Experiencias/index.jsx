import React from "react";
import styles from './style.module.css';

import Card from "../Card";

export default function Experiencias(props) {

    return (
        <section id="experiencias" className={styles['experiencias']}>
            <div className={styles[props.tema]}>
                <div className={`${styles['conteudoExperiencias']} ${styles['lar-med']}`}>
                    <h2>Experiências De Trabalho</h2>

                    <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>

                    <div className={styles['cardsContainer']}>
                        <Card
                            data="JUNHO 2012 - 2016"
                            titulo="Web Designer"
                            empresa="Pied Piper StartUp."
                            paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                        />

                        <Card
                            data="AGOSTO 2016 - 2019"
                            titulo="Product Designer"
                            empresa="E Corp."
                            paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                        />

                        <Card
                            data="FEVEREIRO 2019 - 2021"
                            titulo="Digital Consulting"
                            empresa="Arasaka Inc."
                            paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};