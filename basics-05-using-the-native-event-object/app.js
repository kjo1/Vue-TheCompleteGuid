const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
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
        }
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
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Lastname';
        }
    }
});

app.mount('#events');
