import get from './utils/getElement.js'
import {displayMenu} from './helpers/displayMenu.js'
const toggleMode = get('.toggle-btn')

// toggle mode

toggleMode.addEventListener('click', function () {
	console.log('clicked');
  document.documentElement.classList.toggle('dark-theme')
})

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenu()
})
