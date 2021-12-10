// const regex = /bob+/g
let textString = document.getElementById('textStringBox')
let answerBox = document.getElementById("answerBox")
// let search = document.getElementById("searchBox")
let numLen = document.getElementById("selectNum")

const regex = document.getElementById("regexBTN")

regex.addEventListener('click', searchThru)

// this looks thru the text in the input field
function searchThru() {
    let i = numLen.value
    console.log('i is equal to ' + i)
        // I don't know how to write REG EXPs with variables yet so this is set up to change the REG EXP depending on the value
        if (i === 2) {
            let retwo = /\b\w{2,2}\b/
            answerBox.textContent = retwo.exec(textString.value)
            console.log(answerBox.textContent)
        }
        else if (i === 3) {
            let rethree = /\b\w{3,3}\b/
            answerBox.textContent = rethree.exec(textString.value)
            console.log(answerBox.textContent)
        }
        else if (i === 4) {
            let refour = /\b\w{4,4}\b/
            answerBox.textContent = refour.exec(textString.value)
            console.log(answerBox.textContent)
        }
        else if (numLen.value === 5) {
            let refive = /\b\w{5,5}\b/
            answerBox.textContent = refive.exec(textString.value)
            console.log(answerBox.textContent)
        }
        else {
            console.log('button clicked')
            console.log('length is ' + numLen.value)
        }
    }
// }

// this selects words of a specif length
// \b\w{5,5}\b


// let re=/\w{3}/