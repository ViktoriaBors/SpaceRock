//Import dom.js - buttons, checkboxes, divs where data loads
import { dom, input } from "./dom.js"
// OOP
import { User } from "./oop.js"
// remove white spaces
import { removeWhiteSpaces } from "./renderDetails.js"

dom.registerBtn.addEventListener("click", () => {
    if (removeWhiteSpaces(input.firstName.value) == "" ||
        removeWhiteSpaces(input.lastName.value) == "" ||
        removeWhiteSpaces(input.emailReg.value) == "" ||
        removeWhiteSpaces(input.passwordReg.value) == "" ||
        !input.emailReg.value.match("@")
    ) {
        let requiredFiled = input.registerForm.querySelector("#requiredField")
        requiredFiled.classList.add("font-semibold")
        return
    }

    let newUser = new User(
        removeWhiteSpaces(input.firstName.value),
        removeWhiteSpaces(input.lastName.value),
        removeWhiteSpaces(input.emailReg.value),
        removeWhiteSpaces(input.passwordReg.value)
    )
    fetch(`http://localhost:8080/user/register`, {
        method: `Post`,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newUser)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("error")
            }
            return res.text()
        })
        .then(data => {
            swal({
                title: "Success",
                text: "You are registered",
                icon: "success",
            })
            setTimeout(() => {
                window.open("http://localhost:8080/dashboard", "_self")
            }, 2000)
        })
        .catch(error => {
            console.log(error)
            swal({
                title: "Error",
                text: "Already existing user",
                icon: "error",
            })
        });

})

dom.signBtn.addEventListener("click", function (event) {
    let emailValue = input.emailSign.value;
    let passwordValue = input.passwordSign.value;
    let login = {
        email: emailValue,
        password: passwordValue
    }
    if (emailValue == "" || passwordValue == "") {
        event.target.nextElementSibling.classList.add("font-semibold")
        return
    }

    fetch('http://localhost:8080/user/login', {
        method: `Post`,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(login)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Login Error")
            } else response.text()
        }).then(data => {
            swal({
                title: "Success",
                text: "Login is successful",
                icon: "success",
            })
            setTimeout(() => {
                window.open("http://localhost:8080/dashboard", "_self")
            }, 2000)
        })
        .catch(error => {
            console.log(error)
            swal({
                title: "Error",
                text: "Access Denied",
                icon: "error",
            });
        })
})

