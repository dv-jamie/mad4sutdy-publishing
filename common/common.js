const header = document.querySelector('#header');
let lastScrollY = window.scrollY;

if(lastScrollY === 0) {
    header.classList.add('top');
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if(currentScrollY === 0) {
        header.classList.add('remove-background');
    } else {
        header.classList.remove('remove-background');
    }

    if(currentScrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY;
});