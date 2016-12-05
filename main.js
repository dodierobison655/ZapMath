var canvas = document.getElementById('myCanvas');
if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(350,350,25,0,Math.PI*2); // Outer circle
    ctx.stroke();
  }
