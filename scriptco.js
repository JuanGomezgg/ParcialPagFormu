function toggleMenu() {
    let menu = document.querySelector(".jcgg_nav");
    menu.classList.toggle("active");
}

function jcgg_ChangeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2); // opacidad

  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
  const header = document.getElementById('jcggHeader');

  header.style.backgroundColor = rgba;

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance < 128 ? 'white' : 'black';

  header.style.color = textColor;

  const links = header.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = textColor;
  });

  const icons = header.querySelectorAll('button');
  icons.forEach(btn => {
    btn.style.color = textColor;
  });
}

document.getElementById("jcgg_formulario_contacto").addEventListener("submit", function (e) {
      e.preventDefault(); // evitar recarga
      const form = e.target;
      const datos = new FormData(form);
      const mensajeContenedor = document.getElementById("jcgg_mensaje_formulario");

      fetch("ruta-del-servidor.php", {
        method: "POST",
        body: datos,
      })
        .then((response) => response.text())
        .then((texto) => {
          if (texto.includes("correctamente")) {
            mensajeContenedor.textContent = "La información ha sido enviada correctamente.";
            mensajeContenedor.className = "jcgg_mensaje exito";
          } else {
            mensajeContenedor.textContent = "Parece que hubo un problema, por favor intenta llenar los datos nuevamente.";
            mensajeContenedor.className = "jcgg_mensaje error";
          }
          mensajeContenedor.style.display = "block";
        })
        .catch(() => {
          mensajeContenedor.textContent = "Error de conexión. Intenta más tarde.";
          mensajeContenedor.className = "jcgg_mensaje error";
          mensajeContenedor.style.display = "block";
        });
    });