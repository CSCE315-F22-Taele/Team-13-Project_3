
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
function changeScreenForServer() {
  window.location.href = "../serverAndCustomer/StartOrder.html";
} 
// localStorage.setItem('crustType', 'None');
// localStorage.setItem('crustID', -1);

// localStorage.setItem('sauceType', 'None');
// localStorage.setItem('sauceID', -1);

// localStorage.setItem('cheeseType', 'None');
// localStorage.setItem('cheeseID', -1);

// localStorage.setItem('toppingType', 'None');
// localStorage.setItem('toppingID', '-1');

localStorage.setItem('drinkType', 'None');
// localStorage.setItem('drinkID', -1);


function cheesePizzaChosen() {
  regularCrustChosen();
  traditionalSauceChosen();
  regularCheeseChosen();
}

function pepperoniPizzaChosen() {
  regularCrustChosen();
  traditionalSauceChosen();
  regularCheeseChosen();
  pepperoniChosen();
}

function regularCrustChosen() {
  localStorage.setItem('crustType', 'Regular Crust');
  localStorage.setItem('crustID', 0);
}

function cauliflowerCrustChosen() {
  localStorage.setItem('crustType', 'Cauliflower Crust');
  localStorage.setItem('crustID', 1);
}

function traditionalSauceChosen() {
  localStorage.setItem('sauceType', 'Traditional Red');
  localStorage.setItem('sauceID', 0);
}

function alfredoSauceChosen() {
  localStorage.setItem('sauceType', 'Alfredo');
  localStorage.setItem('sauceID', 1);
}

function zestySauceChosen() {
  order.setSauce(2);
  localStorage.setItem('sauceType', 'Zesty Red');
  localStorage.setItem('sauceID', 2);
}

function regularCheeseChosen() {
  localStorage.setItem('cheeseType', 'House Blend');
  localStorage.setItem('cheeseID', 0);
}

function parmesanChosen() {
  localStorage.setItem('cheeseType', 'Parmesan');
  localStorage.setItem('cheeseID', 1);
}

function addTopping(name, id) {
  var temp1, temp2;
  if (localStorage.getItem('toppingType') == null) {
    temp1 = name;
    temp2 = id;
  } else {
    temp1 = localStorage.getItem('toppingType') + ", " + name;
    temp2 = localStorage.getItem('toppingID') + "," + id;
  }
  localStorage.setItem('toppingType', temp1);
  localStorage.setItem('toppingID', temp2);
}

function hamChosen() {
  addTopping("Black Forest Ham", '0');
}

function sausageChosen() {
  addTopping("Italian Sausage", "1");
}

function meatballChosen() {
  addTopping("Meatballs", "2");
}

function pepperoniChosen() {
  addTopping("Pepperoni", "3");
}

function chickenChosen() {
  addTopping("Smoked Chicken", "4");
}

function bananaPepperChosen() {
  addTopping("Banana Peppers", "5");
}

function olivesChosen() {
  addTopping("Black Olives", "6");
}

function greenPepperChosen() {
  addTopping("Green Peppers", "7");
}

function jalepenosChosen() {
  addTopping("Jalepenos", "8");
}

function mushroomsChosen() {
  addTopping("Mushrooms", "9");
}

function onionsChosen() {
  addTopping("Onions", "10");
}

function pineappleChosen() {
  addTopping("Pineapple", "11");
}


function garlicChosen() {
  addTopping("Garlic", "12");
}

function spinachChosen() {
  addTopping("Spinach", "13");
}

function tomatoChosen() {
  addTopping("Tomato", "14");
}

function broccoliChosen() {
  addTopping("Broccoli", "15");
}

function bbqChosen() {
  addTopping("BBQ Drizzle", "16");
}

function oliveOilChosen() {
  addTopping("Olive Oil Drizzle", "17");
}

function oreganoChosen() {
  addTopping("Oregano Drizzle", "18");
}

function ranchChosen() {
  addTopping("Ranch Drizzle", "19");
}

function sirachaChosen() {
  addTopping("Siracha Drizzle", "20");
}

function fountainDrinkChosen() {
  localStorage.setItem('drinkType', '22oz');
  localStorage.setItem('drinkID', 0);
}

function waterChosen() {
  localStorage.setItem('drinkType', 'Water Bottle');
  localStorage.setItem('drinkID', 1);
}

function gatoradeChosen() {
  localStorage.setItem('drinkType', 'Gatorade');
  localStorage.setItem('drinkID', 2);
}

function displayOrder() {
  document.getElementById("display-crust").innerHTML = "Crust: " + localStorage.getItem('crustType');
  document.getElementById("display-sauce").innerHTML = "sauce: " + localStorage.getItem('sauceType');
  document.getElementById("display-cheese").innerHTML = "Cheese: " + localStorage.getItem('cheeseType');
  document.getElementById("display-topping").innerHTML = "Topping(s): " + localStorage.getItem('toppingType');
  document.getElementById("display-drink").innerHTML = "Drink: " + localStorage.getItem('drinkType');
  localStorage.clear();
}