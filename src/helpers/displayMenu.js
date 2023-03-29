import displayMenuItems from './displayMenuItems.js'
import {fetchMenu} from './fetchApi.js'

const filterBtns = document.querySelectorAll('.filter-btn')

export async function displayMenu() {
  const {meals} = await fetchMenu()

  displayMenuItems(meals)
  filterBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      const category = e.currentTarget.dataset.id
      const menuCategory = meals.filter(menuItem => {
        if (menuItem.strCategory === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        return displayMenuItems(meals)
      } else {
        displayMenuItems(menuCategory)
      }
    }),
  )
}
