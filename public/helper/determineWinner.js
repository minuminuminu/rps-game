const determineWinner = (p1, p2) => {
  switch (p1) {
    case "scissors":
      if (p2 === "rock") {
        return -1;
      } else if (p2 === "paper") {
        return 1;
      } else {
        return 0;
      }
    case "rock":
      if (p2 === "rock") {
        return 0;
      } else if (p2 === "paper") {
        return -1;
      } else {
        return 1;
      }
    case "paper":
      if (p2 === "rock") {
        return 1;
      } else if (p2 === "paper") {
        return 0;
      } else {
        return -1;
      }
  }
};
