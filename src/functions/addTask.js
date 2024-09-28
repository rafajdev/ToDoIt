import delTask from "./delTask"

export default function addTask(task, div) {
   const container = document.createElement('div')
   container.className = 'task-container'

   const checkbox = document.createElement('input')
   checkbox.className = 'checkbox'
   checkbox.type = 'checkbox'

   const newTask = document.createElement('li')
   newTask.innerText = task

   const delBtn = document.createElement('button')
   delBtn.className = 'button-delete-task'
   delBtn.innerText = 'Delete'
   delBtn.onclick = delTask

   container.append(checkbox, newTask, delBtn)
   div.appendChild(container)
}
