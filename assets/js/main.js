const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds*1000)
  return data.toLocaleTimeString('pt-BR', {
    timeZone: 'GMT'
  })
}

function startTimer() {
  relogio.classList.remove('relogio-stop')
  timer = setInterval(() => {
    segundos++
    relogio.innerHTML = getTimeFromSeconds(segundos)
  }, 1000)
}

iniciar.addEventListener('click', (event) => {
  startTimer()
})

pausar.addEventListener('click', (event) => {
  clearInterval(timer)
  relogio.classList.add('relogio-stop')
})

zerar.addEventListener('click', (event) => {
  relogio.classList.remove('relogio-stop')
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = getTimeFromSeconds(0)
})