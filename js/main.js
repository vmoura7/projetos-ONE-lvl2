const iniciarBox = document.querySelector('#iniciar-box');
const addPalavraBox = document.querySelector('.menu-addPalavra-box');
const textUserData = document.querySelector('.text-user');
const addPalavraInfoBox = document.querySelector('.addPalavra-info-box');
const success = document.querySelector('.success');
const cancel = document.querySelector('.cancel');
const addPalavraUlEvent = document.querySelector('.addPalavra-info-box ul');
const modeBox = document.querySelector('.btn-iniciar-event')



function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function disabled(tag, onOff) {
  if (onOff === true) {
    document.querySelector(tag).setAttribute('disabled', onOff)
  }

  if (onOff === false) {
    document.querySelector(tag).disabled = onOff
  }
}

function eventAnimation(tag, opacity) {
  setTimeout(() => {
    show(tag, opacity)
  }, 200) 
}


function iniciarGame() {
  for(let i = 0; i < 2; i++) {
    document.getElementById('iniciar-box').hidden=true;
  }
  show(modeBox, 'initial')
  disabled('.btn-iniciar', true)
}

function mostra() {
  document.getElementById('iniciarJogo').style.display = 'block'
}

function addPalavra() {
  show(addPalavraBox, 'initial')
  eventAnimation(addPalavraBox, '1')
  disabled('.btn-addPalavra', true)
}

function exitAddPalavra() {
  show(addPalavraBox, '0')
  show(addPalavraBox, 'none')
  disabled('.btn-addPalavra', false)
  disabled('.btn-info-input', false)
  setTimeout(() => show(addPalavraInfoBox, 'none'), 300)  
  eventAnimation(addPalavraUlEvent, '0')
}

function infoAddPalavra() {
  addPalavraInfoBox.style.display = 'inherit'
  disabled('.btn-info-input', true)
  eventAnimation(addPalavraUlEvent, '1')
}

addPalavraInfoBox.addEventListener('dblclick', () => {
  show(addPalavraInfoBox, 'none')
  disabled('.btn-info-input', false)
  eventAnimation(addPalavraUlEvent, '0')
})


let btnSave = document.querySelector('.btn-save-Palavra');
btnSave.addEventListener('click',function(event){
event.preventDefault();  
});


