document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('product-list');
      data.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
        `;

        productList.appendChild(productCard);
      });
    })
    .catch(error => console.error('Error fetching products:', error));
});
