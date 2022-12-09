
/**
 * Changes the screen to the BYO
 */
function changeScreenForBYO() {
  window.location.href = "../../html/serverAndCustomer/StartBYO.html";
}

/**
 * Changes the screen to Drink Selection
 */
function changeScreenForDrinks() {
  window.location.href = "../../html/serverAndCustomer/DrinkSelection.html";
}

/**
 * Changes the screen to Order Placed
 */
function changeScreenForFinishOrder() {
  
  window.location.href = "../../html/serverAndCustomer/OrderPlaced.html";
  
}

/**
 * Changes the screen to Crust Selection
 */
function changeScreenForCrust(){
  window.location.href = "../../html/serverAndCustomer/BYOCrust.html";
}

/**
 * Changes the screen to Sauce Selection
 */
function changeScreenForSauce() {
  window.location.href = "../../html/serverAndCustomer/BYOSauce.html";
}

/**
 * Changes the screen to Cheese Selection
 */
function changeScreenForCheese() {
  window.location.href = "../../html/serverAndCustomer/BYOCheese.html";
}

/**
 * Changes the screen to Toppings Selection
 */
function changeScreenForToppings() {
  window.location.href = "../../html/serverAndCustomer/BYOToppings.html";
}

/**
 * Changes the screen to Start Order
 */
function changeScreenForBYODone() {
  window.location.href = "../../html/serverAndCustomer/StartOrder.html";
  var temp = localStorage.getItem('price');
  localStorage.setItem('price',  8.99);
}


/**
 * Changes the screen to Start Order
 */
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
// localStorage.setItem('price', 0.00);
// localStorage.setItem('drinkID', -1);

/**
 * Indicates cheese pizza chosen, update order accordingly
 */
function cheesePizzaChosen() {
  regularCrustChosen();
  traditionalSauceChosen();
  regularCheeseChosen();
  var temp = localStorage.getItem('price');
  localStorage.setItem('price',  6.79);
  document.getElementById('total').innerHTML = "$" + localStorage.getItem('price');
}

/**
 * Indicates pepperoni pizza chosen, update order accordingly
 */
function pepperoniPizzaChosen() {
  regularCrustChosen();
  traditionalSauceChosen();
  regularCheeseChosen();
  pepperoniChosen();
  var temp = localStorage.getItem('price');
  localStorage.setItem('price',  6.79);
  document.getElementById('total').innerHTML = "$" + localStorage.getItem('price');
}

/**
 * adds this item to the BYO order
 */
function regularCrustChosen() {
  localStorage.setItem('crustType', 'Regular Crust');
  localStorage.setItem('crustID', 1);
}

/**
 * adds this item to the BYO order
 */
function cauliflowerCrustChosen() {
  localStorage.setItem('crustType', 'Cauliflower Crust');
  localStorage.setItem('crustID', 2);
  var temp = localStorage.getItem('price');
  localStorage.setItem('price',  2.99);
}

/**
 * adds this item to the BYO order
 */
function traditionalSauceChosen() {
  localStorage.setItem('sauceType', 'Traditional Red');
  localStorage.setItem('sauceID', 2);
}

/**
 * adds this item to the BYO order
 */
function alfredoSauceChosen() {
  localStorage.setItem('sauceType', 'Alfredo');
  localStorage.setItem('sauceID', 1);
}

/**
 * adds this item to the BYO order
 */
function zestySauceChosen() {
  localStorage.setItem('sauceType', 'Zesty Red');
  localStorage.setItem('sauceID', 3);
}

/**
 * adds this item to the BYO order
 */
function regularCheeseChosen() {
  localStorage.setItem('cheeseType', 'House Blend');
  localStorage.setItem('cheeseID', 1);
}

/**
 * adds this item to the BYO order
 */
function parmesanChosen() {
  localStorage.setItem('cheeseType', 'Parmesan');
  localStorage.setItem('cheeseID', 2);
}

/**
 * adds this item to the BYO order
 */
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

