const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
});

/* Cuando tengan resultados reales, escríbanlos aquí.
   Ejemplo:
   { nombre: "Uso del celular", valor: 70 },
*/

const resultadosEncuesta = [];

const grafico = document.getElementById("grafico");
const botonGrafico = document.getElementById("cambiar-grafico");

function mostrarGrafico() {
  if (resultadosEncuesta.length === 0) {
    grafico.innerHTML =
      "<p>El gráfico aparecerá cuando agreguen datos reales en <b>script.js</b>.</p>";
    return;
  }

  grafico.innerHTML = resultadosEncuesta.map(function (dato) {
    return `
      <div class="barra">
        <span>${dato.nombre}</span>
        <div class="barra-fondo">
          <div class="barra-color" style="width: ${dato.valor}%"></div>
        </div>
        <strong>${dato.valor}%</strong>
      </div>
    `;
  }).join("");
}

botonGrafico.addEventListener("click", function () {
  if (resultadosEncuesta.length === 0) {
    grafico.innerHTML =
      "<p>Primero deben escribir los resultados reales de su encuesta en <b>script.js</b>.</p>";
  } else {
    mostrarGrafico();
  }
});

const botonOpinion = document.getElementById("enviar-opinion");
const opinion = document.getElementById("opinion");
const respuesta = document.getElementById("respuesta");

botonOpinion.addEventListener("click", function () {
  if (opinion.value.trim() === "") {
    respuesta.textContent = "Escribe una recomendación antes de enviar.";
  } else {
    respuesta.textContent = "¡Gracias por participar!";
    opinion.value = "";
  }
});

mostrarGrafico();