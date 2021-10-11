class Users {
  constructor(id, nombre, user, password) {
    this.id = id;
    this.nombre = nombre;
    this.user = user;
    this.password = password
  }
}
const users = [];
const sectionRegistro = document.getElementById('sectionRegistro');
const inputName = document.getElementById('name');
const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const crearCuenta = document.getElementById('crearCuenta')

const validarRegistro = (name, user, password, confirmPassword) => { 
  let isNameValid = false;
  let isUserValid = false;
  let isPasswordValid = false;
  let isConfirmPasswordValid = false;
  if (name !== '' && name !== ' ') {
    inputName.classList.add('exito');
    isNameValid = true;
  } else {
    inputName.classList.add('error');
  }
  if (user !== '' && user !== ' ') {
    inputUser.classList.add('exito');
    isUserValid = true;
  } else {
    inputUser.classList.add('error');
  }
  if (password == confirmPassword && password !== '' && confirmPassword !== '' && password !== ' ' && confirmPassword !== ' ') {
    inputPassword.classList.add('exito');
    inputConfirmPassword.classList.add('exito');
    isPasswordValid = true;
    isConfirmPasswordValid = true;
  } else {
    inputPassword.classList.add('error');
    inputConfirmPassword.classList.add('error');
  }
  return (isNameValid && isUserValid && isPasswordValid && isConfirmPasswordValid) ? true : false;
}
const registroUser = () => {
  let name = inputName.value;
  let user = inputUser.value;
  let password = inputPassword.value;
  let confirmPassword = inputConfirmPassword.value;
  id = Date.now().toString().slice(10, 14);
    if (validarRegistro(name, user, password, confirmPassword)) {
    let usuario = new Users(id, name, user, password);
    users.push(usuario);
    const success = document.createElement('div');
    success.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert"><i class="fas fa-check-circle m-2"></i><span> Usuario registrado exitosamente. </span></div>`;
    sectionRegistro.appendChild(success);
    setTimeout(() => {
      inputName.classList.remove('exito');
      inputUser.classList.remove('exito');
      inputPassword.classList.remove('exito');
      inputConfirmPassword.classList.remove('exito');
      success.remove();
      window.location.href = "login.html";
      localStorage.setItem('name', name);
      localStorage.setItem('user', user);
      localStorage.setItem('password', password);

    }, 3000);

    formCrearCuenta.reset();
  } else {
    const error = document.createElement('div');
    error.innerHTML = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-times m-2"></i> <span> Contraseñas no coinciden, validar nuevamente. </span> </div>`;
    sectionRegistro.appendChild(error);
    setTimeout(() => {
      inputName.classList.remove('error');
      inputUser.classList.remove('error');
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

