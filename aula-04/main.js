import { dobro, subtracao, soma  } from "./funcoes.js"


let opcao = Number(prompt('escolha uma opcao:\n1-dobro\n2-soma\n3-subtracao'))
let num1 = Number(prompt('Digite o primeiro numero:'))
let num2 = Number(prompt('Digite o segundo numero:'))

function calculo (opcao, num1, num2){
    if (opcao === 1){
        return alert(`O dobro do numero ${num1} e ${dobro(num1)} e do ${num2} e ${dobro(num2)}`)
    } else if (opcao === 2 ){
        alert(`A soma dos numero ${num1} e ${num2} e  ${soma(num1, num2)} `)
    } else {
        alert(`A subtracao dos numero ${num1} e ${num2} e  ${subtracao(num1, num2)} `)
    }
}
calculo(opcao, num1, num2)