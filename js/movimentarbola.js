const bola = document.getElementsByClassName('main__bola')[0]
let  x = 0


setInterval(()=>{
    x+=10
    console.log(x)
    // bola.style.left = `${x}px`
},10)