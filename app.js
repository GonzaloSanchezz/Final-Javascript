

// constantes por kilo

const manzana = 30;
const pera = 40;
const banana = 10; 
const mandarina = 25;

// array con viejos clientes

const clientes = [{nombre: "juan", satisfaccion: 7}, {nombre: "marcelo", satisfaccion: 10}]

// agregar nombre


nombre.addEventListener("change", agregarNombre)

function agregarNombre () {
    let respuesta = document.getElementById("nombre").value;
    document.getElementById("bienvenida").innerText = "bienvenido a tu simulador de verduleria, " +respuesta
}

// Local Storage para clientes

nombre.addEventListener("change", setCliente)

function setCliente (){
    let cliente = document.getElementById("nombre").value
    localStorage.setItem('Cliente', cliente)
} 

// JSON

const personas = [
    {
        id: 1,
        cliente: "juan",
        compra: "1500"
    },

    {
        id: 2,
        cliente: "maria",
        compra: "2400"
    },
    
    {
        id: 3,
        cliente: "Carlos",
        compra: "5000"
    }
]

const clientesJSON = JSON.stringify(personas)

localStorage.setItem('personas', clientesJSON)

// calculadora de precios

const form = document.getElementById('formulario')
const botonTotal = document.getElementById('botonTotal')

botonTotal.addEventListener('click', enviarForm)

function enviarForm(e){

    e.preventDefault();

    let cantManzana = parseInt(document.getElementById("cantManzana").value);
    let cantPera = parseInt(document.getElementById("cantBanana").value);
    let cantBanana = parseInt(document.getElementById("cantPera").value);
    let cantMandarina = parseInt(document.getElementById("cantMandarina").value);

    console.log(cantManzana)
    console.log(cantBanana)
    console.log(cantPera)
    console.log(cantMandarina)

    const total = suma(cantManzana, cantPera, cantBanana, cantMandarina)
    console.log(total)
    document.getElementById("total").innerText = `el total es de  ${total}`
    swal(`el total es de  ${total}`)
    .then((value) => {
        swal('¡Muchas gracias por tu compra!');
    });
}




function suma(cantManzana, cantPera, cantBanana, cantMandarina){
    let resultado = (cantManzana * manzana) + (cantPera * pera) + (cantBanana * banana) + (cantMandarina * mandarina);
    return resultado
}

botonTotal.onclick = () => {suma(cantManzana, cantPera, cantBanana, cantMandarina)}



