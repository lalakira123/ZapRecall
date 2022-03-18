import React from "react";

import Cards from "./Cards";

const tags = [];

function TelaDois(props) {
    const [totalRespondido, setRespondido] = React.useState(0);
    const [selecionado, setSelecionado] = React.useState(<></>);
    const [resultado, setResultado] = React.useState(<></>);
    const [escondido, setEscondido] = React.useState("");

    function atualizarTelaDois(valor) {
        setRespondido(totalRespondido + valor);
    }

    function verificarResultado() {
        if (totalRespondido === 7 && tags.filter((e) => e.alt === "x").length > 0) {
            setEscondido("escondido");
            setResultado(
                <div className="resultado">
                    <div className="emoji">
                        <img src="./image/sad.png"alt="sad"/>
                        <p>PUTZ!</p>
                    </div>
                    <div className="mensagem">
                        <p>Ainda faltaram alguns ...</p>
                        <p>Mas não desanime!</p>
                    </div>
                </div>
            );
        } else if ( totalRespondido === 7) {
            setEscondido("escondido");
            setResultado(
                <div className="resultado">
                    <div className="emoji">
                        <img src="./image/party.png" alt="party"/>
                        <p>PARABÉNS!</p>
                    </div>
                    <div className="mensagem">
                        <p>Você não esqueceu de </p>
                        <p>nenhum flashcard!</p>
                    </div>
                </div>
            );
        }
    }

    function acrescentarIcone(icone) {
        if (icone === "selecionadoVermelho") {
            tags.push({
                img:"./image/x.png",
                alt:"x"
            });
        }
        if (icone === "selecionadoVerde") {
            tags.push({
                img:"./image/check.png",
                alt:"check"
            });  
        }
        if (icone === "selecionadoAmarelo") {
            tags.push({
                img:"./image/interrogation.png",
                alt:"interrogation"
            }); 
        }
        setSelecionado(tags.map((tag, index) => <img key={index} src={tag.img} alt={tag.alt}/>));
        verificarResultado();
    }

    return (
        <>
            <div className={props.tela}>
                <header>
                    <img src="./image/logo-pequeno.png" alt="ZapRecall"/>
                    <h2>ZapRecall</h2>
                </header>

                <Cards atualizar={atualizarTelaDois} acrescentar={acrescentarIcone}/>

                <footer>
                    {resultado}
                    <p className={escondido}>{totalRespondido}/8 CONCLUÍDOS</p>
                    <div>
                        {selecionado}
                    </div>
                </footer>
            </div>
        </>
    );
}

export default TelaDois;