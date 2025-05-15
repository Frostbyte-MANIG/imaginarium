document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    if (searchIcon && searchContainer && searchInput) {
        searchIcon.addEventListener('click', function(e) {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
            e.stopPropagation();
        });

        // Optional: Hide search when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('active');
            }
        });
    }
});
