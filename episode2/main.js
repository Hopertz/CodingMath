window.onload = function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'), // With the context in hand, you can draw anything you like. 
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    
    
    context.translate(0,height/2);

    //context.scale(1,-1);

    /* 
       context.scale(x,y);
       x
       Scaling factor in the horizontal direction. 
       A negative value flips pixels across the vertical axis. 
       A value of 1 results in no horizontal scaling.

       y
       Scaling factor in the vertical direction. 
       A negative value flips pixels across the horizontal axis. 
       A value of 1 results in no vertical scaling.

    */
    for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
        var x = angle * 200,
            y = Math.sin(angle)*200;

        context.fillRect(x,y,5,5);

        
        
    }

};

