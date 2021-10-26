class Users {
  constructor(id, nombre, email, password) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password
  }
}
const users = [];
const sectionRegistro = document.getElementById('sectionRegistro');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const crearCuenta = document.getElementById('crearCuenta')
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validarRegistro = (name, email, password, confirmPassword) => {
  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isConfirmPasswordValid = false;
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
  if (passwordRegex.test(password) && passwordRegex.test(confirmPassword)) {
    inputPassword.classList.add('exito');
    inputConfirmPassword.classList.add('exito');
    isPasswordValid = true;
    isConfirmPasswordValid = true;
  } else {
    inputPassword.classList.add('error');
    inputConfirmPassword.classList.add('error');
  }
  return (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) ? true : false;
}
const registroUser = () => {
  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;
  let confirmPassword = inputConfirmPassword.value;
  id = Date.now().toString().slice(10, 14);
  if (validarRegistro(name, email, password, confirmPassword)) {
    let usuario = new Users(id, name, email, password);
    users.push(usuario);
    Toastify({
      text: "Usuario registrado",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
    setTimeout(() => {
      inputName.classList.remove('exito');
      inputEmail.classList.remove('exito');
      inputPassword.classList.remove('exito');
      inputConfirmPassword.classList.remove('exito');
      window.location.href = "login.html";
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

    }, 3000);

    formCrearCuenta.reset();
  } else {
    const error = document.createElement('div');
    error.innerHTML = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-times m-2"></i> <span> Contraseñas no coinciden, validar nuevamente. </span> </div>`;
    sectionRegistro.appendChild(error);
    setTimeout(() => {
      inputName.classList.remove('error');
      inputEmail.classList.remove('error');
      inputPassword.classList.remove('error');
      inputConfirmPassword.classList.remove('error');
      error.remove();
    }, 2000);
  }

}
crearCuenta.addEventListener('click', registroUser);
formCrearCuenta.addEventListener('submit', (e) => {
  e.preventDefault();
})