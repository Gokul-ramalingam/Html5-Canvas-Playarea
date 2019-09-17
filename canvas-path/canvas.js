var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
//Line
// c.beginPath();
// c.moveTo(100,300);
// c.lineTo(300,100);
// c.lineTo(400,400);
// c.strokeStyle='#FF3031';
// c.stroke();

//Arc
// c.arc(300,300,30,0,Math.PI*2,false);
// c.stroke();

//Multiple Arcs using for loop
// for(let i = 0;i < 1000;i++){
//     c.beginPath();
//     x = Math.random()*window.innerWidth;
//     y = Math.random()*window.innerHeight;
//     c.arc(x,y,30,Math.PI*2,false);
//     c.strokeStyle='#FF3031';
//     c.stroke();
// }
mouse = {
x:undefined,
y:undefined
}
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
  
var maxRadius = 40;
var minRadius = 2;
var colorArray=['#FF3031',
'#25CCF7',
'#3C40C6',
'#badc57',
'#FFF222']


function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color =  colorArray[Math.floor((Math.random() * colorArray.length))];
    this.draw = function(){
        // console.log("circle")
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI*2,false);
        c.strokeStyle='#FF3031';
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x+30 > innerWidth || this.x-30 < 0)
       {
           this.dx = -this.dx;
       }
      
       if(this.y+30>innerHeight || this.y-30 < 0)
       {
           this.dy = -this.dy;
       }
       this.x += this.dx;
       this.y += this.dy;
  
       //Interativity
       if(mouse.x - this.x < 50  && mouse.x - this.x>-50 && mouse.y - this.y < 50  && mouse.y - this.y>-50){
        if(this.radius < maxRadius)   
        this.radius += 1;
       }
      else if(this.radius > minRadius){
         this.radius -= 1;
    }


       this.draw();
    }
    }   


// circle.update();

let circleArray=[];

for(let i = 0;i < 500;i++){
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() -0.5 ) * 7;
var dy = (Math.random()-0.5) * 7;
var radius = 30;
circleArray.push(new Circle(x,y,dx,dy,radius));
}
// console.log(circleArray);

    function animate(){
        c.clearRect(0,0,innerWidth,innerHeight);
        requestAnimationFrame(animate);
        for(let i = 0;i < circleArray.length;i++){
            circleArray[i].update();
          }
    }
    animate();

    

   