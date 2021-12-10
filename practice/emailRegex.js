let re = /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/

let textString = document.getElementById('textStringBox')

// let answerBox = document.getElementById("answerBox")

const regex = document.getElementById("regexBTN")

regex.addEventListener('click', searchThru)

function searchThru() {
    answerBox.textContent = re.test(textString.value)
    console.log(answerBox.textContent = re.exec(textString.value))
    console.log(answerBox.textContent = re.test(textString.value))
}