const nota = 59;
const studentName = 'Joaquim';

if(nota >= 80){
    console.log('Parabéns ' + studentName + ', você foi aprovado! Sua nota foi: ' + nota);
} else if(nota < 80 && nota >= 60){
    console.log(studentName + ', você está na nossa lista de espera. Sua nota foi: ' + nota);
} else{
    console.log(studentName + ', você foi reprovado(a). Sua nota foi: ' + nota);
}