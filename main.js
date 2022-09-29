addEventListener("DOMContentLoaded", (e)=>{

    // 8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    // la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    // a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
    
    let rol = (prompt(`¿Es usted empleado de planta o administrativo?`)).toLowerCase()

    let hora = Number(prompt(`Ingrese la cantidad de horas trabajadas`))

    if(rol == `planta`){

        let paga = hora * 20000
        console.log(`Su pago será de`,paga)
        
    } else if (rol == `administrativo`){

        let paga = hora * 10000
        console.log(`Su pago será de`,paga)

    }
    
})