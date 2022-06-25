const palavraX1 = document.getElementById('palavra');
const letrasErradasX1 = document.getElementById('letras-erradas');
const reiniciarBtn = document.getElementById('restart');
const popup = document.getElementById('popup-container');
const aviso = document.getElementById('aviso-container');
const mensagemFinal = document.getElementById('mensagem-final');
const parteDaFigura = document.querySelectorAll(".parte-da-figura");
const infoResposta = document.querySelector('.info-resposta');
const palavraSecreta = document.querySelector('.palavra-secreta')

const palavras = ['algoritmo', 'tecnologia', 'computador', 'post', 'online', 'site', 'google', 'sucesso', 'disciplina', 'desafio', 'oracle', 'alura' , 'programaone', 'spam'];

let selecionarPalavra = palavras[Math.floor(Math.random() * palavras.length)];
let respostaMostrar = selecionarPalavra;

const letrasCorretas = [];
const letrasErradas = [];

// Mostrar palavra secreta

function mostrarPalavra(){
    palavraX1.innerHTML = `
    ${selecionarPalavra
    .split('')
    .map(
        letra =>`
        <span class="letra">
        ${letrasCorretas.includes(letra) ? letra : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerPalavra = palavraX1.innerText.replace(/\n/g, '');

    if(innerPalavra === selecionarPalavra) {
        palavraSecreta.innerHTML = '';
        mensagemFinal.innerText = 'Você Venceu!';
        popup.style.display = 'flex';
    }
}


// Atualizar as letras erradas

function atualizarLetrasErradasX1() {
    letrasErradasX1.innerHTML = `
    ${letrasErradas.length > 0 ? '<p>Letras erradas</p>' : ''}
    ${letrasErradas.map(letras => `<span>${letras}</span>`)}
    `;

// Mostrar as partes do boneco

    parteDaFigura.forEach((partes, index) => {
        const alteranativaErrada = letrasErradas.length;

        if(index < alteranativaErrada) {
            partes.style.display = 'block'
        
        } else {
            partes.style.display = 'none';
        }

    });

    if(letrasErradas.length === parteDaFigura.length) {
        show(infoResposta, '1')
        palavraSecreta.innerHTML = `${respostaMostrar}`
        mensagemFinal.innerText = 'Você Perdeu!';
        popup.style.display = 'flex';
    }
}

function mostrarAviso() {
    aviso.classList.add('show');

    setTimeout(() => {
        aviso.classList.remove('show');
    
    }, 2000);
}

// Reconhecimento de letras


function lestGo() {
        window.addEventListener('keydown', e => {
            if(e.keyCode >= 65 && e.keyCode <= 90) {
                const letra = e.key;

                if(selecionarPalavra.includes(letra)){
                    if(!letrasCorretas.includes(letra)) {
                        letrasCorretas.push(letra);

                        mostrarPalavra();
                    } else {
                        mostrarAviso();
                    }
                } else {
                    if(!letrasErradas.includes(letra)) {
                        letrasErradas.push(letra);

                        atualizarLetrasErradasX1();    
                    } else {
                        mostrarAviso(); 
                    }
                }
            }

        }); 
    }    

// Reiniciar o Jogo

reiniciarBtn.addEventListener('click', () => {

    letrasCorretas.splice(0);
    letrasErradas.splice(0);

    selecionarPalavra = palavras[Math.floor(Math.random() * palavras.length)];

    mostrarPalavra();
    atualizarLetrasErradasX1();
    show(infoResposta, '0');
    respostaMostrar = selecionarPalavra;
    popup.style.display = 'none';
});

   function suspender() {
   window.location.reload()
 }
  

mostrarPalavra();