let lista1 = document.getElementById('lista1');


document.write('<h1> Elemento lista1 (quantos tem) ' + lista1.childElementCount + '</h1>');
document.write('<h1> 1º Elemento ' + lista1.firstChild.innerText + '</h1>');        //se der escaço entre os li nao funciona
document.write('<h1> 2º Elemento ' + lista1.childNodes[0].innerText + '</h1>');     //vai pulando de 1 em 1/ ex:0 não, 1 sim


//adicionar <li> na lista 1
let el = document.createElement( 'li' );            //cria o <li>
let eltxt = document.createTextNode('Pedro');       //da o nome
el.appendChild(eltxt);                              //coloca o nome no <li>
lista1.appendChild(el);                             //adiciona na lista

//lista1.removeChild(lista1.childNodes[5]);           //remove julia

clean(lista1);

let cont = 0;
//codigo para adicionar nome
let poem = prompt('fale nome, se já tiver vai tirar o nome')
for(let i = 0 ; i < lista1.childElementCount; i++){
    if( poem == lista1.childNodes[i].innerText ){   
        alert('esse nome já foi adicionado')
        
        meuElemento.style.color = "red";
        meuElemento.style.backgroundColor = "blue";

        el = document.createElement( 'li' );            //cria o <li>
        eltxt = document.createTextNode(meuElemento);       //da o nome
        el.appendChild(eltxt);                              //coloca o nome no <li>
        lista1.appendChild(el);
        //lista1.removeChild(lista1.childNodes[i]);  
        cont++;
    }
}

if(cont == 0 ){

    let el2 = document.createElement( 'li' );            //cria o <li>
    let eltxt2 = document.createTextNode(poem);       //da o nome
    el2.appendChild(eltxt2);                              //coloca o nome no <li>
    lista1.appendChild(el2); 

}


for(let i = 0; i < lista1.childElementCount; i++){
    document.write('<p>' + i + '-' + lista1.childNodes[i].innerText + '</p>')            //mostra o numero da lista e o elemento
}

//codigo que linpa os espaçoa em branco
function clean(node) {                                                              //limpa os espaços em branco 
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        //types 1: element, 8:comentário, 3:texto
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}


/*
let listaRenovada = lista1;
clean(listaRenovada);

document.write('<h1> 1º Elemento renovado ' + listaRenovada.firstChild.innerText + '</h1>');   //agora funciona
document.write('<h1> 2º Elemento renovado ' + listaRenovada.childNodes[1].innerText + '</h1>'); 

for(let i = 0; i < listaRenovada.childElementCount; i++){
    document.write('<p>' + i + '-' + listaRenovada.childNodes[i].innerText + '</p>')            //mostra o numero da lista e o elemento
}
*/
