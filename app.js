// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const eventredValue = inputEl.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = eventredValue;
//     listEl.appendChild(listItem);

// }
// //Add Event listener 

// buttonEl.addEventListener('click',addGoal)

//Create View app 
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');