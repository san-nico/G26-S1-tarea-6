const productos = [
  { nombre: "Laptop", precio: 1200, stock: 5 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Monitor", precio: 350, stock: 3 },
  { nombre: "Teclado", precio: 80, stock: 8 },
];
//punto 1
console.log("1. filter() — lista los productos con stock disponible");
console.log(productos.filter((p) => p.stock > 0));

//punto 2
console.log("2. map() — aplica 15% de descuento a cada precio");
console.log(productos.map((p) => ({ ...p, precio: p.precio * 0.8 })));

//punto 3
console.log("3. reduce() — calcula el valor total del inventario");
console.log(productos.reduce((total, p) => total + p.precio, 0));

//punto 4
console.log("4. find() — encuentra el producto más caro");
console.log(
  "  reduce :",
  productos.reduce((pmax, p) => (pmax.precio > p.precio ? pmax : p)),
);
console.log(
  "    sort :",
  productos.toSorted((p1, p2) => p1.precio - p2.precio).at(-1),
);
console.log(
  "find+max :",
  productos.find(
    (p) => p.precio == Math.max(...productos.map((p) => p.precio)),
  ),
);

// punto 5
console.log("5. async/await — guardar el inventario con una promesa real");

function guardarYMostrar(productos) {
  const dummy_url = "https://www.softwarelibrechile.cl/tarea6-json-test.php";

  fetch(dummy_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productos),
  })
    .then((response) => {
      console.log("Código de estado del servidor:", response.status);

      if (!response.ok) {
        throw new Error("Error al guardar inventario");
      }

      return response.json();
    })
    .then((resultado) => {
      console.log("Respuesta del servidor:", resultado);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    })
    .finally(()=>{
        console.error("Consulta terminada");
    });
}

// Ejecutar directamente
guardarYMostrar(productos);
