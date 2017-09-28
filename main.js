Vue.component('list', {
    template: `<ul><li v-for="car in listCars">{{ car.car }}</li></ul>`,
    data () {
        return {
            listCars: [
                {car: "Audi"},
                {car: "Opel"},
                {car: "BMW"},
                {car: "Tesla"}
            ]
        }
    }
});


const vm = new Vue({
    el: '#app',
    data: {
        text: "Hello world!",
    },
    methods: {
        reverseMessage() {
            this.text = [...this.text].reverse().join('')
        }
    }
});
