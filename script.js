
function irParaTela(numero) {

    // Procura todas as telas
    const telas = document.querySelectorAll(".tela");

    // Esconde todas as telas
    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    // Procura a tela que queremos mostrar
    const novaTela = document.getElementById("tela" + numero);

    // Mostra a nova tela
    novaTela.classList.add("ativa");

    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

