import React from "react";

import Cards from "./Cards";

const tags = [];

function TelaDois(props) {
    const [totalRespondido, setRespondido] = React.useState(0);
    const [selecionado, setSelecionado] = React.useState(<></>);

    function atualizarTelaDois(valor) {
        setRespondido(totalRespondido + valor);
    }

    function acrescentarIcone(icone) {
        if (icone === "selecionadoVermelho") {
            tags.push({
                img:"./image/x.png",
                alt:"x"
            });
            console.log(tags);
        }
        if (icone === "selecionadoVerde") {
            tags.push({
                img:"./image/check.png",
                alt:"check"
            });  
            console.log(tags);
        }
        if (icone === "selecionadoAmarelo") {
            tags.push({
                img:"./image/interrogation.png",
                alt:"interrogation"
            });
            console.log(tags); 
        }
        setSelecionado(tags.map((tag, index) => <img key={index} src={tag.img} alt={tag.alt}/>));
    }

    return (
        <>
            <div className={props.tela}>
                <header>
                    <img src="./image/logo-pequeno.png" alt="ZapRecall"/>
                    <h2>ZapRecall</h2>
                </header>

                <Cards atualizar={atualizarTelaDois} acrescentar={acrescentarIcone}/>

                <footer>
                    <p>{totalRespondido}/8 CONCLUÍDOS</p>
                    <div>
                        {selecionado}
                    </div>
                </footer>
            </div>
        </>
    );
}

export default TelaDois;