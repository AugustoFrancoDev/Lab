class MobileNavbar {
    constructor(menuMobile, cabecalhoMenu, cabecalhoMenuItem) {
        let menuMobile = document.querySelector("menu-mobile");
        this.cabecalhoMenu = document.querySelector("cabecalho-menu");
        this.cabecalhoMenuItem = document.querySelectorAll("cabecalho-menu-item");
        this.activeClass = "active";
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", () => console.log("Olá 😊"))
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".cabecalho-menu",
    ".cabecalho-menu-item",
);
mobileNavbar.init(); 