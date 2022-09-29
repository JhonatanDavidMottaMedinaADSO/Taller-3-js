addEventListener("DOMContentLoaded", (e)=>{
    // Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

    let num1 = Number(prompt(`Escribe un número 1: `));
    let num2 = Number(prompt(`Escribe un número 2: `))
    let num3 = Number(prompt(`Escribe un número 3: `))

    if(num1 > num2 && num1 > num3){
        console.log(`El número 1 es el mayor de los tres`);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(`El numero 2 es el mayor de los tres`)
    }
    else{
        console.log(`El número 3 es el mayor de los tres`)
    }
})