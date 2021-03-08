function validForm() {
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    if (name.value === "") {
        setErrorFor(name);
        validPass(password);
    }else if (name.value != ""){
        setSuccessFor(name)
        setErrorFor(password)
    }
}
function setErrorFor(input) {
    input.classList.add("error")
}

function setSuccessFor(input) {
    input.classList.add("success")
}

function validPass(pass) {
    if (pass.value.length <= 6 || pass.value === "") {
        setErrorFor(pass)
    } else setSuccessFor(pass)
}