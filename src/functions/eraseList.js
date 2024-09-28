export default function eraseList(div) {
   let message = confirm("Are you sure you want to delete the list? (This action cannot be undone!)")

   if (message) {
      while (div.firstChild) {
         div.removeChild(div.firstChild);
      }
   } 
}