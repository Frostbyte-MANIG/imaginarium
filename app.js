let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function mod(n, m) {
    return ((n % m) + m) % m;
}

function loadShow() {
    let total = items.length;
    for (let i = 0; i < total; i++) {
        let offset = i - active;
        // For smoother wrap-around, calculate shortest direction
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        let stt = Math.abs(offset);
        let translateX = 140 * offset;
        let scale = 1 - 0.2 * stt;
        let rotateY = offset < 0 ? 1 : offset > 0 ? -1 : 0;

        items[i].style.transform = `translateX(${translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY}deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = stt === 0 ? 'none' : 'blur(5px)';
        items[i].style.opacity = stt > 3 ? 0 : (stt === 0 ? 1 : 0.6);
    }
}
loadShow();

next.onclick = function() {
    active = (active + 1) % items.length;
    loadShow();
};
prev.onclick = function() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
};

// Hide header on scroll down, show on scroll up
let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('hide-on-scroll');
        lastScroll = 0;
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 60) {
        // Scrolling down
        header.classList.add('hide-on-scroll');
    } else {
        // Scrolling up or not moving
        header.classList.remove('hide-on-scroll');
    }
    lastScroll = currentScroll;
});
