let nuevaPersona
let listaPersona = []

class Personas {
    constructor(nombre,edad,correo){
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo
    }
}

function functionEnviar (){
    nombre = document.getElementById("personaNueva").value
    edad = document.getElementById("edadNueva").value
    correo = document.getElementById("correoNuevo").value
    nuevaPersona = new Personas(nombre,edad,correo)
    listaPersona.push(nuevaPersona)
    render()
}

function render (){
    let i=""
    listaPersona.forEach(datoAct => {
        i = i+'<tr>\
        <td>'+datoAct.nombre+'</td>\
        <td>'+datoAct.edad+'</td>\
        <td>'+datoAct.correo+'</td>\
        </tr>'
    }
    );

    document.getElementById("tablaInfo").innerHTML = i
}

objEnviar = document.getElementById("bEnviar")
objEnviar.addEventListener("click",functionEnviar)