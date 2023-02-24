

const listaClientes = document.querySelector('#listaClientes')
const personas = JSON.parse(localStorage.getItem('personas'))
personas.forEach((cliente) => {

    console.log(cliente)

    const li = document.createElement('li')
    li.innerHTML = `
        <h4>Persona: ${cliente.cliente}</h4>
        <p>Compra: ${cliente.compra}</p>
    `
    listaClientes.append(li)

})