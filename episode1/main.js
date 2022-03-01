// Drawing a bunch of random lines
window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'), // With the context in hand, you can draw anything you like. 
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    //context.fillRect(0,0,width,height);

    for (var i = 0; i< 100; i+=1) {
        context.beginPath();       
        context.moveTo(Math.random()*width, Math.random()*height);    
        context.lineTo(Math.random()*width, Math.random()*height);  
        context.stroke();          

        
    }

};

/* 

Drawing a straight line

The line begins at (30, 50) and ends at (150, 100).

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();       // Start a new path
ctx.moveTo(30, 50);    // Move the pen to (30, 50) / // Begin first path
ctx.lineTo(150, 100);  // Draw a line to (150, 100)
ctx.stroke();          // Render the path 
                       // outlines the current or given path with the current stroke style.


*/