Em JS

- Como criar uma variável
R: Em JavaScript, você pode criar variáveis usando as palavras-chave var, let ou const, seguidas pelo nome da variável e, opcionalmente, um valor inicial.

Exemplo 1: Exemplo com let:
let nome = "Maria";
console.log(nome);  // Saída: Maria

nome = "João";
console.log(nome);  // Saída: João

Exemplo 2: Exemplo com const:
const idade = 25;
console.log(idade);  // Saída: 25

// idade = 30; // Isso geraria um erro, pois 'const' não permite reatribuição

Exemplo 3: Exemplo com var (não recomendado para código moderno):
var cidade = "São Paulo";
console.log(cidade);  // Saída: São Paulo


- Quais são os tipos primitivos em JS
R: // String
let nome = "Ana";

// Number
let idade = 30;

// BigInt (note o "n" no final)
let numeroGrande = 12345678901234567890n;

// Boolean
let estaLogado = true;

// Undefined
let valorIndefinido;
console.log(valorIndefinido); // undefined

// Null
let vazio = null;

// Symbol
let idUnico = Symbol("id");

- Como  usar um if
R: if (condição) {
  // Código que será executado se a condição for verdadeira
}

- Como usar uma estrutura de repetição
R:Principais estruturas de repetição:
for

while

do...while

for...of (para arrays e iteráveis)

for...in (para objetos)

Exemplo for:
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}

Exemplo while:
let i = 0;
while (i < 3) {
  console.log("Contador: " + i);
  i++;
}

Exemplo do...while:
let i = 0;
do {
  console.log("Valor: " + i);
  i++;
} while (i < 2);

Exemplo for...of:
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}

Exemplo for...in:
let pessoa = { nome: "João", idade: 25 };

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

- Como é o print no JS:
R: console.log(valor);

- Como é o input no JS:
R: let valor = prompt("Mensagem para o usuário");
