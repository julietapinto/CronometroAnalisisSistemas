let inicio = 0
let intervalo
let corriendo = false
let tiempos = []

function formato(ms){

let totalSeg = Math.floor(ms/1000)

let min = String(Math.floor(totalSeg/60)).padStart(2,"0")
let seg = String(totalSeg%60).padStart(2,"0")
let mil = String(ms%1000).padStart(3,"0")

return min+":"+seg+":"+mil
}

function iniciar(){

if(!corriendo){

inicio = Date.now() - inicio

intervalo = setInterval(()=>{

let tiempo = Date.now() - inicio

document.getElementById("cronometro").innerText = formato(tiempo)

},10)

corriendo=true
}

}

function pausar(){

if(corriendo){

clearInterval(intervalo)

inicio = Date.now() - inicio

corriendo=false
}

}

function reiniciar(){

clearInterval(intervalo)

inicio=0
corriendo=false
tiempos=[]

document.getElementById("cronometro").innerText="00:00:000"
document.getElementById("tablaTiempos").innerHTML=""
}

function registrarTiempo(){

let tiempoActual

if(corriendo){
tiempoActual = Date.now() - inicio
}else{
tiempoActual = inicio
}

tiempos.push(tiempoActual)

let primero = tiempos[0]

let diferencia = tiempoActual - primero

let fila = `
<tr>
<td>${tiempos.length}</td>
<td>${formato(tiempoActual)}</td>
<td>${formato(diferencia)}</td>
</tr>
`

document.getElementById("tablaTiempos").innerHTML += fila

}