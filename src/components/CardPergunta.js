function CardPergunta(props) {
    return(
        <>
            <div className={props.classe}>
                <p>{props.questao}</p>
                <img onClick={props.funcao} src="./image/setinha.png" alt="virar"/>
            </div>
        </>
    );
}

export default CardPergunta;