var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: .2,
    duration: 1,
    y: 20,
    delay: 5,
    ease: 'Expo.easeInOut',
    opacity: 0
})

