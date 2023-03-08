let cards = document.querySelectorAll(".card")
let radiobuttons = document.querySelectorAll(".radio")
let player = document.querySelector(".player")
let popup = document.querySelector(".popup")

let info = [
    {"name": "АнимеЭльф!", "traits": "Парень с огоньком", "city": "Ривендел", "coins": 30, "p1": 40, "p2": 30, "p3": 15},
    {"name": "Дашулька🤙", "traits": "Парень с огоньком", "city": "Москва", "coins": 0, "p1": 50, "p2": 30, "p3": 50},
    {"name": "Даша Крым наш", "traits": "Парень с огоньком", "city": "Мытищи", "coins": 0, "p1": 20, "p2": 30, "p3": 50},
    {"name": "Лиза Ясинская", "traits": "Парень с огоньком", "city": "Москва", "coins": 0, "p1": 20, "p2": 30, "p3": 50},
    {"name": "Маша Зеленцова", "traits": "Парень с огоньком", "city": "Москва", "coins": 0, "p1": 20, "p2": 30, "p3": 50},
    {"name": "Попо Шанель 🛹", "traits": "Парень с огоньком", "city": "Готэм-Сити", "coins": 0, "p1": 20, "p2": 30, "p3": 50}
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
    document.querySelector("#person-cristalls span").innerText = info[num].coins
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