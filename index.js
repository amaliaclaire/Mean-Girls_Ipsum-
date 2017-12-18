function getRandomNum (min, max) {
  let generateNum = Math.random() * (max - min) + min

  return Math.ceil(generateNum)
}

function pullQuotes () {
  let random = getRandomNum(1, 9)
  let key = 'mgQuotes' + random
  return meanGirlsObject[key]
}

pullQuotes()


  let form = document.getElementById("meangirls-form")

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    let mgNumber = document.getElementById('meangirls-number')
    let text = mgNumber.value

    mgNumber.value = ''
    mgNumber.focus()

    var newParagraph = document.createElement('div')
    newParagraph.innerHTML = pullQuotes()
    
    let row = document.querySelector('#meangirls-form')
    row.append(newParagraph)
  })
