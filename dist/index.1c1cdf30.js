const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".nav__btn-toggle");
const closeBtn = sidebar.querySelector(".sidebar__close-btn");
const menuToggles = sidebar.querySelectorAll(".btn_toggle");
sidebarToggle.addEventListener("click", ()=>{
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
});
closeBtn.addEventListener("click", ()=>{
    sidebar.style.display = "none";
});
for (const toggle of menuToggles)toggle.addEventListener("click", ()=>{
    let submenu = toggle.nextElementSibling;
    submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
});

//# sourceMappingURL=index.1c1cdf30.js.map
