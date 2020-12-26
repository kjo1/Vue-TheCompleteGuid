const app = Vue.createApp({
    data() {
        return {
            inputGoalValue: '',
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
    },
});

app.mount('#user-goals');
