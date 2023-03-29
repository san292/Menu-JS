
import { displayMenuItems } from "";
import { checkDOMExists } from "../utils/checkDom";

checkDOMExists('.filter-btn')
const filterBtns = document.querySelectorAll('.filter-btn');

export const filterMenu =async (menuFiltered) => {

   filterBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      const category = e.currentTarget.dataset.id
      const menuCategory = menuFiltered.filter(menuItem => {
        if (menuItem.strCategory === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        return displayMenuItems(menuFiltered)
      } else {
        displayMenuItems(menuCategory)
      }
    }),
  )
}
