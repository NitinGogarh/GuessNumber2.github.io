const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const back = document.querySelector(".back");
var input = document.querySelector(".input");
const guess = document.querySelector(".guess");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const containerchild2 = document.querySelector(".containerchild2");
var NumberResult = Math.floor(Math.random() * 100);
let short = new Audio("short.wav");
let audio = new Audio("long.wav");

button1.addEventListener("click", function button1s(e) {
  container1.style.display = "none";
  container2.style.display = "block";

  guess.innerHTML = "Your Guess";

  button1.innerHTML = "newbutton1";
  audio.play();
});

button2.addEventListener("click", function button2s(e) {
  container1.style.display = "none";
  container2.style.display = "block";

  guess.innerHTML = "Your Guess";

  button2.innerHTML = "newbutton2";
  audio.play();
});

button3.addEventListener("click", function button2s(e) {
  container1.style.display = "none";
  container2.style.display = "block";
  guess.innerHTML = "Your Guess";

  button3.innerHTML = "newbutton3";
  audio.play();
});

back.addEventListener("click", function back(e) {
  audio.play();
  window.location.reload();
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (input.value == "") {
      input.preventDefault();
    }

    short.play();
    if (input.value > 100) {
      guess.innerHTML = "Please guess between 1 to 100 " + "&#129314";
      input.value = "";
      input.preventDefault();
    }
    number1.children[1].innerHTML++;

    number2.children[1].innerHTML += input.value + ",";

    if (input.value < NumberResult) {
      guess.innerHTML = "Your Guess is Low" + "&#128532";

      input.value = "";
    } else if (input.value > NumberResult) {
      guess.innerHTML = "Your Guess is High" + "&#128561";

      input.value = "";
    } else if (input.value == NumberResult) {
      guess.innerHTML = "You Won" + "&#128525";
    }
    if (button1.innerHTML.match("newbutton1")) {
      if (number1.children[1].innerHTML >= 10 || input.value == NumberResult) {
        starter();
      }
    }
    if (button2.innerHTML.match("newbutton2")) {
      if (number1.children[1].innerHTML >= 7 || input.value == NumberResult) {
        starter();
      }
    }
    if (button3.innerHTML.match("newbutton3")) {
      if (number1.children[1].innerHTML >= 5 || input.value == NumberResult) {
        starter();
      }
    }
  }
});

function starter() {
  if (input.value < NumberResult || input.value > NumberResult) {
    guess.innerHTML =
      "You Lose Buddy &#128532 <Br> Correct Value is " + NumberResult;
    input.remove();
    const news = document.createElement("button");
    containerchild2.insertBefore(news, containerchild2.children[1]);
    news.innerHTML = "Try Again";
    news.className = "inputs";

    news.addEventListener("click", function () {
      location.reload();
      audio.play();
    });
  }

  if (input.value == NumberResult) {
    {
      input.remove();
      const news = document.createElement("button");
      containerchild2.insertBefore(news, containerchild2.children[1]);
      news.innerHTML = "New Game";
      news.className = "inputs";

      news.addEventListener("click", function () {
        location.reload();
        audio.play();
      });
    }
  }
}
