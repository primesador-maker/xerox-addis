// js/script.js — Fixed with xeroxaddis
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    }
});

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('xerox-theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else {
    htmlElement.setAttribute('data-theme', 'light');
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('xerox-theme', newTheme);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('open');
    });
});

function openQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.getElementById('quoteModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeQuoteModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQuoteModal();
    }
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop?.classList.add('visible');
    } else {
        backToTop?.classList.remove('visible');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const quoteForm = document.getElementById('quoteForm');

quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(quoteForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const description = formData.get('description');
    const contactMethod = formData.get('contactMethod');
    
    const message = `New Quote Request%0A%0A👤 Name: ${encodeURIComponent(name)}%0A📞 Phone: ${encodeURIComponent(phone)}%0A🖨️ Service: ${encodeURIComponent(service)}%0A📝 Description: ${encodeURIComponent(description)}`;
    
    if (contactMethod === 'telegram') {
        window.open(`https://t.me/xeroxaddis?text=${message}`, '_blank');
    } else if (contactMethod === 'whatsapp') {
        window.open(`https://wa.me/xeroxaddis?text=${message}`, '_blank');
    }
    
    quoteForm.reset();
    alert('Thank you! Your quote request has been sent.');
});