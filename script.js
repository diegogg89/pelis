let contenedorPersonajes = document.getElementById("personajes")

fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=15")
.then((response)=>response.json())
.then((datos)=>{
    console.log(datos)
    
    datos.forEach(elementos => {
        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            <h4>${elementos.character}</h4>
            <p>${elementos.quote}</p>
            <img src="${elementos.image}">
            

        
        `;

        contenedorPersonajes.append(contenedorCreado)
        
    });

})

const form = document.querySelector('form')

form.addEventListener('submit', (evento)=>{

    if(validacion()) {
        evento.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Complete todos los campos",
          });

    } else{
        console.log("Datos enviados")
        evento.preventDefault()

    }
})

function validacion() {
    let valido = true
    valido = valCampo('usuario') || valCampo('pass')
    return valido
}

const valCampo = (campos) => {
    const dato = document.getElementById(campos)
    const valor = dato.value
    
    return valor === ''
}

