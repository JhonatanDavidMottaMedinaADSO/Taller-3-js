addEventListener("DOMContentLoaded", (e)=>{
    // Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    // ¿Qué figura quiere calcular (Escriba T o C)?
    // Triangulo = base * altura / 2
    // Circulo = PI * radio* radio
    
    alert (`Cálculo de áreas - Elige una figura geométrica: Triángulo o Círculo`)
    let dec = (prompt(`¿Qué figura quiere calcular (Digite T o C):`))

    if(dec == `T`){
        let base = Number(prompt(`Escribe la base del triangulo: `))
        let height = Number(prompt(`Escribe la altura del triangulo: `))
        let result = (base * height) / 2
        console.log(`El area del triangulo es: `, result)

    }
    else if (dec == `C`) {
        let radio = Number(prompt(`Escribe el radio del circulo`))
        let result1 = Math.PI * Math.pow(radio, 2)
        console.log(`El area del círculo es: `, result1)
    }
    
})