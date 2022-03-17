import React from "react";

import CardNumber from "./CardNumber";
import CardPergunta from "./CardPergunta";
import CardResposta from "./CardResposta";

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
            <CardNumber card={carta} number={props.indice} jogo={jogo} 
            vermelho={vermelho} verde={verde} amarelo={amarelo} funcao={mostrarPergunta}/>
            
            <CardPergunta classe={pergunta} questao={props.questao} funcao={mostrarResposta}/>
            
            <CardResposta classe={resposta} resposta={props.resposta} funcaoVermelho={classificarVermelho}
            funcaoVerde={classificarVerde} funcaoAmarelo={classificarAmarelo}/>
        </>
    )
}

export default Card;