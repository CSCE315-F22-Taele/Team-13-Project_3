
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
  localStorage.setItem('crustID', 1);
}

function cauliflowerCrustChosen() {
  localStorage.setItem('crustType', 'Cauliflower Crust');
  localStorage.setItem('crustID', 2);
}

function traditionalSauceChosen() {
  localStorage.setItem('sauceType', 'Traditional Red');
  localStorage.setItem('sauceID', 2);
}

function alfredoSauceChosen() {
  localStorage.setItem('sauceType', 'Alfredo');
  localStorage.setItem('sauceID', 1);
}

function zestySauceChosen() {
  order.setSauce(2);
  localStorage.setItem('sauceType', 'Zesty Red');
  localStorage.setItem('sauceID', 3);
}

function regularCheeseChosen() {
  localStorage.setItem('cheeseType', 'House Blend');
  localStorage.setItem('cheeseID', 1);
}

function parmesanChosen() {
  localStorage.setItem('cheeseType', 'Parmesan');
  localStorage.setItem('cheeseID', 2);
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
  addTopping("Black Forest Ham", '1');
}

function sausageChosen() {
  addTopping("Italian Sausage", "2");
}

function meatballChosen() {
  addTopping("Meatballs", "3");
}

function pepperoniChosen() {
  addTopping("Pepperoni", "4");
}

function chickenChosen() {
  addTopping("Smoked Chicken", "5");
}

function bananaPepperChosen() {
  addTopping("Banana Peppers", "6");
}

function olivesChosen() {
  addTopping("Black Olives", "7");
}

function greenPepperChosen() {
  addTopping("Green Peppers", "8");
}

function jalepenosChosen() {
  addTopping("Jalepenos", "9");
}

function mushroomsChosen() {
  addTopping("Mushrooms", "10");
}

function onionsChosen() {
  addTopping("Onions", "11");
}

function pineappleChosen() {
  addTopping("Pineapple", "12");
}


function garlicChosen() {
  addTopping("Garlic", "13");
}

function spinachChosen() {
  addTopping("Spinach", "14");
}

function tomatoChosen() {
  addTopping("Tomato", "15");
}

function broccoliChosen() {
  addTopping("Broccoli", "16");
}

function bbqChosen() {
  addTopping("BBQ Drizzle", "17");
}

function oliveOilChosen() {
  addTopping("Olive Oil Drizzle", "18");
}

function oreganoChosen() {
  addTopping("Oregano Drizzle", "19");
}

function ranchChosen() {
  addTopping("Ranch Drizzle", "20");
}

function sirachaChosen() {
  addTopping("Siracha Drizzle", "21");
}

function fountainDrinkChosen() {
  localStorage.setItem('drinkType', '22oz');
  localStorage.setItem('drinkID', 1);
}

function waterChosen() {
  localStorage.setItem('drinkType', 'Water Bottle');
  localStorage.setItem('drinkID', 2);
}

function gatoradeChosen() {
  localStorage.setItem('drinkType', 'Gatorade');
  localStorage.setItem('drinkID', 3);
}

function displayOrder() {
  processOrder(); // updates database
  document.getElementById("display-crust").innerHTML = "Crust: " + localStorage.getItem('crustType');
  document.getElementById("display-sauce").innerHTML = "sauce: " + localStorage.getItem('sauceType');
  document.getElementById("display-cheese").innerHTML = "Cheese: " + localStorage.getItem('cheeseType');
  document.getElementById("display-topping").innerHTML = "Topping(s): " + localStorage.getItem('toppingType');
  document.getElementById("display-drink").innerHTML = "Drink: " + localStorage.getItem('drinkType');
  localStorage.clear();
}

function processOrder() {

  /* TODO: UPDATE ORDER_HISTORY*/

  console.log('crustID:' + localStorage.getItem('crustID'));
  const crust = localStorage.getItem('crustID');
  const sauce = localStorage.getItem('sauceID');
  const cheese = localStorage.getItem('cheeseID');
  const drink = localStorage.getItem('drinkID');      // if none: null
  const toppings = localStorage.getItem('toppingID'); // if none: null

  // alert("pre-fetch");

  fetch('http://localhost:3000/processOrder', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      crust: crust,
      sauce: sauce,
      cheese: cheese,
      drink: drink,
      toppings: toppings
    })
  })
  .catch(err => alert(err));
}