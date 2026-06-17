const validateform = (event) => {
    event.preventDefault()

    let username=event.target.username
    let password=event.target.password
    let error = document.getElementById('error')

    if(username.value === "" && password.value === "" ) {
         error.innerHTML = "please enter username & Password"
        username.style.borderColor = "red"
         password.style.borderColor = "red"
    }

    else if(username.value === "") {
        error.innerHTML = "please enter username"
        username.style.borderColor = "red"
    }

    else if(password.value === "") {
        error.innerHTML = "please enter password"
        password.style.borderColor = "red"
    }
     error.innerHTML = "Login Successfull"
    error.style.color="green"
}