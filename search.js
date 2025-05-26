document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.search-icon');
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.querySelector('.search-input');
  const suggestionsBox = document.querySelector('.search-suggestions');

  // Show search bar on icon click
  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('active');
    searchInput.focus();
  });

  // Hide search bar when clicking outside or pressing Escape
  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target) && !searchIcon.contains(e.target)) {
      searchContainer.classList.remove('active');
      suggestionsBox.style.display = 'none';
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchContainer.classList.remove('active');
      suggestionsBox.style.display = 'none';
    }
  });

  // --- Live Search Suggestions ---
  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    suggestionsBox.innerHTML = '';
    if (!query) {
      suggestionsBox.style.display = 'none';
      return;
    }
    // Search in productList
    const matches = productList.filter(p =>
      p.name.toLowerCase().includes(query) ||
      (p.desc && p.desc.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query))
    ).slice(0, 8); // Show up to 8 suggestions

    if (matches.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
    }

    suggestionsBox.style.display = 'block';
    matches.forEach(product => {
      const params = new URLSearchParams({
        name: product.name,
        img: product.img,
        desc: product.desc,
        price: product.price,
        category: product.category
      }).toString();

      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.innerHTML = `
        <img src="image/products/${product.category}/${product.img}" alt="${product.name}" style="width:38px;height:38px;object-fit:cover;border-radius:8px;">
        <span style="font-size:1.05em;color:#23232a;">${product.name}</span>
        <span style="margin-left:auto;color:#7b5eea;font-size:0.98em;">$${product.price}</span>
      `;
      item.onclick = () => {
        window.location.href = `product.html?${params}`;
      };
      suggestionsBox.appendChild(item);
    });
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      suggestionsBox.style.display = 'none';
    }
  });
});