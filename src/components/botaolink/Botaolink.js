import React from "react";

function BotaoLink(props) {
    console.log(props);
    //props =>{ className: "bla bla bla", href="/"}
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}
export default BotaoLink;