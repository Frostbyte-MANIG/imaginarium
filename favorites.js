window.addToWishlist = function({id, name, price, img}) {
  let items = JSON.parse(localStorage.getItem('wishlist') || '[]');
  if (!items.find(i => i.id === id)) {
    items.push({id, name, price, img});
    localStorage.setItem('wishlist', JSON.stringify(items));
  }
};
