addEventListener("DOMContentLoaded", (e)=>{

       // 6. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
    // en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
    // mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.
    
    let presion = Number(prompt(`Ingrese la presión`))
    let temp = Number(prompt(`Ingrese la temperatura`))

    if(presion >= 200 || temp >= 100){

        console.warn(`Alarma`)
        
    } else {

        console.log(`Normal`)
    }
    
})