const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');
const login = document.getElementById('login');
login.addEventListener('click', () => {
const user = inputUser.value;
const password = inputPassword.value;
if (typeof user === 'string' && password === '12345') {
  const sectionLogin = document.getElementById('sectionLogin');
  const succes = document.createElement('div');
        succes.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert"><i class="fas fa-check-circle m-2"></i><span> Iniciando sesión. </span></div>`;
  sectionLogin.append(succes);
  setTimeout(() => {
    succes.remove();
  }, 2000);
  setTimeout(function () {
    window.location.href = "index.html";
  }, 3000)
}
if (typeof user !== 'string' || password !== '12345') {
  const sectionLogin = document.getElementById('sectionLogin');
  const error = document.createElement('div');
        error.innerHTML = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-times m-2"></i> <span> Usuario/contraseña inválida. </span> </div>`;
  sectionLogin.append(error);
  setTimeout(() => {
    error.remove();
  }, 2000);
}
localStorage.setItem('user', user);
});

formLogin.addEventListener('submit', (e) => {
e.preventDefault();
})
