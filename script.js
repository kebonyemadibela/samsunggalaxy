function validateForm() {
    let isValid = true; 
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let surnameError = document.getElementById("surnameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError"); 

    
    nameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let namePattern = /^[A-Za-z\s]+$/;
    if (name.length < 3 || !namePattern.test(name)) {
        nameError.textContent = "Name must be at least 3 characters long and contain only letters";
        isValid = false;
    }

    if (surname.length < 3 || !namePattern.test(surname)) {
        surnameError.textContent = "Surname must be at least 3 characters long and contain only letters";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { 
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long";
        isValid = false;
    }

    return isValid;
}