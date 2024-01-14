document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideMenuBtn = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideMenuBtn && menu.classList.contains('active')) {
            closeMenu();
        }
    });
});

function toggleMenu() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMenu() {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
}



function highlightCategory(categoryId) {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
        categoryElement.classList.add('active');
    }
}

function unhighlightCategory() {
    const activeCategory = document.querySelector('.categories li.active');
    if (activeCategory) {
        activeCategory.classList.remove('active');
    }
}

function toggleQuantity(foodId) {
    const quantityDiv = document.getElementById(`quantity-${foodId}`);
    const quantityValue = quantityDiv.querySelector('.quantity');
    if (parseInt(quantityValue.innerText) === 0) {
        quantityDiv.style.display = quantityDiv.style.display === 'none' ? 'flex' : 'none';
    }
    event.stopPropagation(); // Stop the event from propagating to the document level
}

document.addEventListener('click', function (event) {
    const isQuantityContainer = event.target.matches('.quantity-container') || event.target.closest('.quantity-container');
    const isQuantityButton = event.target.matches('.quantity-buttons button');
    const isQuantityZero = event.target.closest('.quantity-container') && event.target.matches('.quantity') && parseInt(event.target.innerText) === 0;

    if (!isQuantityContainer && !isQuantityZero && !isQuantityButton) {
        const quantityDivs = document.querySelectorAll('.quantity-container');
        quantityDivs.forEach(div => {
            const quantityValue = div.querySelector('.quantity');
            if (parseInt(quantityValue.innerText) === 0) {
                div.style.display = 'none';
            }
        });
    }
});

function changeQuantity(foodId, amount) {
    const quantityElement = document.getElementById(`quantity-value-${foodId}`);
    let quantity = parseInt(quantityElement.innerText);
    quantity = Math.max(0, quantity + amount);
    quantityElement.innerText = quantity;
}