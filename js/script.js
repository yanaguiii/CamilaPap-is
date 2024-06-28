async function fetchProducts() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;
    productCard.appendChild(productTitle);

    const productImageDiv = document.createElement('div');
    productImageDiv.className = 'product-image';
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.alt;
    productImageDiv.appendChild(productImage);
    productCard.appendChild(productImageDiv);

    const productDescriptionDiv = document.createElement('div');
    productDescriptionDiv.className = 'product-description';

    if (product.description.type === 'list') {
        const descriptionList = document.createElement('ul');
        product.description.content.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            descriptionList.appendChild(listItem);
        });
        productDescriptionDiv.appendChild(descriptionList);
    } else {
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = product.description.content;
        productDescriptionDiv.appendChild(descriptionParagraph);
    }

    const productButton = document.createElement('button');
    productButton.textContent = product.buttonText;
    if (product.buttonDataTexto) {
        productButton.dataset.texto = product.buttonDataTexto;
        productButton.className = 'saibaMaisbtn';
    }
    productDescriptionDiv.appendChild(productButton);

    productCard.appendChild(productDescriptionDiv);

    return productCard;
}

async function loadProducts() {
    const products = await fetchProducts();
    const productsSection = document.getElementById('produtos');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsSection.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);


document.addEventListener('DOMContentLoaded', function() {
    // Não apague essa linha
    loadProducts();
    
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
