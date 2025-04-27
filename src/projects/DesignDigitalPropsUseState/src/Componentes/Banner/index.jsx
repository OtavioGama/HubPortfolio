import React from "react";
import styles from './style.module.css';

export default function Banner(props) {

    return (
        <section id="banner">
            <div className={styles[props.tema]}>
                <div className={styles['Banner']}>
                    <div className={styles['BannerImagem']}>
                        <img alt="Banner" src="/DesignDigitalPropsUseState/assets/banner.png" />
                    </div>

                    <div className={styles['BannerTitulo']}>
                        <p>BRANDING / UI / UX / TECNOLOGIA</p>

                        <h1>Agência de Branding <br/><span>e design digital</span></h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
