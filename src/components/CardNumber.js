function CardNumber(props) {
    return (
        <>
            <div className={props.card}>
                <p>Pergunta {props.number}</p>
                <img className={props.jogo} onClick={props.funcao} src="./image/play.png" alt="play"/>
                <img className={props.verde} src="./image/check.png" alt="check"/>
                <img className={props.amarelo} src="./image/interrogation.png" alt="interrogation"/>
                <img className={props.vermelho} src="./image/x.png" alt="x"/>
            </div>
        </>
    );
}

export default CardNumber;