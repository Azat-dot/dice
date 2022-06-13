

function change1() {
    const dice1 = document.querySelector('img');
    let randomNumber1 = Math.floor((Math.random() * 6) +1);
    if (randomNumber1 === 1) {dice1.setAttribute("src", "/images/dice1.png");
} else if (randomNumber1 === 2) {dice1.setAttribute("src", "/images/dice2.png")
} else if (randomNumber1 === 3) {dice1.setAttribute("src", "/images/dice3.png")
} else if (randomNumber1 === 4) {dice1.setAttribute("src", "/images/dice4.png")
} else if (randomNumber1 === 4) {dice1.setAttribute("src", "/images/dice5.png")
} else  {dice1.setAttribute("src", "/images/dice6.png")}

    return randomNumber1;
}


function change2() {
    const dice1 = document.querySelector('img.img2');
    let randomNumber2 = Math.floor((Math.random() * 6) +1);
    if (randomNumber2 === 1) {dice1.setAttribute("src", "/images/dice1.png");
} else if (randomNumber2 === 2) {dice1.setAttribute("src", "/images/dice2.png")
} else if (randomNumber2 === 3) {dice1.setAttribute("src", "/images/dice3.png")
} else if (randomNumber2 === 4) {dice1.setAttribute("src", "/images/dice4.png")
} else if (randomNumber2 === 4) {dice1.setAttribute("src", "/images/dice5.png")
} else  {dice1.setAttribute("src", "/images/dice6.png")}

    return randomNumber2;

}


function winner () {
    let randomNumber1 = change1();
    let randomNumber2 = change2();

    const result = document.querySelector('h1');
    if (randomNumber1 > randomNumber2) {result.innerHTML = "Победил 1 Игрок!";
} else if (randomNumber1 < randomNumber2) {result.innerHTML = "Победил 2 Игрок!";
} else {result.innerHTML = "Ничя!"}
}


change1()
change2()
winner()