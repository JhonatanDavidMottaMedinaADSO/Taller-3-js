addEventListener("DOMContentLoaded", (e)=>{
    
    // 9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    // impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    
    let sum  = 0
    let producto = 1
    let cant = Number(prompt(`Digite la cantidad de números que quiere ingresar`))

    for (let i = 0; i < cant; i++) {

        let num = Number(prompt(`Ingrese el número`))

        if(num%2 == 0){

            sum += num
        
        } else if (num%2 != 0) {

            producto *= num

        }
    }

    console.log(`La suma de los pares es`,sum)
    console.log(`El producto de los impares es`,producto)
    
})