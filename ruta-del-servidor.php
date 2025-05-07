<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $genero = htmlspecialchars($_POST['genero']);
    $email_usuario = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    if ($email_usuario) {
        // ✉️ Mensaje al usuario
        $para_usuario = $email_usuario;
        $asunto_usuario = "Confirmación de envío de formulario";
        $mensaje_usuario = "Hola $nombre,\n\nHaz enviado la siguiente información a la página web Cueva de los Coders:\n\n$mensaje";
        $cabeceras = "From: juancamilogomezgarcia3@gmail.com";

        // ✉️ Mensaje para ti
        $para_ti = "juancamilogomezgarcia3@gmail.com";
        $asunto_ti = "Nuevo mensaje de $nombre";
        $mensaje_ti = "Hola Juan,\n\n$nombre te ha enviado la siguiente información por medio de tu página web:\n\n$mensaje\n\nCorreo del usuario: $email_usuario";

        mail($para_usuario, $asunto_usuario, $mensaje_usuario, $cabeceras);
        mail($para_ti, $asunto_ti, $mensaje_ti, $cabeceras);

        echo "Formulario enviado correctamente.";
    } else {
        echo "Correo electrónico inválido.";
    }
}
?>
