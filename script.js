let cards = document.querySelectorAll(".card")
let radiobuttons = document.querySelectorAll(".radio")
let player = document.querySelector(".player")
let popup = document.querySelector(".popup")

let info = [
    {"name": "АнимеЭльф!", "traits": "Парень с огоньком, любит камни и свою девушку Олю!", "city": "Ривендел", "p1": 15, "p2": 15, "p3": 10},
    {"name": "Дашулька🤙", "traits": "Возрождение и видеомонтаж - наше всё!", "city": "Москва", "p1": 10, "p2": 15, "p3": 15},
    {"name": "Даша Крым наш", "traits": "Гасим свет и спокойной ночи! На все руки мастер!", "city": "Мытищи", "p1": 20, "p2": 23, "p3": 20},
    {"name": "Лиза Ясинская", "traits": "Танцы у неё в крови, пазловый маньяк!", "city": "Москва", "p1": 7, "p2": 13, "p3": 13},
    {"name": "Маша Зеленцова", "traits": "Может решить любую психологическую проблему.", "city": "Москва", "p1": 7, "p2": 0, "p3": 0},
    {"name": "Попо Шанель 🛹", "traits": "Боится клоунов. Умница, красавица, акробатка.", "city": "Готэм-Сити", "p1": 25, "p2": 25, "p3": 25}
]

for (var i = 0; i < cards.length; i++) {
    let current_number = i
    cards[i].ondblclick = function() { 
        clickHandler(current_number)
    }
}

function clickHandler(current_number) {
    player.classList.add("hide-player")
    shopbutton.classList.add("hide-player")
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("popup-animation-player")
        cards[i].classList.remove("show-character")
        cards[i].classList.add("hide-character")
    }
    if (radiobuttons[current_number].checked) {
        cards[current_number].classList.add("popup-animation-player")
        cards[current_number].classList.remove("hide-character")
        popup.classList.remove("popup")
        popup.classList.add("popup-show")
        loadPopup(current_number)
    }
}

function loadPopup(num) {
    document.querySelector("#person-name span").innerHTML = info[num].name
    document.querySelector("#person-city").innerHTML = "Город:" + info[num].city
    document.querySelector("#person-trait").innerHTML = "Особенности:" + info[num].traits
    document.querySelector("#person-cristalls span").innerText = info[num].p1 + info[num].p2 + info[num].p3
    document.querySelector("#param-1").value = info[num].p1;
    document.querySelector("#param-2").value = info[num].p2;
    document.querySelector("#param-3").value = info[num].p3;
}

let closepopup = document.querySelector("#close-popup")

closepopup.onclick = function() {
    popup.classList.add("popup")
    popup.classList.remove("popup-show")
    for (var i = 0; i < cards.length; i++) {
        if (radiobuttons[i].checked) {
            cards[i].classList.add("hide")
        }
    }
    setTimeout(() => { location.reload(); }, 2000);
}

let shopbutton = document.querySelector("#shop")

if (shopbutton) { 
    shopbutton.onclick = function() {
        player.classList.add("hide-player")
        shopbutton.classList.add("hide-player")
        setTimeout(() => { window.open("shop.html","_self"); }, 2000);
    }
}