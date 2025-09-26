let vid = document.getElementById('video_de_troleo');

let pl = document.getElementById('play');
let cp = document.getElementById('Cproh');

let capacidad = 0 ;



function aparecer() {
    
    
   capacidad += 0.1;
   
   cp.style.opacity = 0;
   vid.style.opacity = capacidad;
   
   setTimeout(() => {





   if (capacidad < 1) {
       
   
   aparecer();
   }
   
   },400);
   
}


function cambio() {
    
    
    let ti = document.getElementById('ti');
    let des = document.getElementById('des');
    
    
    ti.innerHTML = 'Caiiistee';
    ti.style.background = 'black';
    des.innerHTML = 'El baile del troleo';
    des.style.background = 'black';
   
    pl.style.height = '100px';
    pl.innerHTML = 'Ya deja la paja amigutio jajajsa';
    
    
    
    
    
    
    
    ti.style.animation = 'cambiocolor 1s linear infinite' ;
    
    des.style.animation = 'cambiocolor 1s linear infinite' ;
    
    pl.style.background = 'grey' ;
    pl.style.animation = 'escalar 1s linear infinite';
    
    
    document.body.style.animation = 'cambiofondo 1s linear infinite';
    
    
    
    
    
    
    
    
    
}



pl.addEventListener('touchend', () => {

   aparecer();
   cambio();
   
   
   
   
   
   vid.play();
   
   
   
   
   
   setTimeout(() => {

    
    pl.innerHTML = 'Hubieras visto tu cara<br> JAJAJAJAJAJ🤣🤣';


},4000);
   
   
   
   
   
   
   setTimeout(() => {
    
    vid.pause();
    vid.currentTime = 0;
    vid.play();
    
      pl.innerHTML = 'Te ganaste un una<br> berengena🍆💦 Jajaja...';



  setTimeout(() => {

  
    pl.innerHTML = 'ESPERA!!✋📢,<br> no te vallas todavia,<br> espera un poco mas...';



},3000);
  
    setTimeout(() => {


document.body.innerHTML = `<h1 id='con1'>jaja ya vete de aqui, esto queda entre nosotros jsjs, solo dale me encanta a mi comentario para que otros caigan jijiji🤫...</h1><img src='gato.jpg' height='300' width='300'>` ;

document.body.style.background = 'black' ;
document.body.style.animation = 'none';
document.body.style.color = 'white' ;



},8000);


},8000);


}) 
