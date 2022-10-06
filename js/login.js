function logar() {
    var email = document.querySelector('#name');
    var senha = document.querySelector('#field-input-password');

    if (email.value == "admin@admin.com" && senha.value == "admin") {
        localStorage.setItem("acesso", true);
        window.location.href = 'bem-vindo.html';

        alert("Bem vindo " + email)
    } else {
        alert("acesso negado")
    }
}

