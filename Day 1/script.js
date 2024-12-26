alert("This is an alert !")
const heading1 = document.getElementById("heading1")
heading1.textContent = "This is a dynamic Heading1"
heading1.style.color = "purple"

const button = document.getElementById("btn")
button.onclick = function () {
    alert("You Clicked Me !")
}