handleMenu = (status) => {
    console.log(status)
    let menu = document.getElementById("header__bar-list");
    let iconBar = document.getElementById("header__bar-icon");
    // debugger
    if (status === 'open') {
        menu.style.display = "block";
        iconBar.style.display = "none";
    } else {
        menu.style.display = "none";
        iconBar.style.display = "block";
    }
}