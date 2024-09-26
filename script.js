const form = document.getElementById('survey-form')
const loader = document.getElementById('loader')

form.addEventListener('submit', function (event) {
  event.preventDefault() // Impede o envio padrão do formulário
  loader.classList.remove('hidden') // Mostra a animação de carregamento

  // Simulando um processo de envio
  setTimeout(() => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    loader.classList.add('hidden') // Oculta a animação de carregamento após o "envio"
    alert('Teste lançado com sucesso!') // Exibe uma mensagem de sucesso
  }, 2000) // Simula um atraso de 2 segundos
})

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault() // Impede o comportamento padrão de submissão do formulário

  // Exibe o loader avançado
  document.querySelector('.loader-container').style.display = 'flex'

  // Simula um tempo de verificação (3 segundos)
  setTimeout(function () {
    // Oculta a animação de carregamento
    document.querySelector('.loader-container').style.display = 'none'

    // Redireciona com base na escolha do tipo de pele
    const skinType = document.getElementById('skin-type-dropdown').value

    if (!skinType) {
      alert('Por favor, selecione um tipo de pele.')
      return
    }

    switch (skinType) {
      case 'oleosa':
        window.location.href = 'oleosa.html'
        break
      case 'sensivel':
        window.location.href = 'sensivel.html'
        break
      case 'seca':
        window.location.href = 'seca.html'
        break
      case 'mista':
        window.location.href = 'mista.html'
        break
      default:
        alert('Selecione uma opção válida.')
    }
  }, 3000) // Tempo de 3 segundos
})
