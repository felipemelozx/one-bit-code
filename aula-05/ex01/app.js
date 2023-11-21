const numeros = []
const pesos = []

while (true) {
    const numero = parseFloat(prompt("Digite um numero (ou deixe em branco para encerrar):"))

    if (isNaN(numero)) {
        break
    }
    const peso = parseFloat(prompt(`Digite o peso para o numero ${numero}:`))

    if (isNaN(peso)) {
        alert("Por favor, insira um peso valido.")
    } else {
        numeros.push(numero)
        pesos.push(peso)
    }
}

if (numeros.legth === 0 ){
    alert("Nenhum numero inserido.Encerrando...")
}else {
    let somaNotas = 0
    let somaPesos = 0

    for (let i = 0; i < numeros.length; i++){
        somaNotas += numeros[i] * pesos[i]
        somaPesos += pesos[i]
    }
    const mediaPonderada = somaNotas / somaPesos

    alert(`a media ponderada e: ${mediaPonderada.toFixed(2)}`)
}
