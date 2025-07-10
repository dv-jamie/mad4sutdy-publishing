// *** tutor intro section
document.addEventListener('scroll', () => {
    const tutorIntroSection = document.querySelector('#tutor-intro-section');
    const tutorIntroSectionRect = tutorIntroSection.getBoundingClientRect();
    const cardList = document.querySelector('#tutor-intro-section .tutor-list');
    const windowHeight = window.innerHeight;

    
    if(tutorIntroSectionRect.top < windowHeight) {
        const move = tutorIntroSectionRect.top / windowHeight * 1000;

        cardList.style.transform = `translateX(${move}px)`
    }
})