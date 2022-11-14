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

var order = new Order();

function changeScreenForBYO() {
  window.location.href = "../../html/serverAndCustomer/StartBYO.html";
}

function changeScreenForDrinks() {
  window.location.href = "../../html/serverAndCustomer/DrinkSelection.html";
}

function changeScreenForFinishOrder() {
  window.location.href = "../../html/serverAndCustomer/OrderPlaced.html";
}

function changeScreenForCrust(){
  window.location.href = "../../html/serverAndCustomer/BYOCrust.html";
}

function changeScreenForSauce() {
  window.location.href = "../../html/serverAndCustomer/BYOSauce.html";
}

function changeScreenForCheese() {
  window.location.href = "../../html/serverAndCustomer/BYOCheese.html";
}

function changeScreenForToppings() {
  window.location.href = "../../html/serverAndCustomer/BYOToppings.html";
}

function changeScreenForBYODone() {
  window.location.href = "../../html/serverAndCustomer/StartOrder.html";
}


function regularCrustChosen() {
  order.crust = 0;
  console.log(order.crust);
}

function displayOrder() {
  document.getElementById("crustGuy").innerHTML = order.crust;
}

function cheesePizzaChosen() {
  order.setPizza();
}

function cauliflowerCrustChosen() {
  order.setCrust(1);
}

function traditionalSauceChosen() {
  order.setSauce(0);
}

function alfredoSauceChosen() {
  order.setSauce(1);
}

function zestySauceChosen() {
  order.setSauce(2);
}

function regularCheeseChosen() {
  order.setCheese(0);
}

function parmesanChosen() {
  order.setCheese(1);
}

function hamChosen() {
  order.addTopping(0);
}

function sausageChosen() {
  order.addTopping(1);
}

function meatballChosen() {
  order.addTopping(2);
}

function pepperoniChosen() {
  order.addTopping(3);
}

function chickenChosen() {
  order.addTopping(4);
}

function bananaPepperChosen() {
  order.addTopping(5);
}

function olivesChosen() {
  order.addTopping(6);
}

function greenPepperChosen() {
  order.addTopping(7);
}

function jalepenosChosen() {
  order.addTopping(8);
}

function mushroomsChosen() {
  order.addTopping(9);
}

function onionsChosen() {
  order.addTopping(10);
}

function pineappleChosen() {
  order.addTopping(11);
}

function garlicChosen() {
  order.addTopping(12);
}

function spinachChosen() {
  order.addTopping(13);
}

function tomatoChosen() {
  order.addTopping(14);
}

function broccoliChosen() {
  order.addTopping(15);
}

function bbqChosen() {
  order.addTopping(16);
}

function oliveOilChosen() {
  order.addTopping(17);
}

function oreganoChosen() {
  order.addTopping(18);
}

function ranchChosen() {
  order.addTopping(19);
}

function sirachaChosen() {
  order.addTopping(20);
}
