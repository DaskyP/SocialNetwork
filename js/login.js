$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault(); 

        let username = $("#username").val().trim();
        let password = $("#password").val().trim();

        $(".error-message").remove();

        let isValid = true;

        if (username === "") {
            $("#username").after("<small class='error-message text-danger'>El username es obligatorio.</small>");
            isValid = false;
        } else if (username.length < 3) {
            $("#username").after("<small class='error-message text-danger'>El username debe tener al menos 3 caracteres.</small>");
            isValid = false;
        }

        if (password === "") {
            $("#password").after("<small class='error-message text-danger'>La contraseña es obligatoria.</small>");
            isValid = false;
        } else if (password.length < 8) {
            $("#password").after("<small class='error-message text-danger'>La contraseña debe tener al menos 8 caracteres.</small>");
            isValid = false;
        }

        if (isValid) {
            window.location.href = "/html/home.html";
        }
    });
});
