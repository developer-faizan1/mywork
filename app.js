// Menu
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navLinks = document.querySelector('.navLinks');
const dropdownMenus = document.querySelectorAll('.about-us-menu, .services-menu');

openMenu.addEventListener('click', () => {
  navLinks.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  navLinks.style.right = '-250px';
});

// Dropdown Toggle for Submenus
dropdownMenus.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    const submenu = menu.querySelector('ul');
    if (submenu) submenu.style.display = 'block';
  });

  menu.addEventListener('mouseleave', () => {
    const submenu = menu.querySelector('ul');
    if (submenu) submenu.style.display = 'none';
  });
});



// swiper js
// var swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 