import addTask from "./functions/addTask"
import eraseList from "./functions/eraseList"

const form = document.getElementById('form')
const input = document.getElementById('input')
const tasks = document.getElementById('tasks')
const eraseListBtn = document.getElementById('erase-list')

form.addEventListener('submit', (ev) => {
   ev.preventDefault()

   if (input.value !== '') {
      addTask(input.value, tasks)
      input.value = ''
   }
})

eraseListBtn.addEventListener('click', ()=>{
   eraseList(tasks)
})