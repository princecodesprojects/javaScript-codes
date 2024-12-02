const randomColor=()=>{
   const hex="123456789ABCDEF";
   let color='#'
   for(let i=0;i<6;i++)
   {
     color+=hex[Math.floor(Math.random()*15)];
   }
   return color;
}

let id;

const startChangingColor=function(){

    if(!id){
        id=setInterval(changeColor,1000);

    }


    function changeColor(){

        document.body.style.backgroundColor=randomColor();
    }
}

const stopChangingColor=function(){
    clearInterval(id);
    id=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);