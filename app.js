const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'<h2> Finish the course and learn view! </h2>',
            courseGoalB:'<h2> Finih the Mater Vuew Course! </h2>'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            return randomNumber<= 0.5 ? this.courseGoalA : this.courseGoalB 
        },
    }
}); 

app.mount('#user-goal'); 

