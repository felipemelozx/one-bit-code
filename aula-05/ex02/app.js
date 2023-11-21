const veiculo = {
    modelo: 'carro',
    passageiros: [],
    limitePassageiro: 5,
    velocidade: 0,
    aumentarVelocidade: function (aceleracao) {
        this.velocidae += aceleracao
        alert(`velocidade aumentou para ${this.velocidade} Km/h`)
    },
    diminuirVelocidade: function (desaceleracao) {
        if (this.velocidade - desaceleracao >= 0) {
            this.velocidade -= desaceleracao
            alert(`velocidade diminuida para ${this.velocidade} Km/h`)
        } else {
            this.velocidade = 0
            alert('o veiculo esta parado.')
        }
    },
    adicionarPassageiro: function(nomePassageiro){
        if (this.velocidade === 0 && this.passageiros.length < this.limitePassageiro){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionad como passageiro.`)
        }else if (this.velocidade > 0){
            alert('Nao e possivel adicionar passageiros com a velocidade em movimento.')
        }else {
            alert('limite de passageiros atingido.')
        }
    },
}

function mostrarMenu() {
    return prompt(`Veiculo: ${veiculo.modelo}\nlimite de passageiros: ${veiculo.limitePassageiro}\nvelocidade atual: ${veiculo.velocidade}K,/h\nPassageiros: ${veiculo.passageiros.join(", ")}\nEscolha uma opcao:\n1. Aumentar Velocidade\n2. Diminuir avelocidade\n3.Adicionar Passageiro\n4.sair`)
}

while (true) {
    const escolha = mostrarMenu()

    switch (escolha) {
        case "1":
            const aceleracao = parseFloat(prompt("digite a quantidade de aceleracao:"))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseFloat(prompt("digite a quantidade de desaceleracao:"))
            veiculo.diminuirVelocidade(desaceleracao)
            break
            case "3":
                const nomePassageiro = prompt("digite o nome do passageiro:")
                veiculo.adicionarPassageiro(nomePassageiro)
                break
            case "4":
                alert("saindo...")
                break
            default:
                alert("opcao invalida. Tente novamente.")
    }
    if(escolha === 4){
        break
    }

}