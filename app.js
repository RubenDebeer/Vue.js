const app = Vue.createApp({
    data() {
      return {
          name:'',
        counter: 0,
      };
    },
    methods: {
        increase (count) {
            this.counter= this.counter + count;
        },
        decrease (count) {
            this.counter = this.counter - count;
        },
        changeName (event){ 
            this.name = event.target.value;
        },
        submitForm(){
            alert("submitted");
        }
    }
  });
  
  app.mount('#events');
  //Whenever there is a from that is submitted thebrowser sends a http request to a server.
  //This is handeled by the browser as default and we need to create a method thta will handel this if we want vue to handel the request.
