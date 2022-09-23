
  let div = document.createElement("div")
  div.classList.add("container")
  document.body.appendChild(div)

  let minus = document.createElement('button')
  minus.innerHTML = '-'
  minus.classList.add("butt")
  div.appendChild(minus)

  let counter = document.createElement('p')
  counter.innerHTML = '0'
  counter.classList.add("number")
  div.appendChild(counter)

  let plus = document.createElement('button')
  plus.innerHTML = '+'
  plus.classList.add("butt")
  div.appendChild(plus)

  let reset = document.createElement('button')
  reset.innerHTML = 'reset'
  reset.classList.add("butt")
  reset.classList.add("res")
  document.body.appendChild(reset)

  function addOne () {
    let n = Number(counter.textContent)
    n++
    counter.innerHTML = n
  }

  function subOne () {
    let n = Number(counter.textContent)
    if(n == 0) return
    n--
    counter.innerHTML = n
  }

  function toZero(){
    counter.innerHTML = 0
  }

  minus.addEventListener('click', subOne)
  plus.addEventListener('click', addOne)
  reset.addEventListener('click', toZero)
