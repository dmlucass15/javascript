const arrayProductos= [
    {imagen: 'img/muñeca', nombre:'Muñequera', precio: '$5.000',   codigo: 1},
    {imagen: 'img/gym.avif', nombre:'Plan Gym', precio: '$8.000',   codigo: 2   },
    {imagen: 'img/dietario', nombre:'Plan Dietario', precio: '$5.000',   codigo: 3 },
    {imagen: 'img/gymdietario.jpg', nombre:'Plan Gym + Dietario', precio: '$10.000', codigo: 4},
    {imagen: 'img/proteina', nombre:'Proteina Whey', precio: '$30.000',  codigo: 5 },
    {imagen: 'img/musculosa', nombre:'Musculosa Shark', precio: '$15.000', codigo: 6  },    
]

function obtenerCarro(){
    JSON.parse(localStorage.getItem('carritodeCompras'))
    if(localStorage.getItem('carritodeCompras')!== null){
        return JSON.parse(localStorage.getItem('carritodeCompras'))
    } else {
        return []
    }
}

const carritodeCompras = obtenerCarro()


