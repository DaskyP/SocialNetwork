$(document).ready(function () {
    $("#otherGenderContainer").hide();

    $("#gender").change(function () {
        if ($(this).val() === "other") {
            $("#otherGenderContainer").show();
        } else {
            $("#otherGenderContainer").hide();
            $("#otherGender").val(""); 
        }
    });

    $("form").submit(function (event) {
        event.preventDefault(); 

        let username = $("#username").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let confirmPassword = $("#confirmPassword").val().trim();
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let gender = $("#gender").val();
        let otherGender = $("#otherGender").val().trim();
        let birthdate = $("#birthdate").val();
        let termsAccepted = $("#terms").is(":checked");

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        $(".error-message").remove();

        let isValid = true;

        if (username === "" || username.length < 3) {
            $("#username").after("<small class='error-message text-danger'>El username debe tener al menos 3 caracteres.</small>");
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            $("#email").after("<small class='error-message text-danger'>Ingrese un email válido.</small>");
            isValid = false;
        }

        if (password.length < 8) {
            $("#password").after("<small class='error-message text-danger'>La contraseña debe tener al menos 8 caracteres.</small>");
            isValid = false;
        }

        if (confirmPassword !== password) {
            $("#confirmPassword").after("<small class='error-message text-danger'>Las contraseñas no coinciden.</small>");
            isValid = false;
        }

        if (firstName === "") {
            $("#firstName").after("<small class='error-message text-danger'>El nombre es obligatorio.</small>");
            isValid = false;
        }

        if (lastName === "") {
            $("#lastName").after("<small class='error-message text-danger'>Los apellidos son obligatorios.</small>");
            isValid = false;
        }

        if (birthdate !== "") {
            let birthYear = new Date(birthdate).getFullYear();
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            if (age < 18) {
                $("#birthdate").after("<small class='error-message text-danger'>Debes tener al menos 18 años.</small>");
                isValid = false;
            }
        } else {
            $("#birthdate").after("<small class='error-message text-danger'>La fecha de nacimiento es obligatoria.</small>");
            isValid = false;
        }

        if (gender === "select") {
            $("#gender").after("<small class='error-message text-danger'>Selecciona un género válido.</small>");
            isValid = false;
        }

        if (gender === "other" && otherGender === "") {
            $("#otherGender").after("<small class='error-message text-danger'>Por favor especifica tu género.</small>");
            isValid = false;
        }

        if (!termsAccepted) {
            $("#terms").after("<small class='error-message text-danger'>Debes aceptar los términos y condiciones.</small>");
            isValid = false;
        }

        if (isValid) {
            window.location.href = "/html/home.html";
        }
    });
});
