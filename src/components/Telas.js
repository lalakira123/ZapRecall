import React from "react";

import TelaInicial from "./TelaInicial";
import TelaDois from "./TelaDois";

function Telas() {
    const [escondido, setEsconde] = React.useState("tela-inicial")
    const [aparece, setAparece] = React.useState("tela-dois escondido")

    function trocarTela() {
        setEsconde("tela-inicial escondido")
        setAparece("tela-dois")
    }

    return (
        <>
            <TelaInicial funcao={trocarTela} tela={escondido}/>
            <TelaDois tela={aparece}/>
        </>
    );
}

export default Telas;