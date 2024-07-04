var lista = []


function sortear() {
  var h1 = document.getElementById('sorteado')
  var historico = document.getElementById('historico')
  
  let numeroRandom = Math.floor(Math.random() * 63) + 1
  
  while (true) {

    if (lista.includes(numeroRandom)) {

      numeroRandom = Math.floor(Math.random() * 63) + 1
        
    } else {

      lista.push(numeroRandom)
      break
      
    }
    
  }
  
  h1.innerHTML = numeroRandom

  console.log(lista)

  if (lista.length == 1) {

    historico.innerHTML += `${lista[lista.length - 1]}`
    
  } else {

    historico.innerHTML += ` - ${lista[lista.length - 1]}`

  }

}

let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})