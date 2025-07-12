document.addEventListener('scroll', (e) => {
    const windowHeight = window.innerHeight;

    // *** country difference section
    const featureCardLists = document.querySelectorAll('#country-difference-section .feature-card');
    const cardHeight = 168

    featureCardLists.forEach((card, index) => {
        const featureWrap = card.querySelector('.feature-wrap');
        const cardRect = card.getBoundingClientRect();
        const timingByCard = index;

        const scrollStart = (windowHeight - 300) + timingByCard;
        const scrollEnd = (windowHeight - 920) + timingByCard;
        const currentTop = cardRect.top;

        const isAnimationZone = currentTop < scrollStart && currentTop > scrollEnd
        const isAnimationEnd = currentTop <= scrollEnd

        if(isAnimationZone) {
            const progress = (scrollStart - currentTop) / (scrollStart - scrollEnd);
            const move = progress * -cardHeight;
            featureWrap.style.transform = `translateY(${move}px)`;
            card.classList.remove('active');
        } else if(isAnimationEnd) {
            featureWrap.style.transform = `translateY(-168px)`;
            card.classList.add('active');
        } else {
            featureWrap.style.transform = `translateY(0px)`;
            card.classList.remove('active');
        }
    });

    // *** tutor intro section
    const tutorIntroSection = document.querySelector('#tutor-intro-section');
    const tutorIntroSectionRect = tutorIntroSection.getBoundingClientRect();
    const cardList = document.querySelector('#tutor-intro-section .tutor-list');
    
    if(tutorIntroSectionRect.top < windowHeight) {
        const move = tutorIntroSectionRect.top / windowHeight * 1000;

        cardList.style.transform = `translateX(${move}px)`
    }
})