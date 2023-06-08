const modal = document.querySelector('.modal')
const input = document.querySelector('.modal-input')
const modalBtn = document.querySelector('.modal-btn')
const saveBtn = document.querySelector('.save-btn')
const text = document.querySelector('.text')
const errorMsg = document.querySelector('.error-msg')

let inputValue = 'To jest testowa wiadomość'
let timeout
let index = 1
let speed = 80

const writtingAnimation = () => {}
