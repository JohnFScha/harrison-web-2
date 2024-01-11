const back = document.getElementById('back-btn')

if (window.innerWidth <= 900) {
  back.innerText = 'Volver a intentar'
} else if (window.innerWidth >= 900) {
  back.innerText = 'Inicio/¿Volver a intentar?'
}

back.addEventListener('click', () => {
  window.location.replace('/')
})