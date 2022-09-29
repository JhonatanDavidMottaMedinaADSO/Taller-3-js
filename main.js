addEventListener("DOMContentLoaded", (e)=>{
    
    // 10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    // Iva, Subtotal y Total de la compra de los artículos.
    
    acumIva = 0
    acumSubtotal = 0
    let iva = Number(prompt(`Digite el porcentaje del IVA`))
    
    for (let i = 0; i < 5; i++) {

        let producto = Number(prompt(`Ingrese el valor del producto`))
        let prodIva = producto*iva/100

        acumSubtotal += producto
        acumIva += prodIva
    }

    let total = acumSubtotal + acumIva
    console.log(`El subtotal es:`,acumSubtotal)
    console.log(`El IVA es:`,iva)
    console.log(`El total es:`,total)
    
})