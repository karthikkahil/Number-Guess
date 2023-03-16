let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 5;
let high_score = 0;

// Reset function
document.querySelector(".click_again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 5;
  document.querySelector(".guess_message").textContent = "Start guessing...";
  document.querySelector(".number_gss").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = "?";
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right top, #ff00f4, #ec00f7, #d700fa, #c000fc, #a600ff)";
});

// check function

document.querySelector(".click_check").addEventListener("click", function () {
  const numberGss = Number(document.querySelector(".number_gss").value);
  const guessMessage = document.querySelector(".guess_message").textContent;

  if (!numberGss) {
    document.querySelector(".guess_message").textContent =
      "Please enter some value!";
  } else if (numberGss === secretNumber) {
    document.querySelector(".guess_message").textContent = "Correct!";
    document.querySelector(".guess").textContent = secretNumber;
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
    if (score > high_score) {
      high_score = score;
      document.querySelector(".high_score").textContent = high_score;
    }
  } else if (numberGss !== secretNumber) {
    if (score > 1) {
      document.querySelector(".guess_message").textContent =
        numberGss > secretNumber
          ? `${numberGss} is too big than  the guess! 😢`
          : `${numberGss} is too small than the guess! 😟`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess_message").textContent =
        "❌ You lost the GAME!!! ❌";
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(to right top, #ff0000, #ff002c, #fd0046, #f6005d, #eb1271)";
      document.querySelector(".score").textContent = "0";
    }
  }
});
