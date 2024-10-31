gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger:'#container',
    start: 'top top',
    endTrigger: '#contact',
    end: 'bottom 50%+=100px',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
        console.log(
            'progress:',
            self.progress.toFixed(3),
            'direction:',
            self.direction,
            'velocity',
            self.getVelocity()
        );
    }
});