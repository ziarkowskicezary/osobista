const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('nav-open');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;

        // Pokaż kursor przed rozpoczęciem pisania
        heroTitle.style.borderRight = '3px solid var(--amber-creative)';

        function type() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 85); // Szybkość pisania (w ms)
            } else {
                // ZAKOŃCZONO PISANIE - KURSOR ZNIKA
                heroTitle.style.borderRight = '3px solid transparent';
            }
        }

        // Rozpocznij pisanie po krótkim opóźnieniu
        setTimeout(type, 500);
    }

    // Skrypt do efektu "błysku" na kartach
    const cards = document.querySelectorAll('.trust-card, .cooperation-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});