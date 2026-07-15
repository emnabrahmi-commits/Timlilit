document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    let telRegex = /^[0-9]{8}$/;
    let passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Email invalide !");
        return;
    }
    if (tel && !telRegex.test(tel)) {
        alert("Numéro invalide !");
        return;
    }
    if (!passRegex.test(pass)) {
        alert("Mot de passe non sécurisé !");
        return;
    }
    if (pass !== confirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    if (!document.getElementById("acceptCGV").checked) {
        alert("Veuillez accepter les conditions générales.");
        return;
    }

    document.getElementById("message").innerHTML =
        "<p style='color:green;'>Inscription réussie !</p>";
});