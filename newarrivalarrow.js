document.querySelector('.arrivals-arrow.left').onclick = function() {
    document.querySelector('.arrivals-list').scrollBy({ left: -240, behavior: 'smooth' });
};
document.querySelector('.arrivals-arrow.right').onclick = function() {
    document.querySelector('.arrivals-list').scrollBy({ left: 240, behavior: 'smooth' });
};
