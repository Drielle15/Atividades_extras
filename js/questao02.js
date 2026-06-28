document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    var codigo = document.getElementById("codigo").value;
    var senha = document.getElementById("senha").value;

    var codigoValido = "ABCD1234";
    var senhaValida = "1234";

    if (codigo === codigoValido && senha === senhaValida) {
        document.getElementById("mensagem").innerHTML = "ACESSO PERMITIDO";
    } else {
        document.getElementById("mensagem").innerHTML = "ACESSO NEGADO";
    }
});
