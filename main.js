const app = new Vue({
  el: "#app",
  data: {
    winCount: 10,
    tieCount: 1,
    looseCount: 5,
    currentTurn: "rock",
  },
  methods: {
    choose(option) {
      this.currentTurn = option;
    },
  },
});
