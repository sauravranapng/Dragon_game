
  score=0;
  cross=true;
  audio=new Audio('music.mp3');
  audiogo=new Audio('gameover.mp3');
  setTimeout(() => {
    audio.play();
  },500);
  document.onkeydown=function(e){
        console.log("the key value is ",e.code);
        if(e.code=="ArrowUp"){
         dino=document.querySelector('.dino'); 
           dino.classList.add('animatedino');
           setTimeout(() => {
               dino.classList.remove('animatedino');
           }, 1000);
        }
        if(e.code=="ArrowRight"){
            dino=document.querySelector('.dino'); 
             dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
              dino.style.left=(dinox+112)+"px";
              }
              if(e.code=="ArrowLeft"){
                dino=document.querySelector('.dino'); 
                 dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                  dino.style.left=(dinox-112)+"px";
                  }
    
    }
    setInterval(() => {
        dino=document.querySelector('.dino');
        gameOver=document.querySelector('.gameOver');
        Obstacle=document.querySelector('.Obstacle');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
        ox=parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue('left'));
        oy=parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue('top'));
   offsetx=Math.abs(dx-ox);
   offsety=Math.abs(dy-oy);
 //console.log(offsetx,offsety);
 if(offsetx<290 && offsety<52){
gameOver.innerHTML="Game Over reload to start";
Obstacle.classList.remove('obstacleani');
audiogo.play();
setTimeout(() => {
  audiogo.pause();
  audio.pause();
}, 1000);
 }
 else if(offsetx<50&&cross){
   score+=1;
   updatescore(score);
   cross=false;
   setTimeout(() => {
     cross=true;
   }, 1000);
 }
 else if(ox<100){
  
  anidur=parseFloat(window.getComputedStyle(Obstacle,null).getPropertyValue('animation-duration'));
 newdur=anidur-0.02;
 Obstacle.style.animationDuration=newdur+'s';
 console.log("New Duration :",newdur);
}
    },10);
    function updatescore(score){
      scorecount=document.querySelector('.scorecount');
      scorecount.innerHTML="Your Score:"+score;
    }