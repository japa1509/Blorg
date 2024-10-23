  
  const btnH = document.getElementById('navbar-dropdown')
  const menuH = document.getElementById('menu-h')
  const menuX = document.getElementById('menu-x')

  menuH.addEventListener('click', () => {
    btnH.classList.remove('hidden');
    menuH.classList.add('hidden')
    menuX.classList.remove('hidden')
  })

  menuX.addEventListener('click', () => {
    btnH.classList.add('hidden')
    menuH.classList.remove('hidden')
    menuX.classList.add('hidden')
  })
  
  // // Function to toggle menus
  // function arrowMenu (buttonId, menuId) {
  //   const button = document.getElementById(buttonId);
  //   const menu = document.getElementById(menuId);
  
  //   button.addEventListener("click", () => {
  //     menu.classList.toggle("hidden");
  //     menu.classList.toggle("flex");
  //   });
  // }

  // // Add event listeners for each menu
  // arrowMenu ("productos-btn", "productos-menu");
  // arrowMenu ("company-btn", "company-menu");
  // arrowMenu ("connect-btn", "connect-menu");

  document.querySelectorAll('button[id$="-btn"]').forEach(button => {
    button.addEventListener('click', () => {
      const menu = button.nextElementSibling;
      if (window.innerWidth < 768) { // Solo en móviles
        menu.classList.toggle('hidden');
      }
    });
  });
  