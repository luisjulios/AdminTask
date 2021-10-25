// // Desafío: Incorporar jQuery al proyecto
// const nameLS = localStorage.getItem('name');
// const userLS = localStorage.getItem('user');
// const passwordLS = localStorage.getItem('password');

// const nameProfile = $('#name').val(nameLS);
// const userProfile = $('#user').val(userLS);
// const passwordProfile = $('#password').val(passwordLS);
// const confirmPassword = $('#confirmPassword').val(passwordLS)
// const btnUpdateProfile = $('#updateProfile').on('click', ()=>{
//   const name = $('#name').val();
//   const user = $('#user').val();
//   const password = $('#password').val().trim();
//   const confirmPassword = $('#confirmPassword').val().trim();
//   if (name !== nameLS) {
//     localStorage.setItem('name', name);
//   }
//   if (user !== userLS) {
//     localStorage.setItem('user', user);
//   }
//   if (password === confirmPassword) {
//     localStorage.setItem('password', password);
//   }
//   if (password == '' || confirmPassword == '' || password == ' ' || confirmPassword == ' ') {
//     $('.modal-footer').append(
//       `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-times m-2"></i> <span> Contraseñas no coinciden, validar nuevamente. </span> </div>`);
//   } else {
//     $('.modal-footer').append(`<div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert"><i class="fas fa-check-circle m-2"></i><span> Datos actualizados correctamente.</span></div>`);
//   }


// })
// const formProfile = $('#formProfile').on('submit', (e)=>{
//   e.preventDefault;
// })


// // Animaciones concatenadas
// $(document).ready(()=>{
//   // Al cargar el index, desaparece los tbody, y luego aparecen poco a poco
//   $("tbody").fadeOut("slow", (e)=>{
//     $("tbody").fadeIn(3000)
//   })

//   // Flechas para ocultar los tbody luego de que la pagina está completamente cargada, puede ser una o ambas tables.
//   $("#arrowProjects").click(function (e) {
//     $("#tableProjects").fadeToggle("slow");
//   });
//   $("#arrowTasks").click(function (e) {
//     $("#tableTasks").fadeToggle("slow");
//   });
// })

// // Desafío: AJAX en tu Proyecto

// $('#search').on("click", () => {
//   const search = $('#wordInput').val().trim()
//   consultarPalabra(search)
// })
// const consultarPalabra = (query) => {
//   $.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`, (res, state)=>{
//     const word = res[0].word;
//     const origin = res[0].origin;
//     const phonetic = res[0].phonetic;
//     const pronunciation =  res[0].phonetics[0].audio;
//     $("#word").html("");
//     if (state == 'success') {
//           $("#word").append(`
//     <div class="card-header">${word}</div>
//     <div class="card-body">
//       <h5 class="card-title">${phonetic}</h5>
//       <audio controls><source src="${pronunciation}" type="audio/mp3">
//       </audio>
//       <p class="card-text">${origin}</p>
//     </div>`)
//     }

//   })
// }
