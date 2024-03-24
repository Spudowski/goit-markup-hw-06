const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('close-menu');
const sidebar = document.querySelector('.sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-200%')