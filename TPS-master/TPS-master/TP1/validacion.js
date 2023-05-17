
// Validación del formulario 


document.getElementById("contact-form").addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // Validación de nombre para que no se permitan números
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        nameInput.classList.add("error");
        nameInput.nextElementSibling.textContent = "Por favor, ingrese un nombre válido sin números.";
        event.preventDefault();
        return;
    } else {
        nameInput.classList.remove("error");
        nameInput.nextElementSibling.textContent = "";
    }

    // Validación del campo de correo electrónico usando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        emailInput.nextElementSibling.textContent = "Por favor, ingrese un correo electrónico válido.";
        event.preventDefault();
        return;
    } else {
        emailInput.classList.remove("error");
        emailInput.nextElementSibling.textContent = "";
    }

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    // Si todas las validaciones pasan, limpiar el formulario y mostrar el mensaje de éxito
    setTimeout(() => {
        alert("Formulario enviado correctamente");
    }, 0);

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";


});
