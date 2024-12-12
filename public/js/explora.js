(function() {
  "use strict";
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });
})();

//modo oscuro //
document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('bg-video');
  var indicator = document.getElementById('video-loaded');
  
  video.addEventListener('loadeddata', function() {
    indicator.textContent = 'Sí';
  });
  
  video.addEventListener('error', function() {
    indicator.textContent = 'Error al cargar';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-icon');
  const navMenu = document.getElementById('navmenu');
  let isAnimating = false;

  // Toggle del menú hamburguesa
  hamburgerMenu.addEventListener('click', function() {
      if (isAnimating) return;
      
      isAnimating = true;
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      setTimeout(() => {
          isAnimating = false;
      }, 500);
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth <= 1199) {
              hamburgerMenu.classList.remove('active');
              navMenu.classList.remove('active');
          }
      });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && 
          !hamburgerMenu.contains(e.target) && 
          navMenu.classList.contains('active')) {
          hamburgerMenu.classList.remove('active');
          navMenu.classList.remove('active');
      }
  });

  // Prevenir que el menú se cierre al hacer clic dentro
  navMenu.addEventListener('click', function(e) {
      e.stopPropagation();
  });
});






// barra //

document.addEventListener('DOMContentLoaded', function() {
  const navmenu = document.querySelector('.navmenu');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          navmenu.classList.add('scrolled');
      } else {
          navmenu.classList.remove('scrolled');
      }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const navmenu = document.querySelector('.navmenu');
  const hamburger = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  // Efecto scroll
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          navmenu.classList.add('scrolled');
      } else {
          navmenu.classList.remove('scrolled');
      }
  });

  // Toggle menú hamburguesa
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      menuLinks.classList.toggle('active');
      navmenu.classList.toggle('menu-active'); // Agregamos esta línea para el overlay
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          menuLinks.classList.remove('active');
          navmenu.classList.remove('menu-active'); // Agregamos esta línea
      });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', function(e) {
      if (!navmenu.contains(e.target)) {
          hamburger.classList.remove('active');
          menuLinks.classList.remove('active');
          navmenu.classList.remove('menu-active'); // Agregamos esta línea
      }
  });
});



//imagen oscuros //
// Configuración por defecto
const defaultConfig = {
  duration: 2000,  // duración de la animación en milisegundos
  brightness: 30,  // brillo de la imagen al hacer hover (%)
  scale: 1.1,      // escala de la imagen al hacer hover
  textOffset: 20   // desplazamiento inicial del texto (px)
};

// Función para aplicar el efecto
function applyPortfolioEffect(customConfig = {}) {
  const config = { ...defaultConfig, ...customConfig };
  
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
      const img = item.querySelector('img');
      const info = item.querySelector('.portfolio-info');
      const title = info.querySelector('h4');
      const description = info.querySelector('p');
      
      // Aplicar estilos iniciales
      Object.assign(item.style, {
          position: 'relative',
          overflow: 'hidden'
      });
      
      Object.assign(img.style, {
          transition: `filter ${config.duration}ms ease, transform ${config.duration}ms ease`
      });
      
      Object.assign(info.style, {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          opacity: '0',
          transition: `opacity ${config.duration}ms ease`
      });
      
      [title, description].forEach(el => {
          Object.assign(el.style, {
              color: '#fff',
              transform: `translateY(${config.textOffset}px)`,
              transition: `transform ${config.duration}ms ease, opacity ${config.duration}ms ease`,
              opacity: '0'
          });
      });
      
      // Eventos de mouse
      item.addEventListener('mouseenter', () => {
          img.style.filter = `brightness(${config.brightness}%)`;
          img.style.transform = `scale(${config.scale})`;
          info.style.opacity = '1';
          [title, description].forEach(el => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
          });
      });
      
      item.addEventListener('mouseleave', () => {
          img.style.filter = 'brightness(100%)';
          img.style.transform = 'scale(1)';
          info.style.opacity = '0';
          [title, description].forEach(el => {
              el.style.opacity = '0';
              el.style.transform = `translateY(${config.textOffset}px)`;
          });
      });
  });
}

// Aplicar el efecto con la configuración por defecto
document.addEventListener('DOMContentLoaded', () => applyPortfolioEffect());

// Ejemplo de cómo usar con configuración personalizada:
// applyPortfolioEffect({
//     duration: 1500,
//     brightness: 40,
//     scale: 1.05,
//     textOffset: 15
// });



//animacion de descarga //
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal-element');
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // Ajusta este valor para cambiar cuándo se activa la animación

  revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
          element.classList.add('revealed');
      } else {
          element.classList.remove('revealed');
      }
  });
}

// Ejecutar la función al cargar la página y al hacer scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Opcional: Throttle para mejorar el rendimiento
function throttle(func, limit) {
  let inThrottle;
  return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
      }
  }
}

// Usar el throttle
const throttledReveal = throttle(revealOnScroll, 100);
window.addEventListener('scroll', throttledReveal);ç



// lapiz 
const pencilCursor = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><defs><linearGradient id='pencilGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23FFB266'/><stop offset='100%' style='stop-color:%23FF8000'/></linearGradient><linearGradient id='tipGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%234D4D4D'/><stop offset='100%' style='stop-color:%23333333'/></linearGradient></defs><path d='M22 2l-4-2-12 12-4 8 2 2 8-4 12-12-2-4z' fill='url(%23pencilGrad)' stroke='%23995C00' stroke-width='0.5'/><path d='M19 3l-1-1-9.9 9.9 1 1L19 3z' fill='%23FFE0B3' stroke='%23995C00' stroke-width='0.3'/><path d='M20 4l-9.9 9.9 2.8 2.8 9.9-9.9-2.8-2.8z' fill='url(%23tipGrad)'/><path d='M3 28l3-1-2-2-1 3z' fill='%23FFD480' stroke='%23995C00' stroke-width='0.3'/><path d='M2 25l-2 7 7-2-5-5z' fill='%23FFB266' stroke='%23995C00' stroke-width='0.3'/><path d='M6.5 14.5L4 22l2 2 7.5-2.5-7-7z' fill='%23FFE0B3' stroke='%23995C00' stroke-width='0.3'/></svg>`;

document.body.style.cursor = `url('${pencilCursor}') 0 32, auto`;