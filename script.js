AOS.init();
AOS.refresh();

const contentLink = document.getElementById('scrollDownBtn');
contentLink.addEventListener('click', () => {
    const contentAnchor = document.getElementById('main-content-top');
    contentAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
});