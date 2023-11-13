const header = document.querySelector("header");
const imgLogo = document.querySelector('#img-logo')
const imgMenu = document.querySelector('#img-menu')
let lastScroll = 0;
let menuActive = false;
window.addEventListener("scroll", function () {
    if (!menuActive) {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        if (currentScroll > lastScroll) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0%)";
        }

        lastScroll = currentScroll;
    }
});

function activateMenu() {

    header.style.backgroundColor = 'var(--brand-green)'
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-mobile')
    menu.style.display = 'flex';
    menuActive = true;
    imgLogo.setAttribute('src', './assets/img/CashFlow-Logo-White.svg')
    imgMenu.setAttribute('src', './assets/img/close-menu.png')
    menuButton.setAttribute('onclick', 'deactivateMenu()')

}

function deactivateMenu() {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-mobile')
    menu.style.display = 'none';
    menuActive = false;
    header.style.backgroundColor = 'var(--brand-green-light)'
    imgLogo.setAttribute('src', './assets/img/CashFlow-Logo.svg')
    imgMenu.setAttribute('src', './assets/img/Icon.png')
    menuButton.setAttribute('onclick', 'activateMenu()')
}

const faqs = document.querySelectorAll(".faq");


faqs.forEach(faq => {

    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});




const form = document.querySelector('.fale-conosco form')
form.addEventListener('submit', (e => {
    e.preventDefault()
    const name = document.querySelector('.fale-conosco .input #name').value
    const email = document.querySelector('.fale-conosco .input #email').value
    const msg = document.querySelector('.fale-conosco .input #message').value

    fetch('https://discord.com/api/webhooks/1170841821358862346/4vnddyMlpzt23Pb5pXoDwdKdYaEfaSdwp64kqwfjJOauwKWT5OGIu-Q4V3CzXhSJJ1qO', {
        method: 'POST',
        body: JSON.stringify({
            content: `**NOVA MENSAGEM:**  \n **Nome**: ${name} \n **Email**: ${email} \n **Mensagem**: ${msg}`
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
}))




function showPassword() {
    const showButton = document.querySelector('.bxs-low-vision')
    const passwordInput = document.querySelector('.input #senha')
    showButton.className = 'bx bx-show'
    passwordInput.setAttribute('type', 'text')
    showButton.setAttribute('onclick', 'hidePassword()')
}

function hidePassword() {
    const hideButton = document.querySelector('.bx-show')
    const passwordInput = document.querySelector('.input #senha')
    hideButton.className = 'bx bxs-low-vision'
    passwordInput.setAttribute('type', 'password')
    hideButton.setAttribute('onclick', 'showPassword()')
}