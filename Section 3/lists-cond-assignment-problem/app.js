const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            show: false,
            btnLabel: 'Hide',
            status: 'Shown',
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        },
        toggle() {
            this.show = !this.show;
            if (!this.show) {
                this.btnLabel = 'Hide';
                this.status = 'Shown';
            } else {
                this.btnLabel = 'Show';
                this.status = 'Hidden';
            }
        },
    },
});

app.mount('#assignment');
