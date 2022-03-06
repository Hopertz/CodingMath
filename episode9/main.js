// Acceleration
window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 100;

    for(var i = 0; i<numParticles; i++){
        particles.push(particle.create( width/2, height/3, Math.random()*5 + 2, Math.random()* Math.PI * 2,0.1));
    }

    
    
    update();
    function update() {
        context.clearRect(0,0,width,height);
        for(var i = 0; i<numParticles; i++){
            var p = particles[i]
            p.update();
            context.beginPath();
            context.arc(p.position.getX(),p.position.getY(),3,0 ,Math.PI*2);
            context.fill();

        }
        
        requestAnimationFrame(update);
    }

};
/*
window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 100;
        gravity = vector.create(0,0.1);

    for(var i = 0; i<numParticles; i++){
        particles.push(particle.create( width/2, height/3, Math.random()*5 + 2, Math.random()* Math.PI * 2));
    }

    
    
    update();
    function update() {
        context.clearRect(0,0,width,height);
        for(var i = 0; i<numParticles; i++){
            var p = particles[i]
            p.accelerate(gravity)
            p.update();
            context.beginPath();
            context.arc(p.position.getX(),p.position.getY(),3,0 ,Math.PI*2);
            context.fill();

        }
        
        requestAnimationFrame(update);
    }

};

*/

/*
window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = particle.create(100, height, 10, -Math.PI/2),
        accel = vector.create(0.08,0.08);

    
    
    update();
    function update() {
        context.clearRect(0,0,width,height);
        p.accelerate(accel);
        p.update();
        context.beginPath();
        context.arc(p.position.getX(),p.position.getY(),10,0 ,Math.PI*2);
        context.fill();

        requestAnimationFrame(update);
    }

};

*/