function CardResposta(props) {
    const {classe, resposta, funcaoVermelho, funcaoVerde, funcaoAmarelo, atualizar, acrescentar} = props;

    function atualizarValorVermelho() {
        funcaoVermelho();
        atualizar(1);
        acrescentar("selecionadoVermelho");
    }

    function atualizarValorAmarelo() {
        funcaoAmarelo();
        atualizar(1);
        acrescentar("selecionadoAmarelo");
    }

    function atualizarValorVerde() {
        funcaoVerde();
        atualizar(1);
        acrescentar("selecionadoVerde");
    }

    return (
        <>
            <div className={classe}>
                <p>{resposta}</p>
                <div>
                    <button className="vermelho" onClick={atualizarValorVermelho}>Não lembrei</button>
                    <button className="amarelo" onClick={atualizarValorAmarelo}>Quase não lembrei</button>
                    <button className="verde" onClick={atualizarValorVerde}>Zap!</button>
                </div>
            </div>
        </>
    );
}

export default CardResposta;