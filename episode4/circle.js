// a circle
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var centerY = height / 2,
        centerX = width /2,
        radius = 200,
        angle = 0,
        speed = 0.01,
        x,y;

    
        

    render();

    function render(){
        context.clearRect(0,0,width,height);
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        context.beginPath();
        context.arc(x,y,10,0,Math.PI*2,false);
        context.fill();
        angle += speed;

        requestAnimationFrame(render);

    
    }

       
    
};



/*
// an ellipse
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var centerY = height / 2,
        centerX = width /2,
        xradius = 400,
        yradius = 200,
        angle = 0,
        speed = 0.01,
        x,y;

    
        

    render();

    function render(){
        context.clearRect(0,0,width,height);
        x = centerX + Math.cos(angle) * xradius;
        y = centerY + Math.sin(angle) * yradius;
        context.beginPath();
        context.arc(x,y,10,0,Math.PI*2,false);
        context.fill();
        angle += speed;

        requestAnimationFrame(render);

    
    }

       
    
};

*/


/*
// Lisajous curve
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var centerY = height / 2,
        centerX = width /2,
        xradius = 400,
        yradius = 200,
        xangle = 0,
        yangle = 0,
        xspeed = 0.1,
        yspeed = 0.131,
        x,y;

    
        

    render();

    function render(){
        context.clearRect(0,0,width,height);
        x = centerX + Math.cos(xangle) * xradius;
        y = centerY + Math.sin(yangle) * yradius;
        context.beginPath();
        context.arc(x,y,10,0,Math.PI*2,false);
        context.fill();

        xangle += xspeed;
        yangle += yspeed;

        requestAnimationFrame(render);

    
    }

       
    
};
*/



/*

// Layout objects in circular arrangement
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


    var centerY = height / 2,
        centerX = width /2,
        radius = 200,
        angle = 0,
        numofobjects = 10,
        slice = Math.PI*2 / numofobjects,
        x,y;

    
        
    for(var i = 0; i < numofobjects; i += 1){
       angle = i* slice;
       x = centerX + Math.cos(angle) * radius;
       y = centerY + Math.sin(angle) * radius;
       context.beginPath();
       context.arc(x,y,10,0,Math.PI*2,false);
       context.fill();
       
    }
       
    
};

*/