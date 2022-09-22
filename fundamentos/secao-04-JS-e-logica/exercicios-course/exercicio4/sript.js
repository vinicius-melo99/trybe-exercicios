let condicao = 'dd';

switch(condicao){
    case 'aprovada':
        console.log("Parabéns, você está aprovado(a)");
        break;

    case 'lista':
        console.log('Você está em nossa lista de espera.');
        break;

    case 'reprovado':
        console.log('infelizmente você foi reprovado(a)');
        break;

    default:
       console.log("não se aplica!");
}