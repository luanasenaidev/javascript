// Exemplo 1: objeto básico
let atriz = {
    nome: 'Angelina Jolie',
    nascimento: 1975,
    filmes: 60,
    nacionalidade: 'Estados Unidos'
};


// Recuperando os valores
document.write('<h2 style="color: blue;">Usando Sintaxe de objeto básico</h2><br>');

// O JSON.stringify é uma função em JavaScript que converte um objeto JavaScript em uma representação de string no formato JSON (JavaScript Object Notation). Nesse caso, o objeto atriz está sendo convertido em uma string JSON. Isso é feito para que os dados do objeto possam ser exibidos de forma legível no documento HTML
document.write(`Todas propriedades do objeto atriz: <strong>${JSON.stringify(atriz)}</strong><br><br>`);
document.write(`Ano de nascimento da atriz: <strong>${atriz.nascimento}</strong><br>`);

// Exibir
document.write(`Minha atriz favorita é: <strong>${atriz.nome}</strong>, que nasceu em <strong>${atriz.nascimento}</strong>.<br>`);

document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

document.write('<h2 style="color: blue;">Objeto contendo array e outro objeto</h2><br>');

// Exemplo 2: Objeto contendo array e outro objeto


let celebridade = {
    nome: 'Scarlet Jonhanson',
    idade: 37,
    sexo: 'feminimo',
    filmes: ['Lost in translation', 'The Avengers', 'Marriage Story'],
    cidade: 'Nova York',
    medidas: {
        peso: 57,
        altura: 1.60,
    }
};

document.write(`Altura da celebridade: <strong>${celebridade.medidas.altura}</strong>.<br>`)

document.write(`<strong>${celebridade.nome}</strong> é uma atriz incrível,
assista o filme: <strong>${celebridade.filmes[2]}</strong>.<br>`);

document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

document.write('<h2 style="color: blue;">Array do objeto</h2><br>');


let filmesFamosos = [
    {
        título: 'Pulp Fiction',
        diretor: 'Quentin Tarantino',
    },

    {
        título: 'The GodFather',
        diretor: 'Francis Ford Coppols',
    },

    {
        título: 'Inception',
        diretor: 'Christopher Nolan',
    }
];

document.write(`Meu filme favorito é: <strong>${filmesFamosos[1].título}
</strong> dirigido por <strong>${filmesFamosos[1].diretor}
</strong>`)



