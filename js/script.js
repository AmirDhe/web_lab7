document.addEventListener('DOMContentLoaded', () => {
 
     const jsonUrl = 'https://raw.githubusercontent.com/AmirDhe/web_lab7/master/products.json';

   
    const productsContainer = document.getElementById('products-container');

    
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

  
    fetch(jsonUrl)
        .then(response => response.json())
        .then(products => {
            products.forEach(displayProduct);
        })
        .catch(error => console.error('Error fetching products:', error));
});
