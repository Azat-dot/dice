//module 12 

////very long way of doing lesson ///////

// function change1() {
//     const dice1 = document.querySelector('img');
//     let randomNumber1 = Math.floor((Math.random() * 6) +1);
//     if (randomNumber1 === 1) {dice1.setAttribute("src", "/images/dice1.png");
// } else if (randomNumber1 === 2) {dice1.setAttribute("src", "/images/dice2.png")
// } else if (randomNumber1 === 3) {dice1.setAttribute("src", "/images/dice3.png")
// } else if (randomNumber1 === 4) {dice1.setAttribute("src", "/images/dice4.png")
// } else if (randomNumber1 === 5) {dice1.setAttribute("src", "/images/dice5.png")
// } else  {dice1.setAttribute("src", "/images/dice6.png")}

//     return randomNumber1;
// }


// function change2() {
//     const dice1 = document.querySelector('img.img2');
//     let randomNumber2 = Math.floor((Math.random() * 6) +1);
//     if (randomNumber2 === 1) {dice1.setAttribute("src", "/images/dice1.png");
// } else if (randomNumber2 === 2) {dice1.setAttribute("src", "/images/dice2.png")
// } else if (randomNumber2 === 3) {dice1.setAttribute("src", "/images/dice3.png")
// } else if (randomNumber2 === 4) {dice1.setAttribute("src", "/images/dice4.png")
// } else if (randomNumber2 === 5) {dice1.setAttribute("src", "/images/dice5.png")
// } else  {dice1.setAttribute("src", "/images/dice6.png")}

//     return randomNumber2;

// }

// function winner () {
//     let randomNumber1 = change1();
//     let randomNumber2 = change2();

//     const result = document.querySelector('h1');
//     if (randomNumber1 > randomNumber2) {result.innerHTML = "🎉Победил 1 Игрок!";
// } else if (randomNumber1 < randomNumber2) {result.innerHTML = "Победил 2 Игрок!🎉";
// } else {result.innerHTML = "Ничя!"}
// }

// change1()
// change2()
// winner()

/////second way to solve dice challenge //////////

let randomNumber1 = Math.floor(Math.random() * 6) + 1//geting random number from 1-6
const dice1 = document.querySelectorAll("img")[0];// geting dom element
let picture1 = "images/" + "dice" + randomNumber1 + ".png"// changing name picture to random number
dice1.setAttribute('src', picture1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
const dice2 = document.querySelectorAll('img')[1];
let picture2 = `images/dice${randomNumber2}.png`;
dice2.setAttribute('src', picture2)

let text = document.querySelector('h1')
if ( randomNumber1 > randomNumber2) {text.innerHTML = "🂓 Wins player 1"
} else if (randomNumber1 < randomNumber2) {text.innerHTML = "Wins player 2 🂓"
} else {text.innerHTML = " Draw"}