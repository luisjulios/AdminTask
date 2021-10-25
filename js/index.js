// Menu bienvenida
const nombre = localStorage.getItem('name');
const nameUser = document.getElementById('btnPerfil');
      nameUser.innerText =`Hola! Bienvenido, ${nombre}.`;

//Declarar estructura JSON para definir datos iniciales para consumir por el simular
let proyectos = [
{
    "id": "1308",
    "name": "Mangonails.cl",
    "date": "2021-10-31",
    "tasks": [
        {
            "id": "5",
            "name": "Definir HTML",
            "priority": "Alta",
            "state": "false"
        },
        {
            "id": "6",
            "name": "Definir CSS",
            "priority": "Media",
            "state": "false"
        },
        {
            "id": "7",
            "name": "Definir JS",
            "priority": "Baja",
            "state": "false"
        },
        {
            "id": "8",
            "name": "Responsive",
            "priority": "Media",
            "state": "false"
        }
    ]
},
{
  "id": "4581",
  "name": "AdminTask",
  "date": "2021-11-01",
  "tasks": [
      {
          "id": "1",
          "name": "Definir HTML",
          "priority": "Alta"
      },
      {
          "id": "2",
          "name": "Definir CSS",
          "priority": "Media"
      },
      {
          "id": "3",
          "name": "Definir JS",
          "priority": "Baja"
      },
      {
          "id": "4",
          "name": "Desarrollar galería",
          "priority": "Media"
      }
  ]
},
{
  "id": "2419",
  "name": "Hope PetShop",
  "date": "2021-10-31",
  "tasks": [
      {
          "id": "12",
          "name": "Definir HTML",
          "priority": "Alta"
      },
      {
          "id": "56",
          "name": "Definir CSS",
          "priority": "Media"
      },
      {
          "id": "83",
          "name": "Definir JS",
          "priority": "Baja"
      },
      {
          "id": "54",
          "name": "Agregar productos",
          "priority": "Media"
      }
  ]
}
];

// Prioridades y tarea realizada
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
const taskDone = () => {
  const checks = document.getElementsByClassName('fa-check-circle')
  for (const check of checks) {
    check.addEventListener('click', () => {
      if (check.classList.contains('text-success')) {
        check.classList.remove('text-success')
      } else {
        check.classList.add('text-success')
      }
    })
  }
}

// Eliminar proyectos/tareas
const eliminarProject = (projecId)=> {
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
}

const eliminarTask = (idTask)=> {
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
}
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
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idProject}</th>
                      <td class="text-center p-0" title=${project}">${project}</td>
                      <td class="text-center p-0">${date}</td>
                      <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger p-1 eliminarProject" onclick="eliminarProject(${idProject})"  id="eliminar-${idProject}" value="${idProject}"></button></td>`;
    tableProjects.appendChild(tr);
    proyecto['tasks'].forEach(tasks => {
    let idTask = tasks.id;
    let task = tasks.name;
    let priority = tasks.priority;
    let state = tasks.state;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idTask}</th>
                      <td class="text-center p-0" title="${task}">${task}</td>
                      <td class="text-center p-0" value="${priority}"><span class="badge rounded-pill text-center">${priority}</span></td>
                      <td class="text-center p-0"><button class="btn far fa-check-circle p-1"  value="${state}"></button><button class="btn fas fa-trash-alt text-danger p-1 eliminarTask" onclick="eliminarTask(${idTask})" id="eliminar-${idTask}" data-project="${idProject}" value="${idTask}"></button></td>`;
    tableTasks.appendChild(tr);
  });
  priorityColor();
  })
  taskDone();
}
mostrarProyectosYTareas(proyectos);

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
  idProject = Date.now().toString().slice(9, 14);
  let project = inputProject.value;
  let date = inputDate.value;
  if (project !== '' && date !== '' && project !== ' ' && date !== ' ') {
    const tableProjects = document.getElementById('tableProjects')
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idProject}</th>
                      <td class="text-center p-0" title="${project}">${project}</td>
                      <td class="text-center p-0">${date}</td>
                      <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger p-1 eliminarProject" onclick="eliminarProject(${idProject})"  id="eliminar-${idProject}" value="${idProject}"></button></td>`;
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
  formProjects.reset();
}
const btnP = document.getElementById('btnP');
btnP.addEventListener('click', agregarProyecto);
formProjects.addEventListener('submit', (e)=>{
  e.preventDefault()
})

// Iterar listado de proyectos agregados para seleccionarlo al momento de agregarle tareas
const listadoProyectos = document.getElementById('projects')
btnP.addEventListener('click', () => {
  listadoProyectos.innerHTML = '<option id="all" selected value="all">Ver todas</option>';
  proyectos.forEach(proyecto => {
    const option = document.createElement('option');
    option.setAttribute('id', `${proyecto.id}`);
    option.value = proyecto.id;
    option.innerHTML = proyecto.name;
    listadoProyectos.appendChild(option);
    });
})

// Tareas
class Task {
  constructor(id, name, priority, state) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.state = state;
  }
}
const agregarTarea = () => {
  const inputTask = document.getElementById('tarea');
  const selectPriority= document.getElementById('prioridad');
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
    tr.innerHTML = `<td class="text-center p-0" scope="row">${idTask}</th>
                      <td class="text-center p-0" title="${task}">${task}</td>
                      <td class="text-center p-0" value="${priority}"><span class="badge rounded-pill text-center">${priority}</span></td>
                      <td class="text-center p-0"><button class="btn far fa-check-circle p-1"  value="${state}"></button><button class="btn fas fa-trash-alt text-danger p-1 eliminarTask" onclick="eliminarTask(${idTask})" id="eliminar-${idTask}" data-project="${idProject}" value="${idTask}"></button></td>`;
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
  taskDone();
}
const btnT = document.getElementById('btnT')
btnT.addEventListener('click', agregarTarea)
formTasks.addEventListener('submit', (e)=>{
  e.preventDefault();
})

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
}
listadoProyectos.addEventListener('change', () => {
  filtrar();
});

// Activar caracteristicas del modo oscuro
const toggle = document.getElementById('toggle');
const btnToggle = toggle.addEventListener('click', () => {
  const body = document.getElementById('body');
  const footer = document.getElementById('footer');
  const header = document.getElementById('header');
  const tables = document.getElementsByTagName('table');
  const sections = document.getElementsByTagName('section');
  const btnPerfil = document.getElementById('btnPerfil');
  const checks = document.getElementsByClassName('fa-check-circle')
  body.classList.toggle('bg-secondary');
  body.classList.toggle('bg-dark');
  footer.classList.toggle('bg-light');
  footer.classList.toggle('bg-secondary');
  header.classList.toggle('bg-light');
  header.classList.toggle('bg-secondary');
  btnPerfil.classList.toggle('btn-dark')
  for (const table of tables) {
    table.classList.toggle('table-dark');
  }
  for (const section of sections) {
    section.classList.toggle('bg-light');
    section.classList.toggle('bg-secondary');
  }
  for (const check of checks) {
    check.classList.toggle('text-light');
  }
})

// DatePicker
$(function(){
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