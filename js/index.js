// Menu bienvenida
const nombre = localStorage.getItem('name');
const nameUser = document.getElementById('btnPerfil');

// Usuario debe puede ser null, redirecciona a login
const autentication = () => {
  if (nombre == null) {
    setTimeout(function () {
      window.location.href = "login.html";
    }, 1)
  } else {
    nameUser.innerText = `Hola! Bienvenido, ${nombre}.`;
  }
}
autentication();

//Declarar estructura JSON para definir datos iniciales para consumir por el simular
let proyectos = [
  // {
  //   "id": "7164",
  //   "name": "Mangonails.cl",
  //   "date": "27-10-2021",
  //   "tasks": [{
  //       "id": "876",
  //       "name": "Definir HTML",
  //       "priority": "Baja",
  //       "state": "true"
  //     },
  //     {
  //       "id": "673",
  //       "name": "Definir CSS",
  //       "priority": "Media",
  //       "state": "false"
  //     },
  //     {
  //       "id": "754",
  //       "name": "Definir JS",
  //       "priority": "Baja",
  //       "state": "false"
  //     },
  //     {
  //       "id": "363",
  //       "name": "Insertar galería",
  //       "priority": "Media",
  //       "state": "false"
  //     },
  //     {
  //       "id": "830",
  //       "name": "Hacer formulario",
  //       "priority": "Media",
  //       "state": "false"
  //     },
  //     {
  //       "id": "807",
  //       "name": "Subir repo",
  //       "priority": "Media",
  //       "state": "false"
  //     }
  //   ]
  // },
  // {
  //   "id": "7705",
  //   "name": "AdminTask",
  //   "date": "28-10-2021",
  //   "tasks": [{
  //       "id": "327",
  //       "name": "Definir HTML",
  //       "priority": "Alta",
  //       "state": "false"
  //     },
  //     {
  //       "id": "970",
  //       "name": "Definir CSS",
  //       "priority": "Media",
  //       "state": "false"
  //     }
  //   ]
  // },
  // {
  //   "id": "9447",
  //   "name": "Hopet-Shop.cl",
  //   "date": "29-10-2021",
  //   "tasks": [{
  //     "id": "982",
  //     "name": "Agregar productos",
  //     "priority": "Alta",
  //     "state": "false"
  //   }]
  // },
  // {
  //   "id": "6396",
  //   "name": "Portfolio Luis Julio",
  //   "date": "01-11-2021",
  //   "tasks": [{
  //     "id": "989",
  //     "name": "Estilo del portfolio",
  //     "priority": "Alta",
  //     "state": "false"
  //   }]
  // }
]
let proyectosLS = JSON.parse(localStorage.getItem('projects'));
// Prioridades
const priorityColor = () => {
  // Colorear prioridades
  const badge = document.getElementsByClassName('badge');
  for (const priority of badge) {
    if (priority.textContent == 'Alta') {
      priority.classList.add('bg-danger')
    }
    if (priority.textContent == 'Media') {
      priority.classList.add('bg-warning')
    }
    if (priority.textContent == 'Baja') {
      priority.classList.add('bg-success')
    }
  }
}
// Marcar tarea como realizada
const taskDone = (idTask) => {
  const check = document.getElementById(`done-${idTask}`);
  const idProject = check.getAttribute('data-project');
  const projectIndex = proyectos.findIndex(proyecto => proyecto.id == idProject);
  const taskIndex = proyectos[projectIndex].tasks.findIndex(task => task.id == idTask);
  proyectos[projectIndex].tasks[taskIndex].state = !proyectos[projectIndex].tasks[taskIndex].state;
  if (check.value == "false") {
    check.value = "true"
    check.classList.add('bg-success');
  } else {
    check.value = "false"
    check.classList.remove('bg-success');
  }
  localStorage.setItem('projects', JSON.stringify(proyectos));
}

