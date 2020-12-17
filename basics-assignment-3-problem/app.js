const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        add(value) {
            this.number = this.number + value;
            console.log(this.number, this.result);
        },
        // reset() {
        //     this.number = 0;
        // },
    },
    watch: {
        // number(value) {
        //     if (value > 0) {
        //         const that = this;
        //         setTimeout(function () {
        //             that.number = 0;
        //         }, 5000);
        //     }
        // },
        //watch computer property
        result() {
            const that = this;
            setTimeout(function () {
                that.number = 0;
            }, 5000);
        },
    },
    computed: {
        result() {
            if (this.number < 37 && this.number !== 0) {
                return 'Not there yet';
            } else if (this.number > 37) {
                return 'Too much!';
            } else if (this.number === 37) {
                // return 37;
                return this.number;
            } else return '';
        },
    },
});

app.mount('#assignment');
