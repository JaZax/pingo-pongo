const canvas = document.querySelector('canvas')
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d')

c.fillRect(100, window.innerHeight/3, 60, window.innerHeight/3)
c.fillRect(window.innerWidth - 150, window.innerHeight/3, 60, window.innerHeight/3)

window.addEventListener('keydown' , (e)=>{
    switch(e.key)
    {
        case 'w' : 
        console.log('left up')
        break;

        case 's' : 
        console.log('left down');
    }
})