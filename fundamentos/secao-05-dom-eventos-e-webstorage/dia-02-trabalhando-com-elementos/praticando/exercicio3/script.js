const pai = document.querySelector("#pai");

let filhosPai = pai.children;

for(let i = 0; i < filhosPai.length; i += 1){
    let elemento = filhosPai[i];

    if(elemento.id.includes('Filho')){
        pai.removeChild(elemento);
     
    }
}

pai.removeChild(pai.lastElementChild);

document.querySelector("#elementoOndeVoceEsta").removeChild(document.querySelector("#elementoOndeVoceEsta").lastElementChild);

