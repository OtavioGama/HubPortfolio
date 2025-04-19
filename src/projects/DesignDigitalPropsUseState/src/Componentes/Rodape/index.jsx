import React from "react";
import './style.css';

export default function Rodape(props) {

    return (
        <footer>
            <div className={props.tema}>
                <div className="Rodape lar-peq">
                    <img alt="logo" src="/DesignDigitalPropsUseState/assets/logo.png" />

                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

                    <div className="redesSociais">
                        <div>
                            <img alt="Facebook" src="/DesignDigitalPropsUseState/assets/facebook.png" />
                            <img alt="Twitter"  src="/DesignDigitalPropsUseState/assets/twitter.png" />
                            <img alt="Linkedin" src="/DesignDigitalPropsUseState/assets/linkedin.png" />
                        </div>

                        <div>
                            <img alt="Dribble"  src="/DesignDigitalPropsUseState/assets/dribble.png" />
                            <img alt="Behance"  src="/DesignDigitalPropsUseState/assets/behance.png" />
                            <img alt="Google+"  src="/DesignDigitalPropsUseState/assets/google-plus.png" />
                        </div>
                    </div>

                    <p>Copyright 2025 © <span>Otávio Gama</span></p>
                </div>
            </div>
        </footer>
    );
};
