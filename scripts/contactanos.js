<script>
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = form.querySelector("#nombre").value;
        const email = form.querySelector("#email").value;
        const mensaje = form.querySelector("#mensaje").value;

        if (nombre && email && mensaje) {
            // Aquí puedes agregar código para enviar los datos a través de una solicitud AJAX o por correo electrónico
            alert("Formulario enviado correctamente");
            form.reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
</script>