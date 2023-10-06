import React from "react";

export default function Header(){
    return(
        <header className="container-topo">
            <div className="limita-secao cabecalho">
            <img src='Assets/logo.png' alt=""/>
                <ul className="links-menu">
                    <li><a href="#produtos">PRODUTOS</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#contatos">CONTATOS</a></li>
                </ul>
            </div>
        </header>
    )
}