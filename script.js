const menuBtn = document.getElementById('menu');
const sideMenu = document.getElementById('nav');


    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });
    