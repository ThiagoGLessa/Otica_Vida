import React from "react";

export default function SecaoContatos(){
    return(
        <section id="contatos" className="container-contatos">
            <div className="limita-secao">
                <h2 className="titulo-contato">FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhece uma das nossas lojas ou entre em contato através de nossas redes sociais ou de atendimento.</p>
                <div className="container-cards-contato">
                    <div className="card-contato">
                        <p className="subtitulo-contato">Contato</p>
                        <div>
                            <img src="Assets/local.png" alt=""/>
                            <p> Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <img src="Assets/telefone.png" alt=""/>
                            <p>(21)9999-9999</p>
                        </div>
                        <div>
                            <img src="Assets/email.png" alt=""/>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="card-contato">
                        <p className="subtitulo-contato"> Nossas Redes Sociais</p>
                        <div>
                            <img src="Assets/fb.png" alt=""/>
                            <p>/Oticavida</p>
                        </div>
                        <div>
                            <img src="Assets/ig.png" alt=""/>
                            <p>@oticavidarj</p>
                        </div>
                        <div>
                            <img src="Assets/tt.png" alt=""/>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}