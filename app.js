const app = Vue.createApp({
  data() {
      return{
        userInput:"Default"
      };
  },
  methods: {
    showAlert() {
      alert("This is an allert triggered by a button click event");
    },
    changeUserInput(event){
        this.userInput = event.target.value;
    }
  },
});

app.mount("#assignment");