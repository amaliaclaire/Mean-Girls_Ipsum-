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
    let numTimes = Number(text)

      if (!numTimes) {
        alert("Enter a number and ONLY a number. God karen you're so stupid")
      }

    for (var i = 0; i < numTimes; i++) {
      var newParagraph = document.createElement('div')
      newParagraph.innerHTML = pullQuotes()

      let row = document.querySelector('#meangirls-form')
      row.append(newParagraph)
    }
  })
