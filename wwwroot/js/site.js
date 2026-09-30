const page1Text = document.querySelector("#page1-text")
const page1Input = document.querySelector("#page1-input")
const page1Button = document.querySelector("#page1-button")
const page1CorrectCode = document.querySelector(".page1-correct-code")



if (page1Button) {
    page1Button.addEventListener("click", () => {
        if (page1Input.value == 1100) {
            page1CorrectCode.style = "display: flex;"
        }
        else {
            page1Text.style = "color: red;"
            page1Text.innerHTML = "Incorrect"

            setTimeout(function () {
                page1Text.style = "color: green;"
                page1Text.innerHTML = "Enter 4 digit code"
            }, 1500);
        }
    })
}