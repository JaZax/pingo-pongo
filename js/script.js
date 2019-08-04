const canvas = document.querySelector('canvas')
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d')

const controls = {

    "height" : window.innerHeight / 3,
    "width" : 60,

}

window.addEventListener('keydown' , (e)=>{
    if(e.key)
    {
        switch(e.key)
    {
        case 'w' : 
            lefty-=25
            break;

        case 's' : 
            lefty+=25
            break;

        case 'i' : 
            righty-=25
            break;

        case 'k' : 
            righty+=25
            break;
    }
    }else{
        console.log('keydown error')
    }
})

let lefty = window.innerHeight/3;
let righty = window.innerHeight/3;

function action (){
    requestAnimationFrame(action);
    
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    if(lefty + controls.height > window.innerHeight)
    {
        lefty = 612.3333333333333
    }else if(lefty < 0){
        lefty = 12.333333333333314
    }

    if(righty + controls.height > window.innerHeight)
    {
        righty = 612.3333333333333
    }else if(righty < 0){
        righty = 12.333333333333314
    }

    c.beginPath();
    c.arc(window.innerWidth/2, window.innerHeight/2, 40, 0, 2 * Math.PI);
    c.fillStyle = "#fecb06";
    c.fill();

    c.fillStyle = '#333'

    //left control
    c.fillRect(100, lefty, controls.width, controls.height)
    //right control
    c.fillRect(window.innerWidth - 150, righty, 60, window.innerHeight/3)
}

action()