/**
 * adds this item to the BYO order
 */
function hamChosen() {
  addTopping("Black Forest Ham", '1');
  document.getElementById("button-black-forest-ham").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function sausageChosen() {
  addTopping("Italian Sausage", "2");
  document.getElementById("button-italian-sausage").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function meatballChosen() {
  addTopping("Meatballs", "3");
  document.getElementById("button-metball").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function pepperoniChosen() {
  addTopping("Pepperoni", "4");
  document.getElementById("button-pepperoni").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function chickenChosen() {
  addTopping("Smoked Chicken", "5");
  document.getElementById("button-smoked-chicken").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function bananaPepperChosen() {
  addTopping("Banana Peppers", "6");
  document.getElementById("button-banana-peppers").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function olivesChosen() {
  addTopping("Black Olives", "7");
  document.getElementById("button-black-olives").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function greenPepperChosen() {
  addTopping("Green Peppers", "8");
  document.getElementById("button-green-peppers").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function jalepenosChosen() {
  addTopping("Jalepenos", "9");
  document.getElementById("button-jalepenos").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function mushroomsChosen() {
  addTopping("Mushrooms", "10");
  document.getElementById("button-mushrooms").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function onionsChosen() {
  addTopping("Onions", "11");
  document.getElementById("button-onions").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function pineappleChosen() {
  addTopping("Pineapple", "12");
  document.getElementById("button-pineapple").style.backgroundColor = '#A5A5A5';
}


/**
 * adds this item to the BYO order
 */
function garlicChosen() {
  addTopping("Garlic", "13");
  document.getElementById("button-roasted-garlic").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function spinachChosen() {
  addTopping("Spinach", "14");
  document.getElementById("button-spinach").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function tomatoChosen() {
  addTopping("Tomato", "15");
  document.getElementById("button-tomatoes").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function broccoliChosen() {
  addTopping("Broccoli", "16");
  document.getElementById("button-broccoli").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function bbqChosen() {
  addTopping("BBQ Drizzle", "17");
  document.getElementById("button-bbq").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function oliveOilChosen() {
  addTopping("Olive Oil Drizzle", "18");
  document.getElementById("button-olive-oil").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function oreganoChosen() {
  addTopping("Oregano Drizzle", "19");
  document.getElementById("button-oregano").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function ranchChosen() {
  addTopping("Ranch Drizzle", "20");
  document.getElementById("button-ranch").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function sirachaChosen() {
  addTopping("Siracha Drizzle", "21");
  document.getElementById("button-siracha").style.backgroundColor = '#A5A5A5';
}

/**
 * adds this item to the BYO order
 */
function fountainDrinkChosen() {
  localStorage.setItem('drinkType', '22oz');
  localStorage.setItem('drinkID', 1);
  var temp = localStorage.getItem('price');
  localStorage.setItem('price', 2.39);
}

/**
 * adds this item to the BYO order
 */
function waterChosen() {
  localStorage.setItem('drinkType', 'Water Bottle');
  localStorage.setItem('drinkID', 2);
  var temp = localStorage.getItem('price');
  localStorage.setItem('price', 2.39);
}

/**
 * adds this item to the BYO order
 */
function gatoradeChosen() {
  localStorage.setItem('drinkType', 'Gatorade');
  localStorage.setItem('drinkID', 3);
  var temp = localStorage.getItem('price');
  localStorage.setItem('price', 2.39);
}

/**
 * adds this item to the BYO order
 */
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

  console.log('crustID:' + localStorage.getItem('crustID'));
  const crust = localStorage.getItem('crustID');
  const sauce = localStorage.getItem('sauceID');
  const cheese = localStorage.getItem('cheeseID');
  const drink = localStorage.getItem('drinkID');      // if none: null
  const toppings = localStorage.getItem('toppingID'); // if none: null
  const price = localStorage.getItem('price');

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
      toppings: toppings,
      price : price
    })
  })
  .catch(err => console.log(err));
}
