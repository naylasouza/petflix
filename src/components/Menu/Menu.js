import React from "react";
import Logo from "../../img/Logo.png";
import BotaoLink from "../botaolink/Botaolink";
import "./menu.css"


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="petlix logo" />
            </a>

            <BotaoLink className="botaolink" href="/">
                Novo vídeo
            </BotaoLink>
        </nav>
    );
}
export default Menu;