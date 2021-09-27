window.onload = function () {
  // crearProyecto();
}
let proyectos = [];
let tareas = [];
class Project {
  constructor(name, date, task) {
    this.name = name;
    this.date = date;
    this.task = task;
  }
}
class Task {
  constructor (name, priority) {
    this.name = name;
    this.priority = priority;
  }
}
const crearProyecto = (name, priority, date, task) => {
  name = prompt("Ingresa el nombre del proyecto:");
  date = prompt("Ingresa una fecha de entrega:", 'dd/mes/año');
  let proyecto = new Project(name, priority, date, task);
  proyectos.push(proyecto);
}
const crearTarea = (name, priority) => {
  task = prompt("Ingresa por lo menos la primera tarea:");
  priority = parseInt(prompt("Ingresa la prioridad del proyecto del 1 al 5:"));
  let tarea = new Task(name, priority);
  tareas.push(tarea);
}


$(function(){
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