let celdas = document.querySelectorAll('.col-4')
let flag = true;
let arreglo = [null, null, null, null, null, null, null, null, null]
let reiniciar = document.querySelector('.reiniciar')
let accion = document.querySelectorAll('.accion')
let accion2 = document.querySelectorAll('.accion2')
let accion3 = document.querySelectorAll('.accion3')
let fil1 = document.querySelectorAll('.fil1')
let fil2 = document.querySelectorAll('.fil2')
let fil3 = document.querySelectorAll('.fil3')
let fila1 = document.querySelectorAll('.fila1')
let color0 = document.querySelectorAll('.color0')
let fila2 = document.querySelectorAll('.fila2')
let patalla1 = document.querySelector('#patalla1')
let patalla2 = document.querySelector('#patalla2')
let reinicioPartida = document.querySelector('#reinicioPartida')
let contador1 = 0;
let contador2 = 0;

const validarGanador = () => {
    if ((arreglo[0] != null && arreglo[1] != null)
    //fila 1
        && (arreglo[0] == arreglo[1])
        && (arreglo[1] == arreglo[2])){
            color()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[3] != null && arreglo[4] != null)
    // fila 2
        && (arreglo[3] == arreglo[4])
        && (arreglo[4] == arreglo[5])) {
            color2()
            verificarGanador()
            // reiniciar()
    } else if ((arreglo[6] != null && arreglo[7] != null)
    //fila 3
        && (arreglo[6] == arreglo[7])
        && (arreglo[7] == arreglo[8])) {
            color3()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[0] != null && arreglo[3] != null)
    // fila 1 para abajo
        && (arreglo[0] == arreglo[3])
        && (arreglo[3] == arreglo[6])) {
            color4()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[1] != null && arreglo[4] != null)
    //fila 2 para abajo
        && (arreglo[1] == arreglo[4])
        && (arreglo[4] == arreglo[7])) {
            color6()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[2] != null && arreglo[5] != null)
    //fila 3 para abajo
        && (arreglo[2] == arreglo[5])
        && (arreglo[5] == arreglo[8])) {
            color7()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[0] != null && arreglo[4] != null)
    //fila de lado
        && (arreglo[0] == arreglo[4])
        && (arreglo[4] == arreglo[8])) {
            color8()
        verificarGanador()
        // reiniciar()
    } else if ((arreglo[2] != null && arreglo[4] != null)
    //fila 2 del otro lado
        && (arreglo[2] == arreglo[4])
        && (arreglo[4] == arreglo[6])) {
            color9()
        verificarGanador()
        // reiniciar()
    }
     else {
        filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert("Empate")
        }
    }
}

const bloquearCasilla = (coordenada) => {
    if (arreglo[coordenada] != null) {
        return true
    }
    return false
}

const marcar = (celda) => {
    let isBlock = bloquearCasilla(celda.target.id)
    if (isBlock) {
        alert('Disculpe, Que no ve que ya esta marcado!!')
    } else {
        if (flag) {
            celda.target.innerText = 'X'
            arreglo[celda.target.id] = 'X'
            flag = !flag
        } else {
            celda.target.innerText = '0'
            arreglo[celda.target.id] = '0'
            flag = !flag
        }
        validarGanador()
    }
}

celdas.forEach((celda) => {
    celda.addEventListener('click', marcar)
})

const verificarGanador = () =>{
    if(flag == false){
        alert('Jugador X ganaste')
        contador1 = contador1 + 1
        patalla1.value = contador1
    }else{
        alert('Jugador 0 ganaste')
        contador2 = contador2 + 1
        patalla2.value = contador2
    }
}

const color = () =>{
    accion.forEach((color) =>{
        color.classList.toggle('bg-danger')
    })
}

const color2 = () =>{
    accion2.forEach((color2) =>{
        color2.classList.toggle('bg-danger')
    })
}

const color3 = () =>{
    accion3.forEach((color3) =>{
        color3.classList.toggle('bg-danger')
    })
}

const color4 = () =>{
    fil1.forEach((color4) =>{
        color4.classList.toggle('bg-danger')
    })
}

const color5 = () =>{
    fil2.forEach((color5) =>{
        color5.classList.toggle('bg-danger')
    })
}

const color6 = () =>{
    fil3.forEach((color6) =>{
        color6.classList.toggle('bg-danger')
    })
}

const color7 = () =>{
    fila1.forEach((color7) =>{
        color7.classList.toggle('bg-danger')
    })
}

const color8 = () =>{
    color0.forEach((color8) =>{
        color8.classList.toggle('bg-danger')
    })
}

const color9 = () =>{
    fila2.forEach((color9) =>{
        color9.classList.toggle('bg-danger')
    })
}

celdas.forEach((celdas) =>{
    reiniciar.addEventListener('click', () =>{
        celdas.textContent = ''
        arreglo = [null, null, null, null, null, null, null, null, null]
        flag = true
        celdas.classList.remove('bg-danger')
    })
})

reinicioPartida.addEventListener('click',() =>{
    contador1 = 0;
    contador2 = 0;
    patalla1.value = ''
    patalla2.value = ''
})






// const reiniciar = () =>{
//     celdas.forEach((celda) => {
//         celda.textContent = ''
//         arreglo = [null, null, null, null, null, null, null, null, null]
// })
// }


