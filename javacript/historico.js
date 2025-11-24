const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sTitulo = document.querySelector('#m-titulo')
const sData = document.querySelector('#m-data')
const sHora = document.querySelector('#m-hora')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sTitulo.value = itens[index].titulo
    sData.value = itens[index].data
    sHora.value = itens[index].hora
    id = index
  } else {
    sTitulo.value = ''
    sData.value = ''
    sHora.value = ''
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.titulo}</td>
    <td>${item.data}</td>
    <td>${item.hora}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {

  if (sTitulo.value == '' || sData.value == '' || sHora.value == '') {
    return
  }

  e.preventDefault()

  if (id !== undefined) {
    itens[id].titulo = sTitulo.value
    itens[id].data = sData.value
    itens[id].hora = sHora.value
  } else {
    itens.push({
      titulo: sTitulo.value,
      data: sData.value,
      hora: sHora.value
    })
  }

  setItensBD()
  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => insertItem(item, index))
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
