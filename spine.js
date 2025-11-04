// The 'spine' of the webpage, the backend, per se.

// The following manages the hamburger menu.
function toggleMenu() {
    const menu = document.querySelector(".hamburgerLinks");
    const icon = document.querySelector(".hamburgerIcon");
    
    // This toggles the class="open" which is attributed to both hamburgerLinks and hamburgerIcon.
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
