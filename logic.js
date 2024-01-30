const caixa = document.getElementById('ishare');
const botão = document.getElementById('share')

function pressionar(){
    caixa.style.display = 'block'
}

botão.addEventListener('click', pressionar)

