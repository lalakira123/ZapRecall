import React from "react";

function Card(props) {
    const [carta, setCarta] = React.useState("card");
    const [pergunta, setPergunta] = React.useState("card pergunta escondido");
    const [resposta, setResposta] = React.useState("card resposta escondido");
    const [jogo, setJogo] = React.useState("");
    const [vermelho, setVermelho] = React.useState("escondido");
    const [amarelo, setAmarelo] = React.useState("escondido");
    const [verde, setVerde] = React.useState("escondido");

    function mostrarPergunta() {
        setCarta("card escondido");
        setPergunta("card pergunta");
    }

    function mostrarResposta() {
        setPergunta("card pergunta escondido");
        setResposta("card resposta");
    }

    function classificarVermelho() {
        setResposta("card resposta escondido");
        setCarta("card vermelho");
        setJogo("escondido");
        setVermelho("");
    }

    function classificarVerde() {
        setResposta("card resposta escondido");
        setCarta("card verde");
        setJogo("escondido");
        setVerde("");
    }

    function classificarAmarelo() {
        setResposta("card resposta escondido");
        setCarta("card amarelo");
        setJogo("escondido");
        setAmarelo("");
    }

    return (
        <>
            <div className={carta}>
                <p>Pergunta {props.indice}</p>
                <img className={jogo} onClick={mostrarPergunta} src="./image/play.png" alt="play"/>
                <img className={verde} src="./image/check.png" alt="check"/>
                <img className={amarelo} src="./image/interrogation.png" alt="interrogation"/>
                <img className={vermelho} src="./image/x.png" alt="x"/>
            </div>

            <div className={pergunta}>
                <p>{props.questao}</p>
                <img onClick={mostrarResposta} src="./image/setinha.png" alt="virar"/>
            </div>

            <div className={resposta}>
                <p>{props.resposta}</p>
                <div>
                    <button className="vermelho" onClick={classificarVermelho}>Não lembrei</button>
                    <button className="amarelo" onClick={classificarAmarelo}>Quase não lembrei</button>
                    <button className="verde" onClick={classificarVerde}>Zap!</button>
                </div>
            </div>
        </>
    )
}

export default Card;