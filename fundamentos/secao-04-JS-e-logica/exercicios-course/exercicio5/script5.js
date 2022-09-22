const nota = 95;

if(nota > 100 || nota < 0){
    console.log('Nota inválida!!');
}else if(nota >= 90 && nota <= 100){
    console.log('Recebeu nota A');
}else if(nota >= 80 && nota < 90){
    console.log('Recebeu nota B');
}else if(nota >= 70 && nota < 80){
    console.log('Recebeu nota C');
}else if(nota >= 60 && nota < 70){
    console.log('Recebeu nota D');
}else if(nota >= 50 && nota < 60){
    console.log('Recebeu nota E');
} else{
    console.log('Recebeu nota F');
}