// Para mostrar los proyectos guardados
const mostrarProyectosYTareas = (array) => {
  const tableProjects = document.getElementById('tableProjects')
  const tableTasks = document.getElementById('tableTasks')
  tableProjects.innerHTML = '';
  tableTasks.innerHTML = '';
  array.forEach(proyecto => {
    let idProject = proyecto.id;
    let project = proyecto.name;
    let date = proyecto.date;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idProject}</td>
                    <td class="text-center p-0" title=${project}">${project}</td>
                    <td class="text-center p-0">${date}</td>
                    <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger p-1" onclick="eliminarProject(${idProject})" id="eliminar-${idProject}" value="${idProject}"></button></td>`;
    tableProjects.appendChild(tr);
    proyecto['tasks'].forEach(tasks => {
      let idTask = tasks.id;
      let task = tasks.name;
      let priority = tasks.priority;
      let state = false;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="text-center p-0" scope="row">${idTask}</td>
                      <td class="text-center p-0" title="${task}">${task}</td>
                      <td class="text-center p-0" value="${priority}"><span class="badge rounded-pill text-center">${priority}</span></td>
                      <td class="text-center p-0" id="${idTask}">
                      <button class="btn far fa-check-circle p-1" value="${state}" data-project="${idProject}" id="done-${idTask}" onclick="taskDone(${idTask})"></button>
                      <button class="btn fas fa-trash-alt text-danger p-1" onclick="eliminarTask(${idTask})" id="eliminar-${idTask}" data-project="${idProject}" value="${idTask}"></button>
                      </td>`;
      tableTasks.appendChild(tr);
    });
    priorityColor();
  })
}
mostrarProyectosYTareas(proyectos);
// Se cargan los proyectos guardados en el localStorage
mostrarProyectosYTareas(proyectosLS);
// Se pushean los proyectos en el localStorage en el array principal de proyectos
proyectos.push(...proyectosLS);
// Proyectos
class Project {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.tasks = []
  }
}
const agregarProyecto = () => {
  const inputProject = document.getElementById('proyecto');
  const inputDate = document.getElementById('fecha');
  const idProject = Date.now().toString().slice(9, 14);
  let project = inputProject.value;
  let date = inputDate.value;
  if (project !== '' && date !== '' && project !== ' ' && date !== ' ') {
    const tableProjects = document.getElementById('tableProjects')
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idProject}</td>
                    <td class="text-center p-0" title="${project}">${project}</td>
                    <td class="text-center p-0">${date}</td>
                    <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger p-1" onclick="eliminarProject(${idProject})" id="eliminar-${idProject}" value="${idProject}"></button></td>`;
    tableProjects.appendChild(tr);
    let proyecto = new Project(idProject, project, date);
    proyectos.push(proyecto);
    Toastify({
      text: "Proyecto agregado",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
  }
  cargarProyectos(proyectos);
  formProjects.reset();
  localStorage.setItem('projects', JSON.stringify(proyectos));
}
const btnP = document.getElementById('btnP');
btnP.addEventListener('click', agregarProyecto);
formProjects.addEventListener('submit', (e) => {
  e.preventDefault()
})

// Cargar proyectos en options
const listadoProyectos = document.getElementById('projects')
const cargarProyectos = (array) => {
  listadoProyectos.innerHTML = '<option id="all" selected value="all">Ver todas</option>';
  array.forEach(proyecto => {
    const option = document.createElement('option');
    option.setAttribute('id', `${proyecto.id}`);
    option.value = proyecto.id;
    option.innerHTML = proyecto.name;
    listadoProyectos.appendChild(option);
  });
}
cargarProyectos(proyectos);
cargarProyectos(proyectosLS);

// Eliminar proyectos
const eliminarProject = (projecId) => {
  const btn = document.getElementById(`eliminar-${projecId}`);
  const projectIndex = proyectos.findIndex(proyecto => proyecto.id == projecId);
  proyectos.splice(projectIndex, 1)
  btn.parentElement.parentElement.remove();
  Toastify({
    text: "Proyecto eliminado",
    className: "info",
    style: {
      background: "linear-gradient(to right, #6c757d, #212529)",
    }
  }).showToast();
  filtrar();
  cargarProyectos(proyectos);
  localStorage.setItem('projects', JSON.stringify(proyectos));
}

// Tareas
class Task {
  constructor(id, name, priority, state) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.state = false;
  }
}
const agregarTarea = () => {
  const inputTask = document.getElementById('tarea');
  const selectPriority = document.getElementById('prioridad');
  const idTask = Date.now().toString().slice(10, 14);
  let task = inputTask.value;
  let priority = selectPriority.value;
  let state = false;
  const proyecto = document.getElementById('projects')
  const idProject = proyecto.value;
  const projectIndex = proyectos.findIndex(proyecto => proyecto.id == idProject)
  if (task !== '' && priority !== '' && task !== ' ' && priority !== ' ' && idProject !== 'all') {
    const tableTasks = document.getElementById('tableTasks')
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idTask}</td>
                    <td class="text-center p-0" title="${task}">${task}</td>
                    <td class="text-center p-0" value="${priority}"><span class="badge rounded-pill text-center">${priority}</span></td>
                    <td class="text-center p-0" id="${idTask}">
                    <button class="btn far fa-check-circle p-1" value="${state}" data-project="${idProject}" id="done-${idTask}" onclick="taskDone(${idTask})"></button>
                    <button class="btn fas fa-trash-alt text-danger p-1 eliminarTask" onclick="eliminarTask(${idTask})" id="eliminar-${idTask}" data-project="${idProject}" value="${idTask}"></button>
                    </td>`;
    tableTasks.appendChild(tr);
    let tarea = new Task(idTask, task, priority, state);
    proyectos[projectIndex].tasks.push(tarea);
    Toastify({
      text: "Tarea agregada",
      className: "info",
      style: {
        background: "linear-gradient(to right, #6c757d, #212529)",
      }
    }).showToast();
  }
  formTasks.reset();
  priorityColor();
  localStorage.setItem('projects', JSON.stringify(proyectos));
}
const btnT = document.getElementById('btnT')
btnT.addEventListener('click', agregarTarea)
formTasks.addEventListener('submit', (e) => {
  e.preventDefault();
})
// Eliminar tareas
const eliminarTask = (idTask) => {
  const btn = document.getElementById(`eliminar-${idTask}`);
  idTask = btn.value;
  const idProject = btn.getAttribute('data-project');
  const projectIndex = proyectos.findIndex(proyecto => proyecto.id == idProject);
  const taskIndex = proyectos[projectIndex].tasks.findIndex(task => task.id == idTask);
  proyectos[projectIndex].tasks.splice(taskIndex, 1);
  btn.parentElement.parentElement.remove();
  Toastify({
    text: "Tarea eliminada",
    className: "info",
    style: {
      background: "linear-gradient(to right, #6c757d, #212529)",
    }
  }).showToast();
  localStorage.setItem('projects', JSON.stringify(proyectos));
}

//Filtrar tareas por proyectos
const filtrar = () => {
  let filtroProyecto = listadoProyectos.value;
  let proyectosFiltrados = [];
  if (filtroProyecto == 'all') {
    proyectosFiltrados = proyectos
  } else {
    proyectosFiltrados = proyectos.filter(el => el.id == listadoProyectos.value)
  }
  mostrarProyectosYTareas(proyectosFiltrados);
  localStorage.setItem('projects', JSON.stringify(proyectos));
}
listadoProyectos.addEventListener('change', () => {
  filtrar();
});

// Activar caracteristicas del modo oscuro
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  const body = document.getElementById('body');
  const footer = document.getElementById('footer');
  const header = document.getElementById('header');
  const tables = document.getElementsByTagName('table');
  const sections = document.getElementsByTagName('section');
  const btnPerfil = document.getElementById('btnPerfil');
  body.classList.toggle('bg-dark');
  footer.classList.toggle('bg-light');
  header.classList.toggle('bg-light');
  btnPerfil.classList.toggle('btn-dark')
  for (const table of tables) {
    table.classList.toggle('table-light');
    table.classList.toggle('table-secondary');
  }
  for (const section of sections) {
    section.classList.toggle('bg-light');
  }
  toggle.classList.toggle('active');
  if (body.classList.contains('bg-dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
})
// Persistencia del modo oscuro
if (localStorage.getItem('darkMode') == 'enabled') {
  const body = document.getElementById('body');
  const footer = document.getElementById('footer');
  const header = document.getElementById('header');
  const tables = document.getElementsByTagName('table');
  const sections = document.getElementsByTagName('section');
  const btnPerfil = document.getElementById('btnPerfil');
  body.classList.toggle('bg-dark');
  footer.classList.toggle('bg-light');
  header.classList.toggle('bg-light');
  btnPerfil.classList.toggle('btn-dark')
  for (const table of tables) {
    table.classList.toggle('table-secondary');
    table.classList.toggle('table-secondary');

  }
  for (const section of sections) {
    section.classList.toggle('bg-light');
  }

  toggle.classList.toggle('active');
}
// DatePicker
$(function () {
  $("#fecha").datepicker({
    minDate: '1d',
    maxDate: '90d',
    beforeShowDay: $.datepicker.noWeekends,
    dateFormat: "dd-mm-yy",
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    firstDay: 1,
  });
});