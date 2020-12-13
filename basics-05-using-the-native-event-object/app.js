const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            //fullname: ''
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    this.counter = 0;
                }, 2000);
                this.counter = 0;
            }
        },
        //     name(value) {
        //         if (value === '') {
        //             this.fullname = '';
        //         } else {
        //             this.fullname = value + ' ' + this.lastName;
        //         }
        //     },
        //     lastName(value) {
        //         if (value === '') {
        //             this.fullname = '';
        //         } else {
        //             this.fullname = this.name + ' ' + value;
        //         }
        //     }
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        },
        // outputFullname() {
        // console.log('Running again...');
        //     if (this.name === '') {
        //         return '';
        //     }
        //     return this.name + ' ' + 'Lastname';
    },
    computed: {
        fullname() {
            console.log('Running again...');
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        },
    },
});

app.mount('#events');
