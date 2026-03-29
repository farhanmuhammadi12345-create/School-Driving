const navMenu = document.querySelector('.nav__menu');
const navMenuOpen = document.querySelector('.nav-menu-open');
const navMenuClose = document.querySelector('.nav-menu-close');

navMenuOpen.addEventListener('click', () => {
    navMenu.style.display = 'flex'
    navMenuOpen.style.display = 'none'
    navMenuClose.style.display = 'inline-block'
});

navMenuClose.addEventListener('click', () => {
    navMenu.style.display = 'none'
    navMenuOpen.style.display = 'inline-block'
    navMenuClose.style.display = 'none'
});

const themeBtn = document.querySelector('.theme__btn');
const body = document.body;
const icon = themeBtn.querySelector('i');

// APPLY SAVED MODE ON LOAD
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    icon.className = 'uil uil-sun';
}

// TOGGLE MODE
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        icon.className = 'uil uil-sun';
    } else {
        localStorage.setItem('theme', 'light');
        icon.className = 'uil uil-moon';
    }
});