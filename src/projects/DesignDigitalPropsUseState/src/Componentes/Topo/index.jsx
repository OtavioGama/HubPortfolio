import React from "react";
import './style.css';

export default function Topo(props) {
    return (
        <header>
            <div className={props.tema}>
                <div className="Topo">
                    <img className="logo" alt="Logo" src="/DesignDigitalPropsUseState/assets/logo.png" />

                    <button onClick={props.alterar}>
                        <img alt="Ícone" src={(props.tema === "temaClaro") ? "/DesignDigitalPropsUseState/assets/moon.png" : "/DesignDigitalPropsUseState/assets/sun.png"} />
                    </button>
                </div>
            </div>
        </header>
    );
};
