import Cards from "./Cards";

function TelaDois(props) {
    return (
        <>
            <div className={props.tela}>
                <header>
                    <img src="./image/logo-pequeno.png" alt="ZapRecall"/>
                    <h2>ZapRecall</h2>
                </header>

                <Cards />

                <footer>
                    <p>0/8 CONCLUÍDOS</p>
                </footer>
            </div>
        </>
    );
}

export default TelaDois;