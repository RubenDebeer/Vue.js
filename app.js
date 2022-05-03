// const app = Vue.createApp({
//     data(){
//         return{
//             courseGoalA:'<h2> Finish the course and learn view! </h2>',
//             courseGoalB:'<h2> Finih the Mater Vuew Course! </h2>'
//         }
//     },
//     methods:{
//         outputGoal(){
//             const randomNumber = Math.random();
//             return randomNumber<= 0.5 ? this.courseGoalA : this.courseGoalB 
//         },
//     }
// }); 

// app.mount('#user-goal'); 

//Create the App Constant with the Creation object {}

const app = Vue.createApp({
    data(){
     return{
        name:'Ruben',
        age:12,
        ageInFiveYears:12+5,
        faveNumber:12,
        imageUrl: 'https://blog.hubspot.com/hubfs/Site%20owner%20turning%20images%20into%20links.jpg',
     }
    },
    methods:{
        changeFaveNumber: () => { 
            return 12;
        },
        randomNumber : () => { return (Math.random()*11);},
    }
});

//mount the Vue functionality to a root component 

app.mount('#assignment')

