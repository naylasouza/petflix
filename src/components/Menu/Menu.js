import React from "react";
import Logo from "../../img/Logo.png";
// import BotaoLink from "../botaolink/Botaolink";
import "./menu.css"
import Button from "../Button/button";


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="petlix logo" />
            </a>

            <Button className="botaolink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;