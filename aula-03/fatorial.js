let num = Number(prompt("digite um numero inteiro positivo:"))
let fatorial = 1

for (let i = 1; i <= num; i++){
    fatorial += i
}
alert(`o fatorial de ${num} e ${fatorial}`)