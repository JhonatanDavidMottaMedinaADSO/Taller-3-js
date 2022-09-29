addEventListener("DOMContentLoaded", (e)=>{
    // . Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o
    // si son iguales.
    

    let num1 = Number(prompt(`Escribe un valor 1: `));
    let num2 = Number(prompt(`Escribe un valor 2: `))
    let num3 = Number(prompt(`Escribe un valor 3: `))

    if(num1 > num2 && num1 > num3){
        console.log(`El valor 1 es el mayor de los tres`);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(`El valor 2 es el mayor de los tres`)
    }
    else{
        console.log(`El valor 3 es el mayor de los tres`)
    }
    if (num1 < num2 && num1 < num3) {
        console.log(`El valor 1 es el menor de los tres`)
    }
    else if (num2 < num1 && num2 < num3) {
        console.log(`El valor 2 es el menor de los tres`)
    }
    else if (num3 < num1 && num3 < num2) {
        console.log(`El valor 3 es el menor de los tres`)
    }
    if (num1 == num2) {
        console.log(`El valor 1 (${num1}) es igual al valor 2 (${num2})`)
    }
    else if (num2 == num3)
    {
        console.log(`El valor 2 (${num2}) es igual al valor 3 (${num3})`)
    }
    else if (num1 == num3){
        console.log(`El valor 1 (${num1}) es igual al valor 3 (${num3})`)
    }
})