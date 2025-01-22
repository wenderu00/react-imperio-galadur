export default function Time({ time }){
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
return(<div>
        <span>Dia: {time.day} </span>
        <span>Mês: {meses[time.month]} </span>
        <span>Ano: {time.year}</span>
    </div>)
}