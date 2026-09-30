const page1Login = document.querySelector("#page1-login")
const loginInput = document.querySelector("#login-input")
const loginButton = document.querySelector("#login-button")

const page2Login = document.querySelector("#page2-login")
const loginInput2 = document.querySelector("#login-input2")
const loginButton2 = document.querySelector("#login-button2")


const hackerBackground = document.querySelector("#hacker-background")
const page1 = document.querySelector("#page1")
const page1Text = document.querySelector("#page1-text")
const page1Input = document.querySelector("#page1-input")
const page1Button = document.querySelector("#page1-button")
const page1CorrectCode = document.querySelector(".page1-correct-code")


if (loginButton) {
    loginButton.addEventListener("click", () => {
        if (loginInput.value === "thomaskihlgren60") {
            page1.style = "display: flex;"
            hackerBackground.style = "display: block;"
            page1Login.style="display: none;"
        }
        else {
            loginInput.value = "Incorrect"
            loginInput.style = "color: red;"
            setTimeout(function () {
                loginInput.value = ""
                loginInput.style = "color: black;"
            }, 1500);
        }
    })
}


if (loginButton2) {
    loginButton2.addEventListener("click", () => {
        console.log("yo")
        if (loginInput2.value === "72123") {
            page2.style = "display: flex;"
            page2Login.style = "display: none;"
        }
        else {
            loginInput2.value = "Incorrect"
            loginInput2.style = "color: red;"
            setTimeout(function () {
                loginInput2.value = ""
                loginInput2.style = "color: black;"
            }, 1500);
        }
    })
}



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