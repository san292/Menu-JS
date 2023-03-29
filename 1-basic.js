import menu from './menu.js';

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

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
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}



window.addEventListener('DOMContentLoaded', function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  filterBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.strCategory === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        return displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    }),
  )
  displayMenu = displayMenu.join('');
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
