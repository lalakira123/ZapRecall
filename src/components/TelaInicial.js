function  TelaInicial() {
    function trocarTela() {
        
    }

    return (
        <div class="tela-inicial">
            <div class="logo-inicial">
                <img src="./image/logo.png" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </div>
            <button class="botao-inicio" onClick={trocarTela}>Iniciar Recall!</button>
        </div>
    );
}

export default TelaInicial;