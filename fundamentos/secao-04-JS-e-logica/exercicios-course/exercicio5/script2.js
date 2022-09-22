const a = 23, b = 54, c = 101, d = 120, e = 110, num1 = 0;

if(a > b) console.log(`O número ${a} é o maior.\n`);
else if(a < b) console.log(`O número ${b} é o maior.\n`);
else console.log(`Os número são iguais.\n`);

if (c > d && c > e) console.log(`O número ${c} é o maior.\n`);
else if(d > c && d > e) console.log(`O número ${d} é o maior.\n`);
else if(e > c && e > d) console.log(`O número ${e} é o maior.\n`);
else console.log(`Os números são iguais\n`);

// if(num1 > 0) else console.log(`Os números são iguais\n`);
if(num1 > 0) console.log(`O número ${num1} é positivo.\n`);
else if(num1 < 0) console.log(`O número ${num1} é negativo.\n`);
else console.log(`${num1}\n`);