// const canvas = document.getElementsByClassName('main__display')[0]
const barra1 = document.getElementsByClassName('main__barra')[0]
const barra2 = document.getElementsByClassName('main__barra')[1]
const bola = document.getElementsByClassName('main__bola')[0    ]

let y1 = 0
let y2 = 0
let  bolax = 400
let  bolay = 90

let run = true


window.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowDown'  && y1 < 220 ){
        // console.log(y1)
        y1 += 5
        barra2.style.top = `${y1}px`
    }
    if(event.key == 'ArrowUp'  && y1 > -140 ){
        y1 -= 5
        barra2.style.top = `${y1}px`
    } 

    if((event.key).toLowerCase() == 's'  && y2 < 360 ){
        y2 += 5
        barra1.style.top = `${y2}px`
    }if((event.key).toLocaleLowerCase() == 'w'  && y2 > 0 ){
        y2 -= 5
        barra1.style.top = `${y2}px`
        
    }  
})

setInterval(()=>{
    if(run){
        bolax+=1
        if(colisao(y1,bolax,bolay)) run = false;
        
    }else if(!run){
        bolax-=1 
        console.log(y2,bolax,bolay)
        if(colisao(y2,bolax,bolay)) run = true;
    }
    bola.style.left = `${bolax}px`
},7)

function colisao(y,bolax,bolay){
    if(bolay > y  && bolay < y+130 && bolax==850){

        return true;
    }
    if(bolay < y  && bolay > y-130 && bolax==10){
       
        return true;
    }

}