class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
 this.mobileMenu = document.querySelector(mobileMenu),
 this.navList = document.querySelector(navList); 
 this.navLinks = document.querySelectorAll(navLinks);
 this.activeClass = "active";

 this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
      this.navLinks.forEach((link, index) => {
          link.style.animation
          ?(link.style.animation = "")
          :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
  } /* "index" é a primeira posição no "Each" até a última */

  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init() {
      if (this.mobileMenu) {
          this.addClickEvent(); 
      }
      return this;
  } /* Inicia a função se mobileMenu existir no documento */
}

const mobileNavbar = new MobileNavbar (
    ".menu-mobile",
    ".cabecalho-menu",
    ".cabecalho-menu-item"
);

mobileNavbar.init()

    

   
   
   