const tituloInput = document.querySelector("#titulo");
const autorInput = document.querySelector("#autor");
const generoSelect = document.querySelector("#genero");
const agregarBtn = document.querySelector("#agregar");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");

agregarBtn.addEventListener("click", () => {
  const titulo = tituloInput.value.trim();
  const autor = autorInput.value.trim();
  const genero = generoSelect.value;

  if (!titulo) {
    mensaje.textContent = "⚠️ Escribe el título del libro";
    mensaje.style.color = "var(--error)";
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <strong>${titulo}</strong><br>
      ${autor || "Sin autor"} — ${genero || "Sin género"}
    </div>
    <button class="borrar">Eliminar</button>
  `;
  lista.appendChild(li);

  mensaje.textContent = "✅ Libro agregado correctamente";
  mensaje.style.color = "var(--exito)";

  tituloInput.value = "";
  autorInput.value = "";
  generoSelect.value = "";

  li.querySelector(".borrar").addEventListener("click", () => {
    if (confirm("¿Seguro que quieres eliminar este libro?")) {
      li.remove();
      mensaje.textContent = "🗑️ Libro eliminado";
      mensaje.style.color = "var(--primario)";
    }
  });
});