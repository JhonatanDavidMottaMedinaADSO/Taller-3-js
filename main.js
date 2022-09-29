addEventListener("DOMContentLoaded", (e)=>{

    // Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    // $130.000 el descuento será del 15%, de lo contrario no hay descuento.
    
    let consumo = Number(prompt(`Ingrese el consumo en el restaurante`))

    if(consumo > 130000){

        let desc = consumo - (consumo * 0.15) 
        console.log(`El valor a pagar con un descuento del 15% es de`,desc)
        
    } else {

        console.log(`Lo sentimos no has alcanzado el tope necesario para aplicar al descuento`)
    }
    
})