const determineWinner = (p1, p2) => {
  switch (p1) {
    case "scissors":
      if (p2 === "rock") {
        return "Player 2 wins!";
      } else if (p2 === "paper") {
        return "Player 1 wins!";
      } else {
        return "No winner!";
      }
    case "rock":
      if (p2 === "rock") {
        return "No winner!";
      } else if (p2 === "paper") {
        return "Player 2 wins!";
      } else {
        return "Player 1 wins!";
      }
    case "paper":
      if (p2 === "rock") {
        return "Player 1 wins!";
      } else if (p2 === "paper") {
        return "No winner!";
      } else {
        return "Player 2 wins!";
      }
  }
};

let player1 = { id: "ECwfZukXUwiypYK0AAAC", choice: "" };
let player2 = { id: "kJXadIrEfNrTjBEAAAAD", choice: "" };

console.log(player1);

player1.choice = "test";
player2.choice = "gg";

console.log(player1);
