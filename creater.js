let dataLocalStorage = localStorage.getItem('datalist') ?
                          JSON.parse(localStorage.getItem('datalist'))
                          :[]

export const createCloser = obj => {
  const closer = document.createElement('span')
  closer.className = 'close'
  closer.innerHTML = 'supprimer'
  closer.dataset.key = obj.key
  closer.addEventListener('click', ()=>{
    deleteFromData(closer.dataset.key)
    closer.parentElement.remove()
  })

  return closer
}

export const createLabel = obj => {
  const label = document.createElement('label')
  label.setAttribute('for', obj.key)
  label.innerHTML = obj.name

  return label
}

export const createInput = obj  => {
  const input = document.createElement('input')
  input.className = 'todo__taskChecked'
  input.type = 'checkbox'
  input.checked = obj.checked
  input.name = obj.key

  return input
}

export const createListElement = obj  => {
  const listElement = document.createElement('li')
  listElement.className = 'todo__element'
  listElement.dataset.key = obj.key

  return listElement
}


export const addToList = obj => {
  const ul = document.querySelector('ul')

  const listElement = createListElement(obj)
  const input = createInput(obj)
  const label = createLabel(obj)
  const closer = createCloser(obj)

  listElement.append(input, label, closer)
  ul.appendChild(listElement)
}

export const addToLocalStorage = obj => {
  dataLocalStorage.push(obj)
  localStorage.setItem('datalist',JSON.stringify(dataLocalStorage))
}

const deleteFromData = key => {
  dataLocalStorage = dataLocalStorage.filter(el => el.key!= key)
  localStorage.setItem(
    'datalist',
    JSON.stringify(dataLocalStorage)
)}

