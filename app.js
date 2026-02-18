/* Renderizado generico */
window.onload = () => {
  // Header
  document.querySelector("header").innerHTML = `
    <div class="header-escritorio">
      <a title="Florería Ortiz" href="#top">
        <img class="header-logo" src="./logosConectar/Logo.png" alt="Logo Florería Ortiz" />
      </a>

      <nav class="header-nav">
        <ul>
          <li><a href="#top">Inicio</a></li>
          <li><a href="#images">Pedidos</a></li>
          <li><a href="#info">Tipos de Ramos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <button class="menu-hamburguesa" onclick="precionarInterruptor()">
        <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
      </button>
    </div>

    <nav class="menu-hamburguesa-nav">
      <ul>
        <li><a href="#top" onclick="precionarInterruptor()">Inicio</a></li>
        <li><a href="#images" onclick="precionarInterruptor()">Pedidos</a></li>
        <li><a href="#info" onclick="precionarInterruptor()">Tipos de Ramos</a></li>
        <li><a href="#contacto" onclick="precionarInterruptor()">Contacto</a></li>
      </ul>
    </nav>
  `;

  // Contacto
  document.querySelector(".contacto").innerHTML = `
    <img src="./logosConectar/Logo.png" alt="Logo Florería Ortiz">
    <div class="contacto-info">
      <h1>¡Síguenos y pide por mensaje!</h1>
      <div>
        <a target="_blank" href="#" aria-label="Instagram">
          <i class="rosado fa-brands fa-square-instagram"></i>
        </a>
        <a target="_blank" href="#" aria-label="Facebook">
          <i class="celeste fa-brands fa-square-facebook"></i>
        </a>
      </div>
      <p style="max-width: 420px; color: var(--muted);">
        Cambia los enlaces de redes en <b>app.js</b> por los tuyos (Instagram/Facebook/WhatsApp).
      </p>
    </div>
  `;

  // Footer
  document.querySelector("footer").innerHTML = `
    <div>
      <img title="Ciencias" class="footer-logo" src="./logosConectar/logoCiencia.png" alt="Logo ciencia">
      <img title="Estudio" class="footer-logo" src="./logosConectar/logoEstudio.png" alt="Logo estudio">
      <img title="Espacio de escuelas" class="footer-logo" src="./logosConectar/logoExplo.png" alt="Logo explo">
      <img title="Fabricación" class="footer-logo" src="./logosConectar/logoFabricacion.png" alt="Logo fabricación">
      <img title="Mini" class="footer-logo" src="./logosConectar/logoMini.png" alt="Logo mini">
      <img title="Multimedia" class="footer-logo" src="./logosConectar/logoMultimedia.png" alt="Logo multimedia">
      <img title="Sonido" class="footer-logo" src="./logosConectar/logoSonido.png" alt="Logo sonido">
    </div>

    <a title="Florería Ortiz" href="#top">
      <img class="header-logo" src="./logosConectar/Logo.png" alt="Logo Florería Ortiz">
    </a>
  `;

  // ===== Catálogo: 20 tarjetas (imagen + breve descripción) =====
  const catalogo = document.getElementById("catalogo");
  if (catalogo) {
    const imagenes = [
      "./logosConectar/Flores1.jpg",
      "./logosConectar/Flores2.jpg",
      "./logosConectar/Flores3.jpg",
      "./logosConectar/Flores4.jpg",
      "./logosConectar/Flores5.jpg",
      "./logosConectar/Flores6.jpg",
    ];

    const ramos = [
      { nombre: "Ramo Clásico", desc: "Rosas y follaje: elegante y seguro." },
      { nombre: "Ramo Romántico", desc: "Tonos suaves para un detalle bonito." },
      { nombre: "Ramo Premium", desc: "Más grande, más impacto, más wow." },
      { nombre: "Cumpleaños", desc: "Colorido y alegre para celebrar." },
      { nombre: "Aniversario", desc: "Ideal para una fecha especial." },
      { nombre: "Girasoles", desc: "Energía y buena vibra." },
      { nombre: "Tulipanes", desc: "Minimalista y moderno." },
      { nombre: "Ramo Pequeño", desc: "Sencillo, bonito y con estilo." },
      { nombre: "Ramo Mediano", desc: "El tamaño perfecto para regalar." },
      { nombre: "Ramo Grande", desc: "Para cuando quieres lucirte." },
      { nombre: "Arreglo en Base", desc: "Listo para mesa o sala." },
      { nombre: "Caja de Rosas", desc: "Presentación premium." },
      { nombre: "Ramo Blanco", desc: "Limpio, elegante y delicado." },
      { nombre: "Ramo Rojo", desc: "El clásico romántico." },
      { nombre: "Ramo Mixto", desc: "Flores de temporada combinadas." },
      { nombre: "Para Mamá", desc: "Dulce, bonito y especial." },
      { nombre: "Para Papá", desc: "Sobrio y elegante." },
      { nombre: "Condolencias", desc: "Respetuoso y con buen gusto." },
      { nombre: "Sorpresa del Día", desc: "Diseño único según flores disponibles." },
      { nombre: "Flores + Chocolates", desc: "El combo perfecto para sorprender." },
    ];

    catalogo.innerHTML = ramos.map((r, i) => {
      const img = imagenes[i % imagenes.length];
      return `
        <article class="info-card">
          <img src="${img}" alt="${r.nombre}">
          <div>
            <h3>${r.nombre}</h3>
            <p>${r.desc}</p>
          </div>
        </article>
      `;
    }).join("");
  }
};

function precionarInterruptor(){
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
