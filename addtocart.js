// Cart Drawer Logic

// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartIcon = document.querySelector('.cart-icon-link');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Cart state (use localStorage for persistence)
    let cart = JSON.parse(localStorage.getItem('imaginarium_cart') || '[]');

    function saveCart() {
        localStorage.setItem('imaginarium_cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        if (!cartItemsDiv || !cartTotalSpan) return;
        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
            cartTotalSpan.textContent = '$0.00';
            return;
        }
        let total = 0;
        cartItemsDiv.innerHTML = cart.map((item, i) => {
            total += item.price * item.qty;
            return `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>×${item.qty}</span>
                    <span>$${(item.price * item.qty).toFixed(2)}</span>
                    <button onclick="removeCartItem(${i})" aria-label="Remove">&times;</button>
                </div>
            `;
        }).join('');
        cartTotalSpan.textContent = '$' + total.toFixed(2);
    }

    // Remove item (global for inline onclick)
    window.removeCartItem = function(i) {
        cart.splice(i, 1);
        saveCart();
        updateCartUI();
    };

    // Add to cart (global for use in product pages)
    window.addToCart = function(name, price) {
        let found = cart.find(item => item.name === name);
        if (found) found.qty++;
        else cart.push({name, price, qty: 1});
        saveCart();
        updateCartUI();
        openCart();
    };

    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    }
    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
    }

    // Cart icon click
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Checkout button (customize as needed)
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Checkout is not implemented in this demo.');
        });
    }

    // Initial UI
    updateCartUI();
});