const productos = [
  {
    id: 1,
    nombre: "Blanca Nieves Sublime",
    descripcion: "🍎✨Blanca Nieves Sublime✨🍎¡Un disfraz de cuento de hadas que te hará sentir como la más encantadora del reino!",
    precio: 25000,
    imagen: "https://disfracescachivaches.com/images/DNY-108-1.jpg"
  },
  {
    id: 2,
    nombre: "Bella Sublime",
    descripcion: "🌹✨ Bella Sublime ✨🌹¡Un disfraz de cuento de hadas que te hará sentir como la princesa más hermosa y encantadora de toda la historia!",
    precio: 18000,
    imagen: "https://disfracescachivaches.com/images/DNY-0111-1.jpg"
  },
  {
    id: 3,
    nombre: "Aurora Sublime",
    descripcion: "🌸✨ Aurora Sublime ✨🌸¡Un disfraz de cuento de hadas que te hará sentir como la princesa más soñadora, elegante y encantadora del reino!",
    precio: 30000,
    imagen: "https://disfracescachivaches.com/images/DNY-0109-1.jpg"
  },
  {
    id: 4,
    nombre: "Cenicienta Aniversario",
    descripcion: "👠✨ Cenicienta Aniversario ✨👠¡Un disfraz de cuento de hadas que te hará sentir como la princesa más deslumbrante del reino!",
    precio: 18000,
    imagen: "https://disfracescachivaches.com/images/DNY-0072-4.jpg"
  },
  {
    id: 5,
    nombre: "REINA MALVADA",
    descripcion: "🍎👑 Reina Malvada 👑🍎¡Un disfraz de cuento de hadas que te hará sentir como la reina más poderosa, elegante y misteriosa del reino!",
    precio: 22000,
    imagen: "https://disfracescachivaches.com/images/DNY-221-1.jpg"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
