function verificar() {
   
    var num = document.getElementById("numero").value;
    
    num = parseInt(num);

    if (num % 3 === 0 && num % 7 === 0) {
        document.getElementById("resultado").innerHTML = 
            "O número " + num + " é divisível por 3 e por 7.";
    } else {
        document.getElementById("resultado").innerHTML = 
            "O número " + num + " NÃO é divisível por 3 e por 7.";
    }
}
