const user = localStorage.getItem('user');
const nameUser = document.getElementById('btnPerfil');
nameUser.innerText =`Hola! Bienvenido, ${user}.`;

// Proyectos
class Project {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.tasks = []
  }
}
let proyectos = [];
const agregarProyecto = () => {
  const inputProject = document.getElementById('proyecto');
  const inputDate = document.getElementById('fecha');
  id = Date.now().toString().slice(9, 14);
  let project = inputProject.value;
  let date = inputDate.value;
  if (project !== '' && date !== '') {
    const tableProjects = document.getElementById('tableProjects')
    const tr = document.createElement('tr');
    tr.innerHTML = `<tr>
                      <td class="text-center" scope="row">${id}</th>
                      <td class="text-center title="${project}">${project}</td>
                      <td class="text-center"><span class="badge rounded-pill bg-info text-dark text-center">${tareas.length}</span></td>
                      <td class="text-center">${date}</td>
                      <td class="text-center"><i class="fas fa-edit m-1"></i> <i class="fas fa-trash-alt m-1"></i></td>
                    </tr>`;
    tableProjects.appendChild(tr);
    let proyecto = new Project(id, project, date);
    proyectos.push(proyecto);
  }
  formProjects.reset();
}
const btnP = document.getElementById('btnP')
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
let tareas = [];
const agregarTarea = () => {
  const inputTask = document.getElementById('tarea');
  const selectPriority= document.getElementById('prioridad');
  id = Date.now().toString().slice(10, 13);
  let task = inputTask.value;
  let priority = selectPriority.value;
  if (task !== '' && priority !== '') {
    const tableTasks = document.getElementById('tableTasks')
    const tr = document.createElement('tr');
    tr.innerHTML = `<tr>
                      <td class="text-center" scope="row">${id}</th>
                      <td class="text-center title="${task}">${task}</td>
                      <td class="text-center" value="${priority}"><span class="badge rounded-pill text-center">${priority}</span></td>
                      <td class="text-center"><i class="fas fa-edit m-1"></i> <i class="fas fa-trash-alt m-1"></i></td>
                    </tr>`;
    tableTasks.appendChild(tr);
    let tarea = new Task(id, task, priority);
    tareas.push(tarea);
  }
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
  formTasks.reset();
}
const btnT = document.getElementById('btnT')
btnT.addEventListener('click', agregarTarea)
formTasks.addEventListener('submit', (e)=>{
  e.preventDefault();
})



// Iterar listado de proyectos agregados para seleccionarlo al momento de agregarle tareas
  const listadoProyectos = document.getElementById('projects')
  btnP.addEventListener('click', () => {
    proyectos.forEach(proyecto => {
      const option = document.createElement('option');
      option.setAttribute('id', `${id}`);
      option.innerText = proyecto.name;
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
toggle.addEventListener('click', () => {
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
