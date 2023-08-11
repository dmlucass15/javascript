
const productos = [
    {
        id: "creatina-01",
        titulo: "Creatina CreaStack",
        imagen: "img/crea1.webp",
        categoria: {
                nombre: "Creatinas",
                id: "creatinas"
        },
        precio: 20000
    },

    {
        id: "creatina-02",
        titulo: "Creatine Monohidrate 3000",
        imagen: "img/crea2.webp",
        categoria: {
                nombre: "Creatinas",
                id: "creatinas"
        },
        precio: 18000
    },

    {
        id: "creatina-03",
        titulo: "Creatine Iron Nutrition",
        imagen: "img/crea3.webp",
        categoria: {
                nombre: "Creatinas",
                id: "creatinas"
        },
        precio: 15000
    },

    {
        id: "proteina-01",
        titulo: "Proteina NitroTech",
        imagen: "img/prote1.webp",
        categoria: {
                nombre: "Proteinas",
                id: "proteinas"
        },
        precio: 35000
    },

    {
        id: "proteina-02",
        titulo: "Proteina Bipro",
        imagen: "img/prote2.png",
        categoria: {
                nombre: "Proteinas",
                id: "proteinas"
        },
        precio: 27000
    },

    {
        id: "proteina-03",
        titulo: "Proteina Iso100",
        imagen: "img/prote3.jpeg",
        categoria: {
                nombre: "Proteinas",
                id: "proteinas"
        },
        precio: 33000
    },

    {
        id: "planes-01",
        titulo: "Plan Gym",
        imagen: "img/plan1.avif",
        categoria: {
                nombre: "Planes",
                id: "planes"
        },
        precio: 8000
    },

    {
        id: "planes-02",
        titulo: "Plan Alimentacion",
        imagen: "img/plan2.jpg",
        categoria: {
                nombre: "Planes",
                id: "planes"
        },
        precio: 8000
    },

    {
        id: "planes-03",
        titulo: "Plan Gym + Alimentacion",
        imagen: "img/plan3.webp",
        categoria: {
                nombre: "Planes",
                id: "planes"
        },
        precio: 12000
    },

];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos (productosElegidos) {

    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` <div class="producto">
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo"> ${producto.titulo} </h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    </div>  ` ;

    contenedorProductos.append(div);

    })

    actualizarBotonesAgregar ();
}


cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")


if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito()
} else {
    productosEnCarrito = [];
}



function agregarAlCarrito (e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito();


localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
};

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito
}



