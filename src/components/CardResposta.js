function CardResposta(props) {
    return(
        <>
            <div className={props.classe}>
                <p>{props.resposta}</p>
                <div>
                    <button className="vermelho" onClick={props.funcaoVermelho}>Não lembrei</button>
                    <button className="amarelo" onClick={props.funcaoAmarelo}>Quase não lembrei</button>
                    <button className="verde" onClick={props.funcaoVerde}>Zap!</button>
                </div>
            </div>
        </>
    );
}

export default CardResposta;