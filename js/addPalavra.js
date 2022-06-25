function addNovaPalavra() {
    const regexp = /[^a-zA-Z]/g
  
    let isValidText = false
    let textUser = textUserData.value
    cancel.innerHTML = ''
    success.innerHTML = ''
  
    if (regexp.test(textUser) === false) isValidText = true
    
    if (textUser != '' && isValidText === true && textUser.length > 3 && textUser.length <= 8) {
      palavras.push(textUser)
      success.innerHTML = 'Palavra adicionada'
      textUserData.value = ''
      
      setTimeout(() => {
        success.innerHTML = ''
      }, 4000)
    } else {
      cancel.innerHTML = 'Palavra invalida'
  
      setTimeout(() => {
        cancel.innerHTML = ''
      }, 4000)
    }
    console.log(palavras);
}
