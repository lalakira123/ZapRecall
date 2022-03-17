function Card(props) {
    return (
        <>
            <div className="card">
                <p>Pergunta {props.indice}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className="card pergunta escondido">
                <p>{props.questao}</p>
                <img src="./image/setinha.png" alt="virar"/>
            </div>

            <div className="card resposta escondido">
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