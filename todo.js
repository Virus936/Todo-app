import {addToList, addToLocalStorage} from './creater.js';

let dataLocalStorage = localStorage.getItem('datalist') ?
                          JSON.parse(localStorage.getItem('datalist'))
                          :[]

const button = document.querySelector('.todo__addBtn')
button.addEventListener('click',()=>{
  const str = document.querySelector('.todo__toAdd')
  if (str.value.trim()) {
    const obj = {
      'name':str.value.trim(),
      'checked':false,
      'key': dataLocalStorage.length != 0 ?
                dataLocalStorage[dataLocalStorage.length -1].key + 1
                :1
    }
    addToList(obj)
    addToLocalStorage(obj)
  }else{
    alert('Ajouter une tache à effectuer')
  }
  str.value = ''
})


dataLocalStorage.forEach(addToList)


