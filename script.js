function closeFunc() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hide");
}

function dropFunc() {
    const drop = document.querySelector(".drop");
    const down = document.querySelector("#down");
    drop.classList.toggle("active");
    down.classList.toggle("rotate");
}