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
    // Create meangirls-Number
    //let meanGirlsParagraphs = document.createElement('div')


    let mgNumber = document.getElementById('meangirls-number')
    let text = mgNumber.value

    mgNumber.value = ''
    mgNumber.focus()
    let numTimes = Number(text)

      if (!numTimes) {
        alert("Enter a number and ONLY a number. God Karen you're so stupid")
      }

      // let newParagraph = document.querySelector('.newParagraph-quotes')
      let row = document.querySelector('.mean-girls-container')
      let meanGirlsParagraphs = document.querySelector('#meangirls-paragraph')

      console.log(meanGirlsParagraphs)
      if(meanGirlsParagraphs) {
        meanGirlsParagraphs.innerHTML = ''
      }

    for (var i = 0; i < numTimes; i++) {
        // Adding new Quotes to the page
      newParagraph = document.createElement('div')
      newParagraph.className = "quote"
      newParagraph.innerHTML = pullQuotes()

      meanGirlsParagraphs.append(newParagraph)
    }
    row.append(meanGirlsParagraphs)
  })

// loop over the quote divs and remove them one by one.
