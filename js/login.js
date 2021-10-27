const emailSaved = localStorage.getItem('email');
const passwordSaved = localStorage.getItem('password');


const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const login = document.getElementById('login');
const iniciarSesion = () => {
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (email === emailSaved && password === passwordSaved) {
    Toastify({
      text: "Iniciando sesión...",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000)
  }
  if (email !== emailSaved || password !== passwordSaved) {
    Toastify({
      text: "Email/Password inválida.",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
  }
}
login.addEventListener('click', iniciarSesion);
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
})
if (localStorage.getItem('darkMode') == 'enabled') {
  const body = document.getElementById('body');
  const footer = document.getElementById('footer');
  const header = document.getElementById('header');
  const sections = document.getElementsByTagName('section');
  body.classList.toggle('bg-dark');
  footer.classList.toggle('bg-light');
  header.classList.toggle('bg-light');
  for (const section of sections) {
    section.classList.toggle('bg-light');
    section.classList.toggle('bg-secondary');
  }
}
