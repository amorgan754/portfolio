gsap.registerEffect({
    name: "fadeIn",
    defaults:{duration: 3},
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 1, ease: "power2.in", y: +50});
    }
});

window.addEventListener("load", function(){
    gsap.effects.fadeIn(".homePage");
})