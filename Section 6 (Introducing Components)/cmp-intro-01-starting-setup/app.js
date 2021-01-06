const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '123 456 789', email: 'manuel@localhost.com' },
                { id: 'julie', name: 'Julie Jones', phone: '987 654 321', email: 'julie@localhost.com' },
            ],
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount('#app');
