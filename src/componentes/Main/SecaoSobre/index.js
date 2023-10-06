import React from "react";

export default function SecaoSobre(){
    return(
        <section id="sobre" className="container-sobre">
            <div className="limita-secao">
                <h2 className="titulo-sobre">QUEM SOMOS NÓS</h2>
                <p className="paragrafo-sobre">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a ótica vida iniciou suas atividades focada no atendimento ao público de<br/>renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="container-cards-sobre">
                    <div className="card-sobre">
                        <img src="Assets/loja.png" alt=""/>
                    </div>
                    <div className="card-sobre card-sobre-texto">
                        <h2>NOSSAS FILIAIS</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-sobre card-sobre-texto">
                        <h2>ATENDIMENTO<br/>FLEXÍVEL</h2>
                        <p>Nossa equipe é treinada para te atender da melhor forma</p>
                    </div>
                    <div className="card-sobre">
                        <img src="Assets/atendimento.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}