let estoque = []

function criarNovoProduto() {
    let nome = prompt('Digite o nome do produto:')
    let quantidade = Number(prompt('Digite a quantidade do produto:'))

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade invalida. o item nao foi adicionado.')
        return
    }
    const item = { nome, quantidade }
    estoque.push(item)
    alert(`${nome} foi adicionado ao estoque com ${quantidade} unidades.`)
}
function listaItens() {
    if (estoque.length === 0) {
        alert('o estoque esta vazio')
        return
    }
    const itensString = estoque.map(function (item, index) {
        return `${index + 1}. ${item.nome}: ${item.quantidade} unidades`
    }).join("\n")
    alert(` Items no estoque:\n${itensString}`)
    return
}
function alterarQuantidade() {
    listaItens()
    const indice = parseInt(prompt("Digite o numero do item que deseja altererar:")) - 1
    if (isNaN(indice) || indice <= 0 || indice > estoque.length) {
        alert('Numero do item invalido.')
        return
    }
    const novaQuantidade = parseInt(prompt(`Digite a nova quantia para "${estoque[indice]}":`))

    if (isNaN(novaQuantidade) || novaQuantidade <= 0) {
        alert('Quantidade invalida. A alteracao nao foi feita')
        return
    }
    estoque[indice].quantidade = novaQuantidade
    alert(`${estoque[indice].nome} agora possui ${novaQuantidade} unidades`)
}
function excluirItem() {
    listaItens()
    const indice = parseInt(prompt('Digite um numero do item que deseja excluir.'))
    if (isNaN(indice) || indice <= 0 || indice > estoque.length) {
        alert(' Numero do item invalido')
    }

    const nomeItemExcluido = estoque[indice.nome]
    estoque.splice(indice, 1)
    alert(`${nomeItemExcluido} foi excluido do estoque`)
}
let escolha

while (estoque !== "5") {
    escolha = prompt("Escolha uma opcao \n1-criar novo produto\n2-altera\n3-excluir um item\n4-lista de itens\n5-sair")
    switch (escolha) {
        case "1":
            criarNovoProduto()
            break
        case "2":
            alterarQuantidade() 
            break
        case "3":
            excluirItem()
            break
        case "4":
            listaItens()
            break
        case "5":
            alert('saindo do programa...')
            break
    }
}