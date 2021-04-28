(()=> {
   'use strict';
   let burgerMenu = document.querySelector('.nav__menu');
   let navBox = document.querySelector('.nav__box');
   let navLinks = document.querySelectorAll('header.masthead .nav__links div');
   let masthHeadLogo = document.querySelector('.masthead h1');
   eventInit();

   function eventInit() {
      burgerMenu.addEventListener('click', navBoxtransition);
      navLinks.forEach(link => {
         link.addEventListener('click', subLinksSwitch);
      });

      // added hover effect on h1 logo.
      addMasthHeadLogoHover();

   }


   function addMasthHeadLogoHover() {
      setTimeout(()=> {
         masthHeadLogo.addEventListener('mouseover', logoHoverIn);
         masthHeadLogo.addEventListener('mouseleave', logoHoverOut);
      }, 7600);
   }

   function logoHoverIn() {
      this.style.transform = `scale(1.1)`;
   }
   function logoHoverOut() {
      this.style.transform = `scale(1)`;
   }

   function navBoxtransition() {
      navBox.classList.add('nav__box--transition');
      setTimeout(()=> {
         navBox.classList.remove('nav__box--transition');
      },300);
   }

   function subLinksSwitch(event) {
      if(event.target !== this) return;

      for(let navlinks of navLinks) {
         let arrow = navlinks.querySelector('span');
         if(this != navlinks) {
            navlinks.nextElementSibling.classList.remove('nav__sublinks--show');
            navlinks.parentElement.classList.remove('nav__li--show');
            arrow.classList.remove('arrow--rotate');
         }
         event.target.nextElementSibling.classList.toggle('nav__sublinks--show');
         event.target.parentElement.classList.toggle('nav__li--show');
         event.target.querySelector('span').classList.toggle('arrow--rotate');
      }
   }

})();

