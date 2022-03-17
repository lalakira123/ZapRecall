import Card from "./Card";

const infosCard = [
    {Q: "O que é JSX?", R:"Uma extensão de linguagem do JavaScript"},
    {Q: "O React é __", R:"uma biblioteca JavaScript para construção de interfaces"},
    {Q: "Componentes devem iniciar com __", R:"letra maiúscula"},
    {Q: "Podemos colocar __ dentro do JSX", R:"expressões"},
    {Q: "O ReactDOM nos ajuda __", R:"interagindo com a DOM para colocar componentes React na mesma"},
    {Q: "Usamos o npm para __", R:"gerenciar os pacotes necessários e suas dependências"},
    {Q: "Usamos props para __", R:"passar diferentes informações para componentes"},
    {Q: "Usamos estado (state) para __", R:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
];

function comparador() { 
	return Math.random() - 0.5; 
}

infosCard.sort(comparador);

function Cards () {
    return (
        <>
            <main className="cards">
                {infosCard.map((info, index) => <Card key={index} questao={info.Q} resposta={info.R} indice={index + 1}/>)}
            </main>
        </>
    )
}

export default Cards;