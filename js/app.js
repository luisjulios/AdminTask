class Project {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
  }
}
let proyectos = [];
class Task {
  constructor(id, name, priority) {
    this.id = id;
    this.name = name;
    this.priority = priority;
  }
}
let tareas = [];
const btnP = document.getElementById('btnP')
btnP.addEventListener('click', ()=>{
  const inputProject = document.getElementById('proyecto');
  const inputDate = document.getElementById('fecha');
  id = Date.now();
  let project = inputProject.value;
  let date = inputDate.value;
  const tableProjects = document.getElementById('tableProjects')
  const tr = document.createElement('tr');
  tr.innerHTML = `<tr>
                    <th scope="row">${id}</th>
                    <td>${project}</td>
                    <td>${tareas.length}</td>
                    <td>${date}</td>
                    <td><i class="fas fa-edit m-1"></i> <i class="fas fa-trash-alt m-1"></i></td>
                  </tr>`;
  tableProjects.appendChild(tr);
  let proyecto = new Project(id, project, date);
  proyectos.push(proyecto);
  formProjects.reset();
});
formProjects.addEventListener('submit', (e)=>{
  e.preventDefault()
})

const btnT = document.getElementById('btnT')
btnT.addEventListener('click', ()=>{
  const inputTask = document.getElementById('tarea');
  const selectPriority= document.getElementById('prioridad');
  id = Date.now();
  let task = inputTask.value;
  let priority = selectPriority.value;
  const tableTasks = document.getElementById('tableTasks')
  const tr = document.createElement('tr');
  tr.innerHTML = `<tr>
                    <th scope="row">${id}</th>
                    <td>${task}</td>
                    <td>${priority}</td>
                    <td><i class="fas fa-edit m-1"></i> <i class="fas fa-trash-alt m-1"></i></td>
                  </tr>`;
  tableTasks.appendChild(tr);
  let tarea = new Task(id, task, priority);
  tareas.push(tarea);
  formTasks.reset();
})
formTasks.addEventListener('submit', (e)=>{
  e.preventDefault();
})






const openModalTask = document.getElementById('openModalTask');
openModalTask.addEventListener('click', () => {
  const listadoProyectos = document.getElementById('projects')
  proyectos.forEach(proyecto => {
  const option = document.createElement('option');
  option.value = proyecto.name;
  option.setAttribute('id', `${id}`);
  option.innerHTML = proyecto.name;
  option.remove();
  listadoProyectos.appendChild(option);
  });
})








const body = document.getElementById('body');
const footer = document.getElementById('footer')
const header = document.getElementById('header')
const toggle = document.getElementById('toggle');
const tables = document.getElementsByTagName('table')
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  footer.classList.toggle('light');
  footer.classList.toggle('dark');
  header.classList.toggle('light');
  header.classList.toggle('dark');
  for (const table of tables) {
    table.classList.toggle('table-dark');
  }
})