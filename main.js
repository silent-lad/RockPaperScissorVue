const app = new Vue({
  el: "#app",
  data: {
    winCount: 0,
    tieCount: 0,
    looseCount: 0,
    currentTurn: "rock",
    computerTurn: "paper",
    resultText: "",
  },
  methods: {
    choose(option) {
      this.currentTurn = option;
      this.randomComputerChoose();
      this.compileResult();
    },
    randomComputerChoose() {
      let options = ["paper", "rock", "scissor"];
      let randomlyChosenIndex = Math.floor(Math.random() * 3);
      this.computerTurn = options[randomlyChosenIndex];
    },
    compileResult() {
      let haveWon = false;
      switch (this.computerTurn) {
        case "paper":
          if (this.currentTurn == "scissor") {
            haveWon = true;
          }
          break;
        case "rock":
          if (this.currentTurn == "paper") {
            haveWon = true;
          }
        case "scissor":
          if (this.currentTurn == "rock") {
            haveWon = true;
          }
      }
      if (this.currentTurn == this.computerTurn) {
        this.tieCount++;
        this.resultText = "Match has been tied";
      } else {
        if (haveWon) {
          this.winCount++;
          this.resultText = "You Won";
        } else {
          this.looseCount++;
          this.resultText = "You Loose";
        }
      }
    },
  },
  computed: {
    imagePath() {
      return "./" + this.currentTurn + ".svg";
    },
    computerImagePath() {
      return "./" + this.computerTurn + ".svg";
    },
  },
});
