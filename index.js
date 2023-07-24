
const contenedor = document.querySelector('main#contenedor.contenedor')
const buscar= document.querySelector('#inputSearch')






function armamosCajas (caja) {
return `<div class="cajas" id="cajas">
        <img src="${caja.imagen}">
        <h3 class="nombre"> ${caja.nombre} </h3>
        <p class="precio"> ${caja.precio} </p>   
        <button class=buton-online id="${caja.codigo}" > Añadir al carrito 
        </div>` }

        const imgLogo = document.getElementById('carLogo')
        imgLogo.addEventListener('click', ()=>{
            location.href = 'otro.html'
    })

function tocarBotones(){
    const botones = document.querySelectorAll('button.buton-online')
    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=> {
        let producto= arrayProductos.find((prod)=> prod.codigo ==boton.id)
        carritodeCompras.push(caja)
        localStorage.setItem('carritodeCompras', JSON.stringify(carritodeCompras))
        console.log(producto)
        })
    })
}


function subimosCajas (array) { 
            contenedor.innerHTML="" 
            array.forEach ((caja)=> {
            contenedor.innerHTML += armamosCajas(caja)
            tocarBotones()
    })
   
}

subimosCajas(arrayProductos)

buscar.addEventListener('search', ()=> {
    localStorage.setItem("ultima busqueda", buscar.value)
if (buscar.value.trim() !== ""){
    let arrayResultante= arrayProductos.filter((caja)=> caja.nombre.toLowerCase().includes(buscar.value.trim().toLowerCase()))
    subimosCajas(arrayResultante)
}

})




