import React from "react";

export default function SecaoProduto(){
    return(
        <section id="produtos" className="container-produto">
            <div className="limita-secao">
                <h1 className="titulo-nosso-produto">NOSSOS PRODUTOS</h1>
                <p>Trabalhamos com óculos de grau de sol, lentes trasitions nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="container-cards">
                    <div className="card-oculos">
                        <h2>Óculos de grau</h2>
                        <img src="Assets/oculos01.png" alt=""/>
                        <p>R$ 499,99</p>
                    </div>
                    <div className="card-oculos">
                        <h2>Óculos transition</h2>
                        <img src="Assets/oculos02.png" alt=""/>
                        <p>R$ 749,99</p>
                    </div>
                    <div className="card-oculos">
                        <h2>Óculos de sol</h2>
                        <img src="Assets/oculos03.png" alt=""/>
                        <p>R$ 699,99</p>
                    </div>
                    <div className="card-oculos">
                        <h2>Óculos infantil</h2>
                        <img src="Assets/oculos04.png" alt=""/>
                        <p>R$ 499,99</p>
                    </div>
                </div>
                <p className="paragrafo-vantagens">Todos os nossos produtos incluem: </p>
                <ul className="descricao-produtos">
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}