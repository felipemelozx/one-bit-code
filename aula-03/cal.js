let numero = Number(prompt('Digite um numero de 1 a 10:'))
let texto =''
for(let i = 0; i <= 10; i++) {
    let resultado = numero * i
    texto += `${num} x ${i} = ${resultado}\n`
}
alert(texto)