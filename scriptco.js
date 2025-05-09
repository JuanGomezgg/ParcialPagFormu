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

document.getElementById("jcgg_formulario").addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = document.getElementById("jcgg_nombre").value.trim();
      const apellido = document.getElementById("jcgg_apellido").value.trim();
      const genero = document.getElementById("jcgg_genero").value;
      const email = document.getElementById("jcgg_email").value.trim();
      const mensaje = document.getElementById("jcgg_mensaje").value.trim();

      if (!nombre || !apellido || !genero || !email || !mensaje) {
        alert("Por favor verifica que hayas llenado todos los campos correctamente.");
        return;
      }
    });
