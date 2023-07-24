const tBody = document.querySelector('tbody')

function casiterminadoCarrito (things){

    return `<tr>
    <td>${things.imagen}</td>
    <td>${things.nombre}</td>
    <td>${things.precio}</td>
    <td>${things.codigo}</td>
    <td><i id="❌"></i></td>
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