let backbutton = document.querySelector("#back")

if (backbutton) {
    backbutton.onclick = function() {
        backbutton.classList.add("hide-player")
        setTimeout(() => { window.open("index.html","_self"); }, 2000);
    }
}