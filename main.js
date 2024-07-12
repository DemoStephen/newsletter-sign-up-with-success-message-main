const form = document.querySelector('[data-form]');
const success = document.querySelector('[data-success]');
const signUp = document.querySelector('[data-signUp]');
const emailInput = document.querySelector('[data-inputEmail]');
const userMail = document.querySelector('[data-mail]');
const dismiss = document.querySelector('[data-dismiss]');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    signUp.classList.add('d-none');
    userMail.innerText = `${emailInput.value}`
    success.classList.remove('d-none');
});
dismiss.addEventListener('click', (event)=>{
    event.preventDefault();
    signUp.classList.remove('d-none');
    success.classList.add('d-none');
});
