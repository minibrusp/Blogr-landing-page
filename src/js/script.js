(()=> {
   'use strict';
   let burgerMenu = document.querySelector('.nav__menu');
   let navBox = document.querySelector('.nav__box');
   let navLinks = document.querySelectorAll('header.masthead .nav__links .nav__link');
   let subLinks = document.querySelectorAll('header.masthead .nav__sublinks a');
   let masthHeadLogo = document.querySelector('.masthead a');
   eventInit();

   function eventInit() {
      burgerMenu.addEventListener('click', navBoxtransition);
      navLinks.forEach(link => {
         link.addEventListener('click', subLinksSwitch);
      });


      // added hover effect on h1 logo.
      addMasthHeadLogoHover();

   }


   function navBoxtransition() {
      navBox.classList.add('nav__box--transition');
      setTimeout(()=> {
         navBox.classList.remove('nav__box--transition');
      },300);
   }


   // the animation direction forwards seems to 
   function addMasthHeadLogoHover() {
      setTimeout(()=> {
         masthHeadLogo.addEventListener('mouseover', logoHoverIn);
         masthHeadLogo.addEventListener('mouseleave', logoHoverOut);
         masthHeadLogo.addEventListener('focus', logoHoverIn);
         masthHeadLogo.addEventListener('focusout', logoHoverOut);
      }, 7600);

      function logoHoverIn() {
         this.style.transform = `scale(1.2)`;
         this.style.outline = `none;`
         this.style.transition = `.3s transform`;
      }
      function logoHoverOut() {
         this.style.transform = `scale(1)`;
         this.style.outline = `none`;
         this.style.transition = `.3s transform`;
      }
   }

   // 1 sublinks at a time 

   function subLinksSwitch(event) {
      
      // guard key if it targets the arrow aborts the current function
      if(event.target !== this) return;

      for(let navlink of navLinks) {
         let thisNotEqualToNavlink = false;
         let arrow = navlink.querySelector('span');
         if(this != navlink) {
            
            thisNotEqualToNavlink = true;
            navlink.nextElementSibling.classList.remove('nav__sublinks--show');
            navlink.parentElement.classList.remove('nav__li--show');
            arrow.classList.remove('arrow--rotate');
            showOrHideSubLinks(navlink.nextElementSibling.querySelectorAll('a'), thisNotEqualToNavlink);

         }
         thisNotEqualToNavlink = false;
         event.target.nextElementSibling.classList.toggle('nav__sublinks--show');
         event.target.parentElement.classList.toggle('nav__li--show');
         event.target.querySelector('span').classList.toggle('arrow--rotate');
         showOrHideSubLinks(event.target.nextElementSibling.querySelectorAll('a'), thisNotEqualToNavlink);
      }

      // hides or show sublinks/anchor links so it wont be included in focus when not needed  

      function showOrHideSubLinks(sublinks, thisNotEqualToNavlink) {
         let index = 0;
         sublinks.forEach(sublink => {
            isItTrueorFalse(sublink);
            index++;
         });
         
         function isItTrueorFalse(sublink) {
<<<<<<< HEAD
            if(thisNotEqualToNavlink === true) return sublink.classList.remove('sublink--show');
            return sublink.classList.toggle('sublink--show');
=======
            if(thisNotEqualToNavlink === true) return sublink.style.display = "none";
            return sublink.style.display = "block";
>>>>>>> 14b678469fe844eb1404be57d94cef0a3d3c820a
         }
      }
   }




})();

