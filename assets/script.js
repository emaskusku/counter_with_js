  function createThings (tag, textInside, ...classes) {
    let elem = document.createElement(tag)
    elem.innerHTML = textInside

    for(const el of classes){
      elem.classList.add(el)
    }
    return elem
  }

  let div = createThings('div', '', 'container')
  document.body.appendChild(div)

  let minus = createThings('button','-', 'butt')
  div.appendChild(minus)

  let counter = createThings('p', '0', 'number')
  div.appendChild(counter)

  let plus = createThings('button','+', 'butt')
  div.appendChild(plus)

  let reset = createThings('button','reset', 'butt', 'res')
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

  document.body.addEventListener('click', function (event) {
    if(event.target === plus){
      addOne()
    } else if (event.target === minus){
      subOne()
    } else if (event.target === reset){
      toZero()
    }

  })
