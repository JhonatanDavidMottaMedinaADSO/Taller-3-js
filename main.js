addEventListener("DOMContentLoaded", (e)=>{
    
    // 12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    // caso contrario indicar con un mensaje que la operación no es posible realizarla.
    
    let num1 = Number(prompt(`Ingrese un valor 1`))
    let num2 = Number(prompt(`Ingrese un valor 2`))

    if (num1 > num2) {
        let operacion = num1 - num2
        console.log(`El resultado de la sustracción es:`,operacion)

    } else {
        console.log(`La operacion no es posible realizarla`)
    }
})