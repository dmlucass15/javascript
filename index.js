const arrayProductos= [
    {imagen: 'img/muñeca', nombre:'Muñequera', precio: '$5.000',   codigo: 1},
    {imagen: 'img/gym.avif', nombre:'Plan Gym', precio: '$8.000',   codigo: 2   },
    {imagen: 'img/dietario', nombre:'Plan Dietario', precio: '$5.000',   codigo: 3 },
    {imagen: 'img/gymdietario.jpg', nombre:'Plan Gym + Dietario', precio: '$10.000', codigo: 4},
    {imagen: 'img/proteina', nombre:'Proteina Whey', precio: '$30.000',  codigo: 5 },
    {imagen: 'img/musculosa', nombre:'Musculosa Shark', precio: '$15.000', codigo: 6  },    
]


const contenedor = document.querySelector('#contenedor')
const buscar= document.querySelector('#inputSearch')


const carritodeCompras = JSON.parse(localStorage.getItem('carritodeCompras'))



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
        carritodeCompras.push(producto)
        localStorage.setItem('carritodeCompras', JSON.stringify(carritodeCompras))
        console.log(carritodeCompras)
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




