
"use strict"
var container=document.querySelector(".container");
console.log(container);


function getRandomLocation(){
    const width=window.innerWidth
    const height=window.innerHeight
    const x=Math.random()*(width-200)+100;
    const y=Math.random()*(height-200)+100;
    console.log(x,y);
    return {x, y}
}

function createHeard(){
    var heardurl=document.createElement("span");
    heardurl.classList.add('fa');
    heardurl.classList.add('fa-heart');
    const size=Math.ceil(Math.random()*30);
    heardurl.style.fontSize=`${size}px`;
    const {x,y}=getRandomLocation();
    heardurl.style.top=`${y}px`;
    heardurl.style.left=`${x}px`;

    container.appendChild(heardurl);
    setTimeout(()=>{
        heardurl.remove();
    },500);
}



    const intervalid=setInterval(createHeard,5);
    setTimeout(()=>{
        clearInterval(intervalid);
    },50000)











