const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        },
    },
    computed: {
        // do this way when you have more complex dynamic code classes
        boxAClasses() {
            {
                return { select: this.boxASelected };
            }
        },
    },
});

app.mount('#styling');
