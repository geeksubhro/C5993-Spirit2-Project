document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideMenuBtn = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideMenuBtn && menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

function closeMenu() {
    var menu = document.getElementById('menu');
    var menuBtn = document.getElementById('menuBtn');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    } else {
        menu.classList.add('active');
        menuBtn.classList.add('active');
    }
}
