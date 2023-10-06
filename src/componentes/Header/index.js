import React from "react";

export default function Header(){
    return(
        <header className="container-topo">
        <div className="limita-secao cabecalho">
            <img src="/src/Assets/logo.png" alt=""/>
            <ul className="links-menu">
                <li><a href="">PRODUTOS</a></li>
                <li><a href="">SOBRE</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>
        </div>
    </header>
    )
}