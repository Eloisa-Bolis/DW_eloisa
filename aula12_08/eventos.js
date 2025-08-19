function atualizarhr(){                                 //funcão
    let data = new Date();
    let datatela = document.getElementById('data');     //aqui ele pega a data
    datatela.innerText = data.toLocaleTimeString();
}

atualizarhr();              //vai aparecer a hora

let btn1 = document.getElementById('btn1');             //pega o botao
btn1.addEventListener('click',atualizarhr);             //quando clica no botao ele atualizar, pode adcionar vairios eventos para o mesmo elemento
//btn1.addEventListener('dblclick',atualizarhr);        //dublo click
btn1.addEventListener('mousemove',atualizarhr);         //mause encima se movendo atualiza


function bgChange() {                                   //muda a cor do fundo aleatoriamente
    var rndCol = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' +
    Math.random() * 255 + ')';
    document.body.style.backgroundColor = rndCol;
}

bgChange();             //vai aparecer a cor

let btn2 = document.getElementById('btn2');     
btn2.addEventListener('click',bgChange);            //muda a cor toda vez que clica no botão
    
let atual = setInterval(atualizarhr, 100);          //atualiza a cada  1000 = 1 segundo
let atualcor = setInterval(bgChange, 100);

function limpa(){                                   //essa fução faz com que pare de atualizat automatico
    clearInterval(atual);                           //para de atualizar
    clearInterval(atualcor);                               
}  

let btn3 = document.getElementById('btn3'); 
btn3.addEventListener('click',limpa);               //quando clica para de atualizar    //adiciono um ouvinte para um evento

let form1 = document.getElementById('form1');
form1.addEventListener('submit', valida);

function valida(){
    let nome = document.getElementById('nome');
    if(nome.value.length==0){
        alert('Nome Inválido');
    }
}
