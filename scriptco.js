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

const formulario = document.getElementById("jcgg_formulario_contacto");
    const mensajeContenedor = document.getElementById("jcgg_mensaje_formulario");

    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_vc0nvro", "template-uts3xuh", formulario)
        .then(function () {
          mensajeContenedor.textContent = "La información ha sido enviada correctamente.";
          mensajeContenedor.className = "jcgg_mensaje exito";
          mensajeContenedor.style.display = "block";
          formulario.reset();
        }, function (error) {
          console.error(error);
          mensajeContenedor.textContent = "Parece que hubo un problema, por favor intenta llenar los datos nuevamente.";
          mensajeContenedor.className = "jcgg_mensaje error";
          mensajeContenedor.style.display = "block";
        });
    });
