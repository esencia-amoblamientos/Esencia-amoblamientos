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
  const whatsapp = "https://wa.me/5493516758271";

  return (
    <main>
      <header>
        <a className="marca" href="#">
          ESENCIA AMOBLAMIENTOS
        </a>
        <nav>
          <a href="#">Inicio</a>
          <a href="#categorias">Categorías</a>
          <a href="#tienda">Tienda</a>
          <a href="#trabajos">Nuestros trabajos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContenido">
          <p>DISEÑO · CALIDAD · EXCLUSIVIDAD</p>
          <h1>Diseñamos espacios que reflejan tu esencia.</h1>
          <p>
            Fabricamos muebles a medida para transformar
            tus espacios en lugares únicos.
          </p>
          <a className="boton" href="#tienda">
            DESCUBRIR COLECCIÓN
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
        <h2>Elegí tu próximo mueble</h2>
        <p>
          Descubrí nuestros productos disponibles y
          consultanos por diseños personalizados.
        </p>
        <a className="boton" href={whatsapp} target="_blank">
          CONSULTAR POR WHATSAPP
        </a>
      </section>

      <section id="trabajos" className="seccion trabajos">
        <p className="detalle">HECHOS PARA VOS</p>
        <h2>Nuestros trabajos</h2>
        <p>
          Cada proyecto es una oportunidad para crear
          algo único.
        </p>
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
        nav { display: flex; gap: 20px; flex-wrap: wrap; }
        nav a, footer a {
          color: #bbb;
          text-decoration: none;
        }
        .hero {
          min-height: 570px;
          display: flex;
          align-items: center;
          padding: 70px 9%;
          background:
            linear-gradient(90deg, #080808 5%, #080808bb 65%, #08080855),
            url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0")
            center/cover;
        }
        .heroContenido { max-width: 600px; }
        .hero h1 {
          font-size: clamp(38px, 6vw, 65px);
          line-height: 1.12;
          margin: 20px 0;
        }
        .hero p { color: #ccc; line-height: 1.8; }
        .detalle {
          color: #aaa;
          letter-spacing: 4px;
          font-size: 12px;
        }
        .boton {
          display: inline-block;
          margin-top: 22px;
          padding: 15px 24px;
          background: #b7b7b7;
          color: #111;
          text-decoration: none;
          font-weight: bold;
          letter-spacing: 1px;
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
          background: #777;
          color: white;
          text-decoration: none;
          border-radius: 30px;
        }
        @media (max-width: 600px) {
          header { justify-content: center; }
          nav { justify-content: center; }
          .hero { min-height: 500px; }
        }
      `}</style>
    </main>
  );
}
