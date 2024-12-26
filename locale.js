const locale = {
  es: {
      //calendar
      calendar: {
          monthFull: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
          ],
          monthShort: [
              "En",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
          ],
          
          dayFull: [
              "Domingo",
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
          ],
  
          dayShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
          hours: "Horas",
          minutes: "Minutos",
          done: "Hecho",
          clear: "Limpiar",
          today: "Hoy",
          am: ["am", "AM"],
          pm: ["pm", "PM"],
          
          weekStart: 7,
          timeFormat: 24
      },
  
      //core
      core: {
          ok:"OK",
          cancel:"Cancelar"
      },
  
      //formats
      formats: {
          dateFormat: "%d.%m.%Y",
          timeFormat: "%H:%i"
      }
  
      //Gantt
      gantt: {
          // Header / sidebar
          "Task name": "Nombre tarea",
          "Start date": "Fecha inicio",
          Duration: "Duración",
          Task: "Tarea",
          Milestone: "Milestone",
          "Summary task": "Summary task",
  
          // Sidebar
          Save: "Save",
          Delete: "Delete",
          Name: "Name",
          Description: "Description",
          "Select type": "Select type",
          Type: "Type",
          "End date": "End date",
          Progress: "Progress",
          Predecessors: "Predecessors",
          Successors: "Successors",
          "Add task name": "Add task name",
          "Add description": "Add description",
          "Select link type": "Select link type",
          "End-to-start": "End-to-start",
          "Start-to-start": "Start-to-start",
          "End-to-end": "End-to-end",
          "Start-to-end": "Start-to-end",
  
          // Context menu / toolbar
          Add: "Add",
          "Child task": "Child task",
          "Task above": "Task above",
          "Task below": "Task below",
          "Convert to": "Convert to",
          Edit: "Edit",
          Cut: "Cut",
          Copy: "Copy",
          Paste: "Paste",
          Move: "Move",
          Up: "Up",
          Down: "Down",
          Indent: "Indent",
          Outdent: "Outdent",
          "Split task": "Split task",
  
          // Toolbar
          "New task": "New task",
          "Move up": "Move up",
          "Move down": "Move down",
      },
  }
}

module.exports = {locale}
