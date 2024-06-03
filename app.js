// create dynamic field
const addBtn = document.querySelector(".add")
const inputGroup = document.querySelector(".fieldGroup")

addBtn.addEventListener("click", function(){
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.placeholder = "enter your name"

    const email = document.createElement("input")
    email.type = "email"
    email.placeholder = "enter your email"

    const btnUp = document.createElement("a")
    btnUp.className = "upBtn"
    btnUp.innerHTML = "&uarr;"

    btnUp.addEventListener("click", function(){
        let currentElement = this.parentElement
        let prviourElement = this.parentElement.previousElementSibling

       currentElement.insertAdjacentElement("afterend", prviourElement)

    })

    const btnDown = document.createElement("a")
    btnDown.className = "downBtn"
    btnDown.innerHTML = "&darr;"

    btnDown.addEventListener("click", function(){
        let currentElement = this.parentElement
        let nextElement = this.parentElement.nextElementSibling

        currentElement.insertAdjacentElement("beforebegin", nextElement)
    })

    const btn = document.createElement("a")
    btn.className = "delete"
    btn.innerHTML = "&times;"

    btn.addEventListener("click", function(){
        this.parentElement.remove();
    })

    const flexField = document.createElement("div")
    flexField.className = "flex"

    inputGroup.appendChild(flexField)
    flexField.appendChild(nameInput)
    flexField.appendChild(email)
    flexField.appendChild(btnUp)
    flexField.appendChild(btnDown)
    flexField.appendChild(btn)
})
