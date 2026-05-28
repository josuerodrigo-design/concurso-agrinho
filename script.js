// Aguarda o carregamento total da página
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mensagem de Boas-Vindas Dinâmica no Console (Ótimo para avaliação de programação)
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    console.log(`${saudacao} Bem-vindo ao Projeto Agrinho - Educação Digital.`);

    // 2. Rolagem Suave para os Links do Menu
    const linksMenu = document.querySelectorAll(".cabecalho-menu-item");

    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault(); // Evita o pulo brusco na tela
            
            const idAlvo = link.getAttribute("href");
            const secaoAlvo = document.querySelector(idAlvo);

            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: "smooth", // Faz a rolagem ficar suave
                    block: "start"
                });
            }
        });
    });
});
