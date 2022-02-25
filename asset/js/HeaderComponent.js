$(document).ready(function () {
    $(window).scroll(function () {
        let header = document.getElementById("header");
        if ($(this).scrollTop()) {
            header.style.backgroundColor = "white";
            header.style.transition = "all 0.2s ease"
        } else {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
    })
})

handleMenu = (status) => {
    console.log(status)
    let menu = document.getElementById("header__bar-list");
    let iconBar = document.getElementById("header__bar-icon");
    if (status === 'open') {
        menu.style.display = "block";
        iconBar.style.display = "none";
    } else {
        menu.style.display = "none";
        iconBar.style.display = "block";
    }
}

