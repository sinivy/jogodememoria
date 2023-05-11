let order = [];
let clickedOrder = [];
let score = 0;

//0=verde
//1=vermelho
//2=amarelo
//3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// função que cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, number(i) + 1);
    }
}

//função que acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//função que checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('Selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('Selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//função para iniciar o jogo
let playGame = () => {
    alert('Bem Vindo ao Gênesis! Iniciando novo jogo...');
    score = 0;

    nextLevel();
}

//eventos de click para as cores
green.onclick = () => click (0);
red.onclick = () => click (1);
yellow.onclick = () => click (2);
blue.onclick = () => click (3);

//inicio do jogo
playGame();