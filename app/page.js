'use client'; 
import { useState } from "react";
const categorias = [
  "Racks y muebles para TV",
  "Mesas y comedores",
  "Placares y roperos",
  "Cómodas y cajoneras",
  "Mesas de luz",
  "Escritorios",
  "Muebles de cocina",
  "Estanterías y bibliotecas",
  "Muebles de baño",
  "Vinotecas",
  "Otros muebles"
];

export default function Home() {
const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  
const [carrito, setCarrito] = useState([]);
const [cantidad, setCantidad] = useState(1);
const [carritoAbierto, setCarritoAbierto] = useState(false);

    
const productoPlacard = {
  id: "placard-blanco",
  nombre: "Placard blanco",
  precio: 350000,
  stock: 3,
};

const agregarAlCarrito = () => {
  console.log("BOTÓN COMPRAR ONLINE FUNCIONA");
  setCarrito((actual) => {
    const existente = actual.find(
      (item) => item.id === productoPlacard.id
    );

    const unidadesActuales = existente
      ? existente.cantidad
      : 0;

    if (unidadesActuales + cantidad > productoPlacard.stock) {
      console.log("SE EJECUTÓ AGREGAR AL CARRITO");
      alert("No hay suficientes unidades disponibles.");
      return actual;
    }

    if (existente) {
      return actual.map((item) =>
        item.id === productoPlacard.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
    }

    return [
      ...actual,
      { ...productoPlacard, cantidad },
    ];
  });

  setCantidad(1);
  setCarritoAbierto(true);
};

const totalUnidades = carrito.reduce(
  (total, item) => total + item.cantidad,
  0
);

const totalCompra = carrito.reduce(
  (total, item) => total + item.precio * item.cantidad,
  0
);
const imagenesGaleria = [
  "/Esencia-amoblamientos/despensero.jpg",
  "/Esencia-amoblamientos/placard-blanco.jpg",
  "/Esencia-amoblamientos/placard-interior.jpg",
  "/Esencia-amoblamientos/placard-interior-blanco.jpg",
  "/Esencia-amoblamientos/vanitory.jpg",
  "/Esencia-amoblamientos/bajo-mesada-negro.jpg",
  "/Esencia-amoblamientos/bajo-mesada-sahara.jpg"
];
const whatsapp = "https://wa.me/5493516758271?text=Hola%20Esencia%F0%9F%91%8B%F0%9F%8F%BB.%20Quiero%20solicitar%20un%20presupuesto%20para%20un%20mueble%20a%20medida.";

  return (
    <main>
      <header>
    

  <nav>
    <a href="#">Inicio</a>
    <a href="#categorias">Productos</a>
    <a href="#tienda">Tienda</a>
    <a href="#trabajos">Nuestros trabajos</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>

       

      <section className="hero">
    <div className="heroLogo">
  <img
    src="/Esencia-amoblamientos/logo_esencia_transparente.png"
    alt="Esencia Amoblamientos"
  />
</div>
        <div className="heroContenido">
          <p>DISEÑO · CALIDAD · EXCLUSIVIDAD</p>
          <h1>Diseñamos espacios que reflejan tu esencia.</h1>
          <p>
            Fabricamos muebles a medida para transformar
            tus espacios en lugares únicos.
          </p>
          <a className="boton" href="#tienda">
            NUESTROS PRODUCTOS
          </a>
        </div>
      </section>

      <section id="categorias" className="seccion">
        <p className="detalle">NUESTRAS PROPUESTAS</p>
        <h2>Categorías</h2>
        <div className="categorias">
          {categorias.map((categoria) => (
            <div className="categoria" key={categoria}>
              {categoria}
            </div>
          ))}
        </div>
      </section>


<section id="tienda" className="seccion tienda">
  <p className="detalle">ESENCIA AMOBLAMIENTOS</p>
  <h2>Nuestros productos</h2>
  <p>
    Descubrí nuestros muebles disponibles en stock
    y elegí el que mejor se adapte a tu espacio.
  </p>

  <div className="productos">
    <article className="producto">
      <img
        src="/Esencia-amoblamientos/placard-blanco.jpg"
        alt="Placard blanco de tres puertas"
      />

      <div className="producto-info">
        <h3>Placard blanco</h3>

        <p className="producto-precio">$350.000</p>

        <p><strong>Material:</strong> MDF de 18 mm</p>
        <p><strong>Alto:</strong> 1,80 m</p>
        <p><strong>Ancho:</strong> 1 m</p>
        <p><strong>Profundidad:</strong> 47 cm</p>
        <p><strong>Color:</strong> Blanco</p>

        <p className="stock">
          3 unidades disponibles
        </p>

       <button
  className="boton"
  type="button"
  onClick={agregarAlCarrito}
>
  COMPRAR ONLINE
</button>
      </div>
    </article>
  </div>

  <a
    className="boton"
    href={whatsapp}
    target="_blank"
    rel="noreferrer"
  >
    CONSULTAR POR WHATSAPP
  </a>
</section>


      <section id="trabajos" className="seccion trabajos">
  <p className="detalle">ESENCIA AMOBLAMIENTOS</p>
  <h2>Nuestros trabajos</h2>
  <p>Diseños exclusivos, fabricados a medida para transformar cada espacio.</p>

  <div className="galeria">
  

<img
  src="/Esencia-amoblamientos/despensero.jpg"
  alt="Despensero blanco"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/despensero.jpg")}
  style={{ cursor: "zoom-in" }}
/>
<img
  src="/Esencia-amoblamientos/placard-blanco.jpg"
  alt="Placard blanco"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/placard-blanco.jpg")}
  style={{ cursor: "zoom-in" }}
/><img
  src="/Esencia-amoblamientos/placard-interior.jpg"
  alt="Interior de placard"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/placard-interior.jpg")}
  style={{ cursor: "zoom-in" }}
/>
<img
  src="/Esencia-amoblamientos/placard-interior-blanco.jpg"
  alt="Placard interior blanco"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/placard-interior-blanco.jpg")}
  style={{ cursor: "zoom-in" }}
/>
<img
  src="/Esencia-amoblamientos/vanitory.jpg"
  alt="Vanitory a medida"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/vanitory.jpg")}
  style={{ cursor: "zoom-in" }}
/>
<img
  src="/Esencia-amoblamientos/bajo-mesada-negro.jpg"
  alt="Bajo mesada negro"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/bajo-mesada-negro.jpg")}
  style={{ cursor: "zoom-in" }}
/>
<img
  src="/Esencia-amoblamientos/bajo-mesada-sahara.jpg"
  alt="Bajo mesada Sahara"
  onClick={() => setImagenSeleccionada("/Esencia-amoblamientos/bajo-mesada-sahara.jpg")}
  style={{ cursor: "zoom-in" }}
/>


  </div>
</section>

      <section className="personalizados">
        <h2>¿Tenés una idea?</h2>
        <p>
          Diseñamos y fabricamos muebles a medida,
          adaptados a tus necesidades y presupuesto.
        </p>
        <a className="boton" href={whatsapp} target="_blank">
          PEDIR PRESUPUESTO
        </a>
      </section>

      <footer id="contacto">
        <h2>ESENCIA AMOBLAMIENTOS</h2>
        <p>Diseñamos espacios que reflejan tu esencia.</p>
            <div className="horarios">
  <h3>HORARIOS DE ATENCIÓN</h3>
  <p><strong>Lunes a viernes:</strong> 08:00 a 17:00 hs</p>
  <p><strong>Sábados:</strong> 09:00 a 13:00 hs</p>
  <p><strong>Domingos:</strong> Cerrado</p>
</div>
        <p>WhatsApp: +54 9 351 6758271</p>
        <a href={whatsapp}>Contactanos</a>
        <p>Instagram: @esencia_amoblamientos1</p>
        <a
          href="https://www.instagram.com/esencia_amoblamientos1/"
          target="_blank"
        >
          Seguinos en Instagram
        </a>
        <p>© 2026 Esencia Amoblamientos</p>
      </footer>

      <a className="flotante" href={whatsapp} target="_blank">
        WhatsApp
      </a>

      <style jsx>{`
        * { box-sizing: border-box; }
        main {
          background: #111;
          color: #eee;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        header {
          padding: 24px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          background: #090909;
          border-bottom: 1px solid #444;
        }
        .marca {
          color: #d0d0d0;
          font-weight: bold;
          letter-spacing: 3px;
          text-decoration: none;
        }
       
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
}

nav a {
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: linear-gradient(
    120deg,
    #ffffff,
    #aeb4bb,
    #ffffff,
    #858b92,
    #f5f5f5
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

nav a:hover {
  filter: brightness(1.4);
}

footer a {
  color: #bbb;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
}

nav a {
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: linear-gradient(
    120deg,
    #ffffff,
    #aeb4bb,
    #ffffff,
    #858b92,
    #f5f5f5
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

nav a:hover {
  filter: brightness(1.4);
}

footer a {
  color: #bbb;
  text-decoration: none;
}
.heroLogo {
  width: 38%;
  max-width: 380px;
  flex-shrink: 0;
}

.heroLogo img {
  width: 100%;
  height: auto;
  display: block;
}
       .hero {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 25px;
  padding: 70px 9%;
  background:
    linear-gradient(90deg, #080808 5%, #080808bb 65%, #08080855),
    url("/Esencia-amoblamientos/portada-esencia.png")
    center/cover;
}
        .heroContenido { max-width: 600px; }
        .hero h1 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 6vw, 65px);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: 1px;
  color: #f1f1f1;
  margin: 25px 0;
}
        .hero p { color: #ccc; line-height: 1.8; }
        .detalle {
          color: #aaa;
          letter-spacing: 4px;
          font-size: 12px;
        }
        .boton {
  display: inline-block;
  margin-top: 28px;
  padding: 17px 30px;
  background: linear-gradient(135deg, #eeeeee, #a8a8a8, #f5f5f5);
  color: #111;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  border: 1px solid #d5d5d5;
  transition: all 0.3s ease;
}
        .seccion {
          padding: 85px 8%;
          text-align: center;
        }
        h2 { font-size: 34px; }
        .categorias {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 15px;
          margin-top: 35px;
        }
        .categoria {
          padding: 30px 15px;
          border: 1px solid #555;
          background: #1c1c1c;
          color: #ddd;
        }
        .tienda { background: #191919; }
        

.productos {
  display: flex;
  justify-content: center;
  margin: 45px auto;
  max-width: 680px;
  padding: 0 15px;
}

.producto {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(145deg, #292929, #171717);
  border: 1px solid #888;
  border-radius: 16px;
  box-shadow: 0 15px 40px #0009;
}

.producto img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
}

.producto-info {
  padding: 32px;
  text-align: left;
}

.producto-info h3 {
  color: #e5e5e5;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.producto-precio {
  color: #e5e5e5 !important;
  font-size: 34px;
  font-weight: bold;
  margin: 20px 0 !important;
  border-bottom: 1px solid #777;
  padding-bottom: 18px;
}

.producto-info p {
  margin: 14px 0;
  font-size: 16px;
  color: #ddd;
  line-height: 1.6;
}

.stock {
  color: #fff !important;
  font-weight: bold;
  margin-top: 25px !important;
  padding: 14px;
  border: 1px solid #999;
  border-radius: 8px;
  text-align: center;
}

.producto-info .boton {
  margin-top: 22px;
  width: 100%;
  padding: 16px;
  font-size: 15px;
}

        .tienda p, .trabajos p, .personalizados p {
          color: #bbb;
          line-height: 1.8;
        }
        .trabajos { min-height: 250px; }
        .personalizados {
          padding: 75px 8%;
          text-align: center;
          background: #242424;
        }
        footer {
          padding: 55px 8%;
          text-align: center;
          background: #080808;
          color: #aaa;
          line-height: 2;
        }
        .flotante {
          position: fixed;
          right: 20px;
          bottom: 20px;
          padding: 15px 20px;
          background: #25D366;
color: white;
box-shadow: 0 4px 18px rgba(37, 211, 102, 0.3);
          color: white;
          text-decoration: none;
          border-radius: 30px;
        }
        @media (max-width: 600px) {
          header { justify-content: center; }
          nav { justify-content: center; }
          .hero { min-height: 500px; }
        }
     .horarios {
  margin: 35px auto;
  padding: 28px 24px;
  max-width: 520px;
  background: linear-gradient(145deg, #171717, #080808);
  border: 1px solid #888;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
  color: #eee;
}

.horarios h3 {
  color: #c0c0c0;
  letter-spacing: 3px;
  font-size: 17px;
  margin-bottom: 22px;
}

.horarios p {
  margin: 13px 0;
  font-size: 15px;
  color: #ccc;
}

.horarios strong {
  color: #fff;}
  
.galeria {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  max-width: 1100px;
  margin: 40px auto;
}

.galeria img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  border: 1px solid #777;
  border-radius: 10px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.45);
  transition: transform 0.3s ease;
}

.galeria img:hover {
  transform: scale(1.03);
}

} `}</style>
            {imagenSeleccionada && (
  <div
    onClick={() => setImagenSeleccionada(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.96)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "25px"
    }}
  >
    <button
      onClick={() => setImagenSeleccionada(null)}
      style={{
        position: "absolute",
        top: "20px",
        right: "25px",
        fontSize: "36px",
        color: "white",
        background: "none",
        border: "none",
        cursor: "pointer"
      }}
    >
      ×
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const i = imagenesGaleria.indexOf(imagenSeleccionada);
        setImagenSeleccionada(
          imagenesGaleria[
            (i - 1 + imagenesGaleria.length) %
            imagenesGaleria.length
          ]
        );
      }}
      style={{
        fontSize: "42px",
        color: "white",
        background: "none",
        border: "none",
        cursor: "pointer"
      }}
    >
      ‹
    </button>

    <img
      src={imagenSeleccionada}
      alt="Trabajo de Esencia Amoblamientos"
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "85%",
        maxHeight: "85vh",
        objectFit: "contain",
        borderRadius: "8px"
      }}
    />

    <button
      onClick={(e) => {
        e.stopPropagation();
        const i = imagenesGaleria.indexOf(imagenSeleccionada);
        setImagenSeleccionada(
          imagenesGaleria[
            (i + 1) % imagenesGaleria.length
          ]
        );
      }}
      style={{
        fontSize: "42px",
        color: "white",
        background: "none",
        border: "none",
        cursor: "pointer"
      }}
    >
      ›
    </button>
  </div>
)}
{carritoAbierto && (
  <div className="carrito-panel">
    <h2>Mi carrito</h2>

    <button onClick={() => setCarritoAbierto(false)}>
      ✕
    </button>

    {carrito.length === 0 ? (
      <p>Tu carrito está vacío.</p>
    ) : (
      <>
        {carrito.map((item) => (
          <div key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio.toLocaleString("es-AR")}</p>

            <button onClick={() =>
              setCarrito(actual =>
                actual.map(producto =>
                  producto.id === item.id
                    ? { ...producto, cantidad: Math.max(1, producto.cantidad - 1) }
                    : producto
                )
              )
            }>
              −
            </button>

            {item.cantidad}

            <button onClick={() =>
              setCarrito(actual =>
                actual.map(producto =>
                  producto.id === item.id &&
                  producto.cantidad < producto.stock
                    ? { ...producto, cantidad: producto.cantidad + 1 }
                    : producto
                )
              )
            }>
              +
            </button>

            <p>Subtotal: ${(item.precio * item.cantidad).toLocaleString("es-AR")}</p>
          </div>
        ))}

        <h3>Total: ${totalCompra.toLocaleString("es-AR")}</h3>
          <button
  className="boton"
  type="button"
  onClick={() => {
    const mensaje =
      "Hola Esencia👋🏻. Quiero realizar este pedido:\n\n" +
      carrito.map(item =>
        `${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${(item.precio * item.cantidad).toLocaleString("es-AR")}`
      ).join("\n") +
      `\n\nTotal: $${totalCompra.toLocaleString("es-AR")}`;

    window.open(
      `${whatsapp.split("?")[0]}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  }}
>
  FINALIZAR COMPRA
</button>
      </>
    )}
  </div>
)}
  </main>
  );
}
