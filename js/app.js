class Project {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
}
let proyectos = [];
// const crearProyecto = (name, date) => {
//   name = prompt("Ingresa el nombre del proyecto:");
//   date = prompt("Ingresa una fecha de entrega:", 'dd/mes/año');
//   let proyecto = new Project(name, date);
//   proyectos.push(proyecto);
//   const projects = document.getElementById('projects');
//   const li = document.createElement('li');
//   li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" title="nameProject">${proyecto.name}<span class="badge bg-info rounded-pill m-2" title="Cantidad de tareas del proyecto" id="totalTasks">${tareas.length}</span><span class="badge bg-secondary m-2" title="Fecha de Entrega" id="totalTasks">${proyecto.date}</span></li>`;
//   projects.appendChild(li);
// }
class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}
let tareas = [];
// const crearTarea = (name, priority) => {
//   let nTareas = parseInt(prompt("Cuantas tareas deseas agregar?"));
//   for (let i = 0; i < nTareas; i++) {
//     name = prompt("Ingresa el nombre de la tarea:");
//     priority = parseInt(prompt("Ingresa una prioridad a la tarea del 1 al 3"));
//     let tarea = new Task(name, priority);
//     tareas.push(tarea);
//     const tasks = document.getElementById('tasks');
//     const li = document.createElement('li');
//     li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" id="nameTask">${tarea.name}<span class="badge bg-info rounded-pill m-2" title="Prioridad de la tarea" id="priority">${tarea.priority}</span></li>`;
//     tasks.appendChild(li);
//   }
// }

const formProjects = document.getElementById('formProjects')
const btnP = document.getElementById('btnP')

btnP.addEventListener('click', ()=>{
  const inputProject = document.getElementById('proyecto');
  const inputDate = document.getElementById('fecha');
  let project = inputProject.value;
  let date = inputDate.value;
  const projects = document.getElementById('projects');
  const li = document.createElement('li');
  li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" title="nameProject">${project}<span class="badge bg-info rounded-pill m-2" title="Cantidad de tareas del proyecto" id="totalTasks">${tareas.length}</span><span class="badge bg-secondary m-2" title="Fecha de Entrega" id="totalTasks">${date}</span></li>`;
  projects.appendChild(li);
  let proyecto = new Project(project, date);
  proyectos.push(proyecto);
  formProjects.reset();
  console.log(proyectos);
})

formProjects.addEventListener('submit', (e)=>{
  e.preventDefault()
})
const btnT = document.getElementById('btnT')
const formTasks = document.getElementById('formTasks')
btnT.addEventListener('click', ()=>{
  const inputTask = document.getElementById('tarea');
  const selectPriority= document.getElementById('prioridad');
  let task = inputTask.value;
  let priority = selectPriority.value;
  const tasks = document.getElementById('tasks');
  const li = document.createElement('li');
  li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" id="nameTask">${inputTask.value}<span class="badge bg-info rounded-pill m-2" title="Prioridad de la tarea" id="priority">${selectPriority.value}</span></li>`;
  tasks.appendChild(li);
  let tarea = new Task(task, priority);
  tareas.push(tarea);
  formTasks.reset();
})

formTasks.addEventListener('submit', (e)=>{
  e.preventDefault();
})



















const body = document.getElementById('body');
const footer = document.getElementById('footer')
const header = document.getElementById('header')
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  footer.classList.toggle('light');
  footer.classList.toggle('dark');
  header.classList.toggle('light');
  header.classList.toggle('dark');
})

