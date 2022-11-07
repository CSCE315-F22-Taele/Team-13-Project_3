class Pizza {
    constructor() {
        this.crust = 0;
        this.sauce = 0;
        this.cheese = 0;
        this.toppings = [];
    }

    setCrust(c) {
        this.crust = c;
    }

    setSauce(s) {
        this.sauce = s;
    }

    setCheese(c) {
        this.cheese = c;
    }

    addTopping(t) {
        this.toppings.push(t);
    }

    getCrust() {
        return this.crust;
    }

    getSauce() {
        return this.sauce;
    }

    getCheese() {
        return this.cheese;
    }

    getToppings() {
        return this.toppings;
    }
}