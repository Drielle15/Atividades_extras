document.getElementById("formProduto").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var nome = document.getElementById("nome").value;
    var valorCompra = parseFloat(document.getElementById("valor").value);
    var valorVenda;

    if (valorCompra < 10) {
        valorVenda = valorCompra * 1.70; 
    } else if (valorCompra >= 10 && valorCompra <= 30) {
        valorVenda = valorCompra * 1.50; 
    } else if (valorCompra > 30 && valorCompra <= 50) {
        valorVenda = valorCompra * 1.40; 
    } else {
        valorVenda = valorCompra * 1.30; 
    }

    document.getElementById("resultado").innerHTML =
        "Produto: " + nome + "<br>Valor de venda: R$ " + valorVenda.toFixed(2);
});
