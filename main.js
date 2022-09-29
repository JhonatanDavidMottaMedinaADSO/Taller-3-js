addEventListener("DOMContentLoaded", (e)=>{
    
    // 13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    // de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    // Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // Tipo C 20% de descuento
    
    let memb = prompt(`¿Qué tipo de membresia tiene: A, B o C?`).toUpperCase()

    if (memb == `A`) {

        alert (`Su descuento es del 10%`)
        let product = Number(prompt(`Ingrese el valor del producto:`)) 
        let des = product - (product * 0.1) 
        console.log(`El valor a pagar con el descuento es de:`,des)

    } else if (memb == `B`) {

        alert (`Su descuento es del 15%`)
        let product = Number(prompt(`Ingrese el valor del producto:`)) 
        let des = product - (product * 0.15) 
        console.log(`El valor a pagar con el descuento es de:`,des)

    }
    else if (memb == `C`) {

        alert (`Su descuento es del 20%`)
        let product = Number(prompt(`Ingrese el valor del producto:`)) 
        let des = product - (product * 0.2) 
        console.log(`El valor a pagar con el descuento es de:`,des)

    }
})