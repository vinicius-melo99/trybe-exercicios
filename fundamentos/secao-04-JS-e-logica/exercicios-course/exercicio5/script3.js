const ang1 = -90, ang2 = 90, ang3 = 0;
let soma = ang1 + ang2 + ang3;
let ehTriangulo = null;

if(ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log('O valor do ângulo não pode ser negativo.');
} else if (soma == 180){
    ehTriangulo = true;
    console.log(ehTriangulo);
} else{
    ehTriangulo = false;
    console.log(ehTriangulo);
}