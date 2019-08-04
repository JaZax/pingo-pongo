const canvas = document.querySelector('canvas')
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d')


window.addEventListener('keydown' , (e)=>{
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
})

let lefty = window.innerHeight/3;
let righty = window.innerHeight/3;

function action (){
    requestAnimationFrame(action);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    c.fillStyle = 'rgb(56, 56, 56)'
    c.fillRect(100, lefty, 60, window.innerHeight/3)
    c.fillRect(window.innerWidth - 150, righty, 60, window.innerHeight/3)
}

action()