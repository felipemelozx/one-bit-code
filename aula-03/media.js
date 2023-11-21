let totalNotas = 0
let quantidadeNotas = 0
let nota


do {
    nota = Number(prompt("digite a nota do aluno (ou -1 para calcular sair e calcular a media)"))

    if (nota !== -1){
        totalNotas += nota
        quantidadeNotas++
    }
} while(nota !== -1)

if (quantidadeNotas === 0){
    alert("nenhuma nota encontrada")
} else {
    let media = totalNotas / quantidadeNotas
    alert(`a media das notas e: ${media.toFixed(2)}`)
}