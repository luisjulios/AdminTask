const nameLS = localStorage.getItem('name');
const emailLS = localStorage.getItem('email');
const passwordLS = localStorage.getItem('password');

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

inputName.value = nameLS;
inputEmail.value = emailLS;
inputPassword.value = "";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const btnUpdateProfile = document.getElementById('updateProfile');
const validarUpdate = (name, email, password) => { 
  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  if (name !== '' && name !== ' ') {
    inputName.classList.add('exito');
    isNameValid = true;
  } else {
    inputName.classList.add('error');
  }
  if (emailRegex.test(email)) {
    inputEmail.classList.add('exito');
    isEmailValid = true;
  } else {
    inputEmail.classList.add('error');
  }
  if (passwordRegex.test(password)) {
    inputPassword.classList.add('exito');
    isPasswordValid = true;
  } else {
    inputPassword.classList.add('error');
  }
  return (isNameValid && isEmailValid && isPasswordValid) ? true : false;
}
const updateUser = () => {
  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;
    if (validarUpdate(name, email, password)) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    Toastify({
      text: "Perfil actualizado",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
    setTimeout(() => {
      inputName.classList.remove('exito');
      inputEmail.classList.remove('exito');
      inputPassword.classList.remove('exito');
    }, 2000);
  } else {
    Toastify({
      text: "Datos incorrectos",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
    setTimeout(() => {
      inputName.classList.remove('error');
      inputEmail.classList.remove('error');
      inputPassword.classList.remove('error');
    }, 2000);
  }
}

btnUpdateProfile.addEventListener('click', updateUser);

const formProfile = document.getElementById('formProfile');
formProfile.addEventListener('submit', (e)=>{
  e.preventDefault();
})