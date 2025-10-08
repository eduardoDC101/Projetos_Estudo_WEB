/* 
Variáveis:

Escopo Global (Sem Escopo de Bloco):
var - obsoleta/antiga, semelhante ao let.

Com Escopo de Bloco:
let - variável que pode mudar. Let dentro de A funciona em abcd, let criado em b, funciona em bcd...
const - variável imutável.

Tipos de Dados (dinâmicos em Js, você não diz ao criar, o motor descobre):
Tipos Primitivos:
String: texto
Number: números
Boolean: lógico
Undefined: variável criada mas sem receber valor
Null: valor intencionalmente vazio
Symbol: identificador único
BigInt: números enormes

Tudo que não é primitivo é objeto:  arrays, funções, objetos literais.

Operadores de Comparação:
5 == "5"  é true (compara só valor)
5 === "5" é false (compara valor e tipo)
5 != "5"   false
5 !== "5"  true
Operadores Lógicos: &&, || e !

Switch:
switch (opc){
   case x:
      ...
      break;
   case y:
      ...
      break;
   default:
      ...
}

O que vem do prompt() sempre é string

isNAN(123) false - é um número
*/


//1-
let nome = "Eduardo";
let idade = 20;
let cidade = "Tanabi"
let homem = true;
const cpf = '111.111.111-11'
console.log(`Olá, meu nome é ${nome}\nTenho ${idade} anos, moro em ${cidade}\nSou homem? ${homem}\nMeu CPF é: ${cpf}`);

//2-
let n1 = 131031;
let n2= 1313.12;
let soma = n1+n2;
console.log(`${n1} + ${n2} = ${soma}`)

//3-
const testeIdade = Number(prompt("Digite sua idade: "));
if(testeIdade < 0){
    console.log("Idade Inválida!");
} else if(testeIdade>=0 && testeIdade<18){
    console.log("Menor de Idade!")  
}else{
    console.log("Maior de Idade!")
}

//4-
const nota = Number(prompt("Digite uma Nota: "));
if(nota < 5){
    console.log("Reprovado!");
} else if(nota>=5 && nota<7){
    console.log("Recuperação!");
}else{
    console.log("Aprovado!");
}

//5-
const nota2 = Number(prompt("Digite sua Nota: "));
switch(true){
    case (nota2<5):
        console.log("Reprovado!");
        break;
    case (nota2>=5 && nota2<7):
        console.log("Recuperação!");
        break;
    default:
        console.log("Aprovado!");
}

//6-
let numeroAleatorio = Number(prompt("Digite um número aleatório: "));
if(numeroAleatorio<0){
    console.log("Negativo");
} else if(numeroAleatorio === 0 ){
    console.log("Zero");
} else{
    console.log("Positivo");
}

//7-
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
let num3 = Number(prompt("Digite mais um número: "));
if(num1>num2 && num1>num3){
    console.log(`${num1} é o maior!`);
} else if(num2>num3 && num2>num1){
    console.log(`${num2} é o maior!`);
} else if(num3>num2 && num3>num1){
    console.log(`${num3} é o maior!`);
} else{
    console.log("Temos um empate!");
}
