import get from '../utils/getElement.js'
const sectionCenter = get('.section-center')

 function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `<article class="menu-item"> 
	<img src=${item.strMealThumb} alt=${item.title} class="photo" />
	<div class="item-info">
	<header >
    <h4 class="price">${item.strMeal}</h4>
  
	  <h4>${item.strArea}</h4>
     
	</header>

	</div>
	</article>`
  }).join('')
//   displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}
export default displayMenuItems
