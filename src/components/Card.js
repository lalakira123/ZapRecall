import React from "react";

function Card(props) {
    const [carta, setCarta] = React.useState("card");
    const [pergunta, setPergunta] = React.useState("card pergunta escondido");
    const [resposta, setResposta] = React.useState("card resposta escondido")

    function mostrarPergunta() {
        setCarta("card escondido");
        setPergunta("card pergunta");
    }

    function mostrarResposta() {
        setPergunta("card pergunta escondido");
        setResposta("card resposta");
    }

    return (
        <>
            <div className={carta} onClick={mostrarPergunta}>
                <p>Pergunta {props.indice}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className={pergunta}>
                <p>{props.questao}</p>
                <img onClick={mostrarResposta} src="./image/setinha.png" alt="virar"/>
            </div>

            <div className={resposta}>
                <p>{props.resposta}</p>
                <div>
                    <button className="vermelho">Não lembrei</button>
                    <button className="amarelo">Quase não lembrei</button>
                    <button className="verde">Zap!</button>
                </div>
            </div>
        </>
    )
}

export default Card;