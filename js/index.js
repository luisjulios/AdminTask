const name = localStorage.getItem('name');
const user = localStorage.getItem('user');
const nameUser = document.getElementById('btnPerfil');
nameUser.innerText =`Hola! Bienvenido, ${user}.`;
//Declarar estructura JSON para definir datos iniciales para consumir por el simular

let proyectos = [
  {
      "id": "1308",
      "name": "Mangonails.cl",
      "date": "2021-10-31",
      "tasks": [
          {
              "id": "896",
              "name": "Definir HTML",
              "priority": "Alta"
          },
          {
              "id": "706",
              "name": "Definir CSS",
              "priority": "Media"
          },
          {
              "id": "543",
              "name": "Definir JS",
              "priority": "Baja"
          },
          {
              "id": "792",
              "name": "Responsive",
              "priority": "Media"
          }
      ]
  },
  {
    "id": "4581",
    "name": "AdminTask",
    "date": "2021-11-01",
    "tasks": [
        {
            "id": "785",
            "name": "Definir HTML",
            "priority": "Alta"
        },
        {
            "id": "817",
            "name": "Definir CSS",
            "priority": "Media"
        },
        {
            "id": "432",
            "name": "Definir JS",
            "priority": "Baja"
        },
        {
            "id": "681",
            "name": "Desarrollar galería",
            "priority": "Media"
        }
    ]
}
];
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
proyectos.forEach(proyecto => {
  const tableProjects = document.getElementById('tableProjects')
  const tr = document.createElement('tr');
  tr.innerHTML = `<tr>
                    <td class="text-center p-0" scope="row">${proyecto.id}</th>
                    <td class="text-center title="${proyecto.name}">${proyecto.name}</td>
                    <td class="text-center p-0">${proyecto.date}</td>
                    <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger"></button></td>
                  </tr>`;
  tableProjects.appendChild(tr);
  proyecto['tasks'].forEach(task => {
  const tableTasks = document.getElementById('tableTasks')
  const tr = document.createElement('tr');
  tr.innerHTML = `<tr>
                    <td class="text-center p-0" scope="row">${task.id}</th>
                    <td class="text-center p-0" title="${task.name}">${task.name}</td>
                    <td class="text-center p-0" value="${task.priority}"><span class="badge rounded-pill text-center">${task.priority}</span></td>
                    <td class="text-center p-0"><button class="btn far fa-check-circle" onClick="taskDone()"></button><button class="btn fas fa-trash-alt text-danger"></button></td>
                  </tr>`;
  tableTasks.appendChild(tr);
});
priorityColor();
});

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
  id = Date.now().toString().slice(9, 14);
  let project = inputProject.value;
  let date = inputDate.value;
  if (project !== '' && date !== '' && project !== ' ' && date !== ' ') {
    const tableProjects = document.getElementById('tableProjects')
    const tr = document.createElement('tr');
    tr.innerHTML = `<tr>
                      <td class="text-center p-0" scope="row">${id}</th>
                      <td class="text-center p-0" title="${project}">${project}</td>
                      <td class="text-center p-0">${date}</td>
                      <td class="text-center p-0"><button class="btn fas fa-trash-alt text-danger"></button></td>
                    </tr>`;
    tableProjects.appendChild(tr);
    let proyecto = new Project(id, project, date);
    proyectos.push(proyecto);
  }
  formProjects.reset();
}
const btnP = document.getElementById('btnP');
btnP.addEventListener('click', agregarProyecto);
formProjects.addEventListener('submit', (e)=>{
  e.preventDefault()
})


// Tareas
class Task {
  constructor(id, name, priority) {
    this.id = id;
    this.name = name;
    this.priority = priority;
  }
}

const agregarTarea = () => {
  const inputTask = document.getElementById('tarea');
  const selectPriority= document.getElementById('prioridad');
  id = Date.now().toString().slice(10, 13);
  let task = inputTask.value;
  let priority = selectPriority.value;
  if (task !== '' && priority !== '' && task !== ' ' && priority !== ' ') {
    const tableTasks = document.getElementById('tableTasks')
    const tr = document.createElement('tr');
    tr.innerHTML = `<tr>
                      <td class="text-center p-0" scope="row">${id}</th>
                      <td class="text-center p-0 title="${task}">${task}</td>
                      <td class="text-center p-0" value="${priority}"><span class="badge rounded-pill text-center p-0">${priority}</span></td>
                      <td class="text-center p-0"><button class="btn far fa-check-circle" onClick="taskDone()"></button><button class="btn fas fa-trash-alt text-danger"></button></td>
                    </tr>`;
    tableTasks.appendChild(tr);
    let tarea = new Task(id, task, priority);
    const proyecto = document.getElementById('projects')
    const projectId = proyecto.value;
    const projectIndex = proyectos.findIndex(proyecto => proyecto.id == projectId)
    proyectos[projectIndex].tasks.push(tarea)  
  }
  formTasks.reset();
  priorityColor();
}
const btnT = document.getElementById('btnT')
btnT.addEventListener('click', agregarTarea)
formTasks.addEventListener('submit', (e)=>{
  e.preventDefault();
})
// Iterar listado de proyectos agregados para seleccionarlo al momento de agregarle tareas
  const listadoProyectos = document.getElementById('projects')
  btnP.addEventListener('click', () => {
    listadoProyectos.innerHTML = '';
    proyectos.forEach(proyecto => {
      const option = document.createElement('option');
      option.setAttribute('id', 'pOption');
      option.value = proyecto.id;
      option.innerHTML = proyecto.name;
      listadoProyectos.appendChild(option);
      });
  })
// Activar caracteristicas del modo oscuro
const body = document.getElementById('body');
const footer = document.getElementById('footer');
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const tables = document.getElementsByTagName('table');
const sections = document.getElementsByTagName('section');
const btnPerfil = document.getElementById('btnPerfil');
const btnToggle = toggle.addEventListener('click', () => {
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
})