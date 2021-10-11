const userSaved = localStorage.getItem('user');
const passwordSaved = localStorage.getItem('password');


const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');
const login = document.getElementById('login');
const iniciarSesion = () => {
  const user = inputUser.value;
  const password = inputPassword.value;
  if (user === userSaved && password === passwordSaved) {
    const sectionLogin = document.getElementById('sectionLogin');
    const success = document.createElement('div');
          success.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert"><i class="fas fa-check-circle m-2"></i><span> Iniciando sesión. </span></div>`;
    sectionLogin.appendChild(success);
    setTimeout(() => {
      success.remove();
    }, 2000);
    setTimeout(function () {
      window.location.href = "index.html";
    }, 2000)
  }
  if (user !== userSaved || password !== passwordSaved) {
    const sectionLogin = document.getElementById('sectionLogin');
    const error = document.createElement('div');
          error.innerHTML = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-times m-2"></i> <span> Usuario/contraseña inválida. </span> </div>`;
    sectionLogin.appendChild(error);
    setTimeout(() => {
      error.remove();
    }, 2000);
  }
}
login.addEventListener('click', iniciarSesion);
formLogin.addEventListener('submit', (e) => {
e.preventDefault();
})
