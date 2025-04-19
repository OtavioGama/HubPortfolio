import React from "react";
import './style.css';

export default function Banner(props) {

    return (
        <section id="banner">
            <div className={props.tema}>
                <div className="Banner">
                    <div className="BannerImagem">
                        <img alt="Banner" src="/DesignDigitalPropsUseState/assets/banner.png" />
                    </div>

                    <div className="BannerTitulo">
                        <p>BRANDING / UI / UX / TECNOLOGIA</p>

                        <h1>Agência de Branding <br/><span>e design digital</span></h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
