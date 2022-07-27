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
    document.getElementById("personaNueva").value = ""
    document.getElementById("edadNueva").value = ""
    document.getElementById("correoNuevo").value = ""
    burburja(listaPersona)
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

function burburja (myArray){ var tam = myArray.length; 
    for ( var temp =1; temp < tam; temp++) { 
        for (var izq = 0; izq< (tam - temp); izq++) { 
            var dcha = izq+1; 
            if (myArray[izq].edad < myArray[dcha].edad) { 
                ordenar(myArray, izq, dcha); 
            } 
        } 
    }
    return myArray;
}
function ordenar(myArray, valor1, valor2){ 
    var temp = myArray[valor1]; 
    myArray[valor1] = myArray[valor2]; 
    myArray[valor2] = temp; 
    return myArray;
}

