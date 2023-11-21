let estoque = []
function menu() {
    let opcao = Number(prompt("Escolha uma opcao \n1-criar novo produto\n2-altera ou excluir um item\n3-lista de itens"))
    return opcao
}

function criarNovoProduto() {
    let nomeProduto = prompt('Digite o nome do produto:')
    let quantidade = Number(prompt('Digite a quantidade do produto:'))
    
    const novoProduto = criarObjeto(nomeProduto, quantidade);

    estoque.push(novoProduto);
}
function criarObjeto(nomeProduto, quantidade) {
    return {
        nome: nomeProduto,
        quantidade: quantidade
    }
}

function listaItens(){
    return alert(estoque)
}
menu()
criarNovoProduto()
console.log(estoque)