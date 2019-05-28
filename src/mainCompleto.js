
const arr = [1,3,4,5,6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

// Operações em Array

const teste = () => ({nome : 'teste'});

console.log(teste());

// Valores Padrão

function soma(a = 3, b = 6){
    return a + b;
}

console.log(soma(1));
console.log(soma());

const soma2 = (a = 3, b = 6) => a + b; // aero function

console.log(soma2(1));
console.log(soma2());

const soma3 = (a = 3, b = 6) => {
    return a + b;
}

console.log(soma3(1));
console.log(soma3());

// Desestruturação

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',
    },
};

console.log(usuario);

const { nome, idade, endereco: { cidade }} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);

// Operadores rest/spread

const usuario2 = {
    nome2: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nome2, ...resto } = usuario2;

console.log(nome2);
console.log(resto);

// REST 

const arr2 = [1,2,3,4];

const [a, b, ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);

function soma5(...params) {
    return params.reduce((total, next) => total + next );
}

console.log(soma5(1,2,3));

// SPREAD

const a1 = [1,2,3];
const a2 = [4,5,6];

const ajuncao = [ ...a1, ...a2 ];

console.log(ajuncao);

const user1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
}

const user2 = { ...user1, nome: 'Gabriel'}; // passando mesmo campo é substituído

console.log(user2);

// Template Literals

const nome22 = 'Diego';
const idade33 = 23;

//console.log('Meu nome é ' + nome22 + ' e tenho ' + idade33 + ' anos.');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Object Short Syntax

const nome4 = 'Diego';
const idade4 = 23;

const usuario3 = {
    nome, // se a variável for mesmo nome, não precisa passa-la
    idade,
    empresa: 'Rocketseat'
}

console.log(usuario3);

//"dev": "babel ./main.js -o ./bundle.js -w"

// Configurando Webpack

import { somaab, sub } from './funcoes';

console.log( "o valor da soma é " +  somaab(1,2));
console.log( "o valor da sub é " +  sub(5,3));

import somaPorArquivo from './soma';

console.log("soma por arquivo " + somaPorArquivo(1,2));

import axios from 'axios';

class Api {
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response);
    }
}

Api.getUserInfo('welitonlima');