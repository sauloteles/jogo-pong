// const canvas = document.getElementsByClassName('main__display')[0]
const barra1 = document.getElementsByClassName('main__barra')[0]
const barra2 = document.getElementsByClassName('main__barra')[1]
const bola = document.getElementsByClassName('main__bola')[0]
const elementJogador1 = document.getElementsByClassName('jogador-pontos')[0];
const elementJogador2 = document.getElementsByClassName('jogador-pontos')[1];


let y1 = 0
let y2 = 0
let  bolax = 400
let  bolay = 90
let anguloBola = 2;
let velocidadeBarra = 20;
let runX = true
let runY = true
let barra1Run = false;
let barra2Run = false;

let pontosJogador1 = 0;
let pontosJogador2 = 0;


window.addEventListener('keydown',(event)=>{
    if(event.key == 'ArrowDown'  && y1 < 220 ){
        // console.log(y1)
        y1 += velocidadeBarra;
        barra2.style.top = `${y1}px`
    }
    if(event.key == 'ArrowUp'  && y1 > -140 ){
        y1 -= velocidadeBarra
        barra2.style.top = `${y1}px`
    } 

    if((event.key).toLowerCase() == 's'  && y2 < 360 ){
        y2 += velocidadeBarra
        barra1.style.top = `${y2}px`
    }if((event.key).toLocaleLowerCase() == 'w'  && y2 > 0 ){
        y2 -= velocidadeBarra
        barra1.style.top = `${y2}px`
        
    }  
})

setInterval(()=>{
     reset()
    if(runX){
        bolax+=1
        if(colisaoHorizontal(y1,bolax,bolay)) runX = false;
        
    }else if(!runX){
        bolax-=1 
        console.log(y2,bolax,bolay)
        if(colisaoHorizontal(y2,bolax,bolay)) runX = true;
    }if(runY){
        bolay+= anguloBola;
        if(colisaoVetical(bolay)) runY =false;
    }else if(!runY){
        bolay-=anguloBola;
        if(colisaoVetical(bolay)) runY = true;
    }
    bola.style.left = `${bolax}px`
    bola.style.top = `${bolay}px`

},1)

function colisaoHorizontal(y,bolax,bolay){
    if(bolay > y  && bolay < y+140 && bolax==850){

        return true;
    }
    if(bolay < y  && bolay > y-140 && bolax==10){
       
        return true;
    }
    return false;

}
function reset(){
    if(bolax>870){
        bolax = 400;
        bolay =90
        pontosJogador1+=1; 
        elementJogador1.textContent = pontosJogador1;       
    }if(bolax < 0){
        bolax = 400;
        bolay =90
        pontosJogador2+=1;
        elementJogador2.textContent = pontosJogador2;
    }
}
function colisaoVetical(bolay){
    if(bolay == -140 || bolay == 380){
        return true;
    }
    return false
}

function calcularY(){
    if(barra1){
        if(barra1Run){

        }else{
            
        }
    }
}