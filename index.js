window.onload = () => {
    verifyTheme()
}

function verifyTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

const switchMode = (event) => {
    switch (event.value) {
        case "auto":
            localStorage.removeItem('theme');
            break;
        case "light":
            localStorage.theme = 'light';
            break;
        case "dark":
            localStorage.theme = 'dark';
            break;
        default:
            break;
    }

    verifyTheme();
};

let swiper = new Swiper(".slideshow", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let date = new Date()

document.querySelector('#year').innerHTML = date.getFullYear()

function toggleMenu(flag) {
    let value = document.getElementById("menu");
    if (flag) {
        value.classList.remove("hidden");
    } else {
        value.classList.add("hidden");
    }
}