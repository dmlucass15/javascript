const tBody = document.querySelector('tbody')

function casiterminadoCarrito (things){

    return `<tr>
    <td>${things.imagen}</td>
    <td>${things.nombre}</td>
    <td>${things.precio}</td>
    <td><i id="carLogo" class="fa-solid fa-cart-plus"></i></td>
</tr>`
}

function listoCarrito (){
    tBody.innerHTML = ''
    if(carritodeCompras.length > 0) {
        carritodeCompras.forEach ((things)=> {
                tBody.innerHTML +=  casiterminadoCarrito (things)

        }
        
        )
    }
}

listoCarrito ()