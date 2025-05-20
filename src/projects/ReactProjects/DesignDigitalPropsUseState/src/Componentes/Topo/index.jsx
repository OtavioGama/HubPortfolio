import React from "react";
import styles from './style.module.css';

export default function Topo(props) {
    return (
        <header className={styles['header']}>
            <div className={styles[props.tema]}>
                <div className={styles['Topo']}>
                    <img className={styles['logo']} alt="Logo" src="/assetsDesignDigitalPropsUseState/assets/logo.png" />

                    <button onClick={props.alterar}>
                        <img alt="Ícone" src={(props.tema === "temaClaro") ? "/assetsDesignDigitalPropsUseState/assets/moon.png" : "/assetsDesignDigitalPropsUseState/assets/sun.png"} />
                    </button>
                </div>
            </div>
        </header>
    );
};
