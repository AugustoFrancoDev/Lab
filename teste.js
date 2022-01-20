const mobileMenu = document.querySelector(".menu-mobile"),
navList = document.querySelector(".cabecalho-menu"); 
navLinks = document.querySelectorAll(".cabecalho-menu-item");
activeClass = "active";
let menuAtivo = false



function clicarMenu() {
    if (menuAtivo == false) {navList.classList.toggle(activeClass);        
    } 
    else {navList.classList.remove(activeClass);
    }
}

function inverterValor() {
    return menuAtivo = !menuAtivo    
}

mobileMenu.addEventListener("click", () => (clicarMenu(), inverterValor()))
