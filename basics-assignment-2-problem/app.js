const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedUserInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("clicked");
    },
    setOutput1(event) {
      this.userInput = event.target.value;
    },
    setOutput2(event) {
      this.confirmedUserInput = event.target.value;
    },
  },
});

app.mount("#assignment");
