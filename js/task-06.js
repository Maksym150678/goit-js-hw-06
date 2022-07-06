const textInput = document.querySelector('#validation-input');
const textLength = document.querySelector('[data-length="6]');

textInput.addEventListener("blur", () => {
    const inputValue = event.currentTarget.value;
    console.log(textLength);

    if (inputValue.length === Number(textInput.dataset.length)) {
textInput.classList.add("valid");
textInput.classList.remove("invalid");
    } 
    else {
        textInput.classList.add("invalid");  
        textInput.classList.remove("valid");
    }
});

