// =============================================================================
// SENAI MG • PROGRAMAÇÃO FRONT-END
// AULA 18: INTRODUÇÃO AO JAVASCRIPT MODERNO (ES6+)
// ATIVIDADE PRÁTICA: VARIÁVEIS, ESCOPO DE BLOCO E TIPOS PRIMITIVOS
// =============================================================================

console.log("=== INÍCIO DA ATIVIDADE 18: JS MODERNO ===");


// -----------------------------------------------------------------------------
// DESAFIO 1: CADASTRO DO ALUNO (CONST VS LET)
// -----------------------------------------------------------------------------
// Regra da Indústria: Use const por padrão. Use let apenas quando o valor precisar mudar!
// 
// 1. Declare uma constante chamada 'nomeCompleto' com o seu nome (tipo String).
// 2. Declare uma constante chamada 'curso' com o valor "Programação para Internet" (tipo String).
// 3. Declare uma variável com let chamada 'idade' com a sua idade (tipo Number).
// 4. Declare uma variável com let chamada 'matriculaAtiva' com o valor true (tipo Boolean).

// TODO: Escreva suas declarações abaixo:

const nomeCompleto = "Paulo Felipe Aparecido Oliveira";
const curso = "Programação para Internet";
let idade = 21;
let matriculaAtiva = true;



// Teste de saída no Console:
// TODO: Descomente as linhas abaixo após declarar as variáveis acima:
// console.log("--- Desafio 1: Dados Cadastrais ---");
// console.log("Nome do Aluno:", nomeCompleto);
// console.log("Curso:", curso);
// console.log("Idade:", idade);
// console.log("Matrícula Ativa?", matriculaAtiva);

console.log("Nome do Aluno:", nomeCompleto);
console.log("Curso:", curso);
console.log("Matricula Ativa?", matriculaAtiva);


// -----------------------------------------------------------------------------
// DESAFIO 2: CÁLCULO DE MÉDIA E REATRIBUIÇÃO COM LET
// -----------------------------------------------------------------------------
// 1. Declare uma constante 'nota1' com o valor 8.5.
// 2. Declare uma constante 'nota2' com o valor 7.0.
// 3. Declare uma constante 'note3' com o valor 6.3.
// 4. Declare uma constante 'nota4' com o valor 7.9.
// 5. Declare uma variável com let chamada 'media' que calcula a média.
// 6. Imprima a média no console.
// 7. Simule que o professor deu 0.5 ponto extra adicionando esse valor a média

// 8. Imprima a nova média no console.
//
// TODO: Escreva o código do cálculo abaixo:

const nota1 = 8.5;
const nota2 = 7.0;
const nota3 = 6.3;
const nota4 = 7.9;

let media = nota1 + nota2 + nota3 + nota4 / 4;

console.log(media)

let novaMedia = media + 0.5;

console.log("Nota atualizada:", media)





// -----------------------------------------------------------------------------
// DESAFIO 3: EXPERIMENTO DE ESCOPO DE BLOCO { }
// -----------------------------------------------------------------------------
// Variáveis criadas com let e const possuem escopo de bloco!
//
// 1. Observe o bloco abaixo. Uma variável 'descontoEspecial' foi criada dentro dele.
// 2. Tente acessar a variável 'descontoEspecial' FORA do bloco if (na linha indicada).
// 3. Abra o Console do navegador (F12) e observe o erro que o JavaScript emite!
// 4. Qual é o nome do erro que apareceu no Console? (Anote em um comentário).

if (true) {
  const descontoEspecial = 0.20; // 20% de desconto
  console.log("Dentro do bloco - Desconto:", descontoEspecial); // Funciona!
}

// TODO: Tente imprimir a variável 'descontoEspecial' aqui fora descomentando a linha abaixo:
// console.log("Fora do bloco - Desconto:", descontoEspecial);

//console.log("Fora do bloco - Desconto:", descontoEspecial);

// Responda aqui: Qual erro apareceu no console?
// Resposta: Desconto especial existe apenas dentro do IF, dentro do escopo local. Fora do escopo local ele não existe.



// -----------------------------------------------------------------------------
// DESAFIO 4: VERIFICAÇÃO DINÂMICA COM TYPEOF & NULL VS UNDEFINED
// -----------------------------------------------------------------------------
// 1. Declare uma variável com let chamada 'telefone' sem atribuir nenhum valor inicial.
// 2. Declare uma constante chamada 'usuarioLogado' com o valor null (ausência intencional).
// 3. Utilize o operador typeof para inspecionar no console o tipo de cada valor abaixo:
//
// TODO: Descomente e complete os console.log abaixo:

let telefone
const usuarioLogado = null 


console.log("--- Desafio 4: Inspeção com typeof ---");
console.log("Tipo de nomeCompleto:", typeof nomeCompleto);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de matriculaAtiva:", typeof matriculaAtiva);
console.log("Tipo de telefone (não inicializado):", typeof telefone);
console.log("Tipo de usuarioLogado (null):", typeof usuarioLogado);

console.log("=== FIM DA ATIVIDADE 18 ===");
