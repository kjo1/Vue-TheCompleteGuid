const app = Vue.createApp({
    data() {
        return {
            inputGoalValue: '',
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputGoalValue);
        },
    },
});

app.mount('#user-goals');
