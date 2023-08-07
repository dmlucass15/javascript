
const Carrito=  JSON.parse(localStorage.getItem('carritodeCompras'))
console.log(Carrito)

const tBody = document.querySelector('#tbody')


function casiterminadoCarrito (things){
    return `<tr>
    <td> <img src="${things.imagen}"></td>
    <td>${things.nombre}</td>
    <td>${things.precio}</td>
    <td id="" class="boton-quitar">❌</td>
    
</tr>`
}

function listoCarrito (){
    tBody.innerHTML = ''
    if(Carrito.length > 0) {
        Carrito.forEach ((things)=> {
                tBody.innerHTML +=  casiterminadoCarrito (things)

        }
        
        )
    }
}

listoCarrito ()
const carrito = JSON.parse(localStorage.getItem)
const productosStorage= localStorage.getItem('producto')
productosStorage.forEach((prod)=>{

}


)


