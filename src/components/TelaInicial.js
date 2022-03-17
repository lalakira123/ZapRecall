function TelaInicial(props) {
    return (
        <>
            <div className={props.tela}>
                <div className="logo-inicial">
                    <img src="./image/logo.png" alt="ZapRecall"/>
                    <h1>ZapRecall</h1>
                </div>
                <button className="botao-inicio" onClick={props.funcao}>Iniciar Recall!</button>
            </div>
        </>
    );
}

export default TelaInicial;