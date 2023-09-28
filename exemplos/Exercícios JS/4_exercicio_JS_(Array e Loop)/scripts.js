document.write('<h2 style="color: blue;">Resolução</h2><br>');

let modelsSecrets = [
    "Adriana Lima", "Alessandra Ambrósio", "Izabel Goulart", "Candice Swanepoel", "Karlie Kloss"
];

// Cache do tamanho array
let tamanho = modelsSecrets.length;

for (let i = 0; i < tamanho; i++) {
    document.write(`As melhores VS [${i}] é: <strong>${modelsSecrets[i]}</strong><br>`);
}




