document.addEventListener('DOMContentLoaded', () => {
    // URL du fichier JSON sur GitHub
    const jsonUrl = 'https://raw.githubusercontent.com/votre-utilisateur/votre-depot/master/products.json';

    // Sélectionner l'élément qui contiendra les produits
    const productsContainer = document.getElementById('products-container');

    // Fonction pour afficher un produit
    const displayProduct = (product) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
        `;
        productsContainer.appendChild(productDiv);
    };

    // Récupérer et afficher les produits
    fetch(jsonUrl)
        .then(response => response.json())
        .then(products => {
            products.forEach(displayProduct);
        })
        .catch(error => console.error('Error fetching products:', error));
});
