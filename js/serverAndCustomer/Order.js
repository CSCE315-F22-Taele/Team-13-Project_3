class Order{
    constructor() {
        this.crust = -1;
        this.sauce = -1;
        this.cheese = -1;
        this.toppings = [];
        this.drink = -1;
    }

    setPizza() {
        this.crust = 0;
        this.sauce = 0;
        this.cheese = 0;
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

    setDrink(d) {
        this.drink = d;
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

    getDrink() {
        return this.drink;
    }

}