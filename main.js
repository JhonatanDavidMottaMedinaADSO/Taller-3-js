addEventListener("DOMContentLoaded", (e)=>{
    // Determinar si un número es positivo y menor que 100. 

    let num = Number(prompt(`Escribe un número`));

    if(num > 0 && num < 100){
        console.log(`Tu número es positivo y menor que 100`);
    }else{
        console.log(`Tu número es negativo y/o mayor que 100`)
    }
    
})