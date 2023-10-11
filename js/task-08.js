const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit); 

const formSubmit = {};

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value
    const password = form.elements.password.value;

    if (email === "" || password == "") {
        return alert("Please fiil the fields")
    }

    formSubmit.email = email;
    formSubmit.password = password;
    
    console.log(formSubmit);
form.reset();
}