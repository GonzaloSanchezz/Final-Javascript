
const listaClientes = document.querySelector('.listaClientes')

const personas = JSON.parse(localStorage.getItem('personas'))

personas.forEach((cliente) => {

    console.log(cliente)

    const li = document.createElement('li')
    li.innerHTML = `
        <h4>Persona: $(usuario.cliente)</h4>
        <p>Compra: $(usuario.total)</p>
    `
    listaClientes.append(li)

})
