window.onload = function () {
  crearProyecto();
  crearTarea();
}
class Project {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
}
let proyectos = [];
const crearProyecto = (name, date) => {
  name = prompt("Ingresa el nombre del proyecto:");
  date = prompt("Ingresa una fecha de entrega:", 'dd/mes/año');
  let proyecto = new Project(name, date);
  proyectos.push(proyecto);
  const projects = document.getElementById('projects');
  const li = document.createElement('li');
  li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" title="nameProject">${proyecto.name}<span class="badge bg-info rounded-pill m-2" title="Cantidad de tareas del proyecto" id="totalTasks">${tareas.length}</span><span class="badge bg-secondary m-2" title="Fecha de Entrega" id="totalTasks">${proyecto.date}</span></li>`;
  projects.appendChild(li);
}


class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}
let tareas = [];
const crearTarea = (name, priority) => {
  let nTareas = parseInt(prompt("Cuantas tareas deseas agregar?"));
  for (let i = 0; i < nTareas; i++) {
    name = prompt("Ingresa el nombre de la tarea:");
    priority = parseInt(prompt("Ingresa una prioridad a la tarea del 1 al 3"));
    let tarea = new Task(name, priority);
    tareas.push(tarea);
    const tasks = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center" id="nameTask">${tarea.name}<span class="badge bg-info rounded-pill m-2" title="Prioridad de la tarea" id="priority">${tarea.priority}</span></li>`;
    tasks.appendChild(li);
  }
}

  




$(function () {
  $("#fecha").datepicker({
    minDate: '1d',
    maxDate: '15d',
    beforeShowDay: $.datepicker.noWeekends,
    dateFormat: "dd/mm/yy",
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    firstDay: 1,
  });
});