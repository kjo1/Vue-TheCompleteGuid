const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            show: false, //taskListIsVisible
            // Variable names should be more self explanatory
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
            // I did this way
            if (!this.show) {
                this.btnLabel = 'Hide';
                this.status = 'Shown';
            } else {
                this.btnLabel = 'Show';
                this.status = 'Hidden';
            }
        },
    },
    // better way to do the button caption
    computed: {
        btnCaption() {
            return this.show ? 'Show List' : 'Hide List';
        },
    },
});

app.mount('#assignment');
