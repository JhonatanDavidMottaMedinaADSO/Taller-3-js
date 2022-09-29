addEventListener("DOMContentLoaded", (e)=>{

     // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    // área triangulo= lado * lado.
    
    let lado1 = Number(prompt(`Longitud de la base del rectángulo`))
    let lado2 = Number(prompt(`Longitud de la altura del rectángulo`))

    if(lado1 > 0 && lado2 > 0){
        let area = lado1 * lado2
        console.log(`El area del rectangulo es:`,area)
    }
    
})