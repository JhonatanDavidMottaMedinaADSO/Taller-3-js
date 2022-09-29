addEventListener("DOMContentLoaded", (e)=>{
    
    // 11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    // de computación.
    
    acum = 0
    for (let i = 0; i < 5; i++) {

        let nombre = (prompt(`Ingrese su nombre`))
        let apellido = (prompt(`Ingrese su apellido`))
        let edad = (prompt(`Ingrese su edad`))
        let nota = Number(prompt(`Ingrese su nota`))

        acum += nota
        
        console.log(`Su nombre es ${nombre} ${apellido}, tiene ${edad} años, y su nota es ${nota}`)
    }

    let prom = acum / 5
    console.log(`El promedio de las notas es:`,prom)
    
})