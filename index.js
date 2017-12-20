function getRandomNum (min, max) {
  let generateNum = Math.random() * (max - min) + min

  return Math.ceil(generateNum)
}

function pullQuotes () {
  let random = getRandomNum(1, 13)
  let key = 'mgQuotes' + random
  return meanGirlsObject[key]
}

pullQuotes()

  let form = document.getElementById("meangirls-form")

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    let mgNumber = document.getElementById('meangirls-number')
    let textboxNumber = mgNumber.value

    mgNumber.value = ''
    mgNumber.focus()

    let errorMessage = document.getElementsByClassName('error-message')
    let numTimes = Number(textboxNumber)

      if (!numTimes) {
        errorMessage.classList.remove("hidden")
      }

      let row = document.querySelector('.mean-girls-container')
      let meanGirlsParagraphs = document.querySelector('#meangirls-paragraph')

      if(meanGirlsParagraphs) {
        meanGirlsParagraphs.innerHTML = ''
      }

    for (var i = 0; i < numTimes; i++) {
      newParagraph = document.createElement('div')
      newParagraph.className = "quote"
      newParagraph.innerHTML = pullQuotes()

      meanGirlsParagraphs.append(newParagraph)
    }
    row.append(meanGirlsParagraphs)
  })
