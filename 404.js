const back = document.getElementById('back-btn')

if (window.innerWidth <= 390) {
  back.innerText = 'Volver a intentar'
} else if (window.innerWidth >= 390) {
  back.innerText = 'Inicio/¿Volver a intentar?'
}

back.addEventListener('click', () => {
  window.history.back()
})