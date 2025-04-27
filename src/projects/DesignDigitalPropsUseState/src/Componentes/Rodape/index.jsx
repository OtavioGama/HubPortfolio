import React from "react";
import styles from './style.module.css';

export default function Rodape(props) {

    return (
        <footer className={styles['footer']}>
            <div className={styles[props.tema]}>
                <div className={`${styles['Rodape']} ${styles['lar-peq']}`}>
                    <img alt="logo" src="/DesignDigitalPropsUseState/assets/logo.png" />

                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

                    <div className={styles['redesSociais']}>
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
