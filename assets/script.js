  let div = document.createElement("div")
  div.classList.add("container")
  document.body.appendChild(div)

  function createButton (textInside) {
    let elem = document.createElement('button')
    elem.innerHTML = textInside
    elem.classList.add('butt')
    return elem
  }

  let minus = createButton('-')
  div.appendChild(minus)

  let counter = document.createElement('p')
  counter.innerHTML = '0'
  counter.classList.add("number")
  div.appendChild(counter)

  let plus = createButton('+')
  div.appendChild(plus)

  let reset = createButton('reset')
  reset.classList.add("res")
  document.body.appendChild(reset)

  let n = 0;

  function addOne () {
    n++
    counter.innerHTML = n
  }

  function subOne () {
    if(n === 0) return
    n--
    counter.innerHTML = n
  }

  function toZero(){
    n=0
    counter.innerHTML = 0
  }

  minus.addEventListener('click', subOne)
  plus.addEventListener('click', addOne)
  reset.addEventListener('click', toZero)
