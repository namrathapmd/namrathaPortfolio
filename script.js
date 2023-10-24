

document.querySelectorAll('#desktop-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const options = {
    strings: ['En^100gineer', 'Amim^250al', 'Anim^250al Lover', 'Data^250 Analyst', 'Dance Enthu^250siast'],
    typeSpeed: 80,
    backSpeed: 50,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true
};

const typed = new Typed('.typed', options);