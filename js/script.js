document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Saiba mais"
    const saibaMaisButtons = document.querySelectorAll('.saibaMaisbtn');

    // Itera sobre cada botão "Saiba mais"
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o texto específico para este produto
            const textoProduto = this.getAttribute('data-texto');

            // Encontra o título do produto dentro do mesmo card
            const productName = this.closest('.product-card').querySelector('h3').textContent;

            // Configura o SweetAlert com imagem e conteúdo HTML
            Swal.fire({
                title: productName,
                text: textoProduto,
                imageUrl: 'img/300x300.png', // Substitua com o caminho da sua imagem
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Imagem ilustrativa',
                confirmButtonText: 'Fechar',
                showCloseButton: true, // Mostrar botão de fechar
                customClass: {
                    content: 'text-left' // Alinha o conteúdo à esquerda
                }
            });
        });
    });
});
