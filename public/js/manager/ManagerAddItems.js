// You have variables for the table (itemTypeSub), item name (itemNameVal), and price (itemPriceVal)

var itemTypeSub = "";
var itemNameVal = "";
var itemPriceVal = "";

/**
 * adds the item that the manager requested.
 */
function addingItem(){

  itemTypeSub = document.getElementById("itemType").value;
  itemNameVal = document.getElementById("itemName").value;
  itemPriceVal = document.getElementById("itemPrice").value;

  if (itemPriceVal == ""){
    itemPriceVal = "N/A";
  }

  fetch('http://localhost:3000/addItem', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      itemType: itemTypeSub,
      itemName: itemNameVal,
      itemPrice: itemPriceVal
    })
  })
  .then(addItemSubmitted())
  .catch(err => console.log(err));
}

/**
 * grabs the values that the manager submitted for adding an item.
 */
function addItemSubmitted() {
  itemTypeSub = document.getElementById("itemType").value;
  itemNameVal = document.getElementById("itemName").value;
  itemPriceVal = document.getElementById("itemPrice").value;
  

  const itemAdded = document.getElementById("itemAddedConfirmation");
  itemAdded.innerHTML = "Added: " + itemNameVal + ", price: " + itemPriceVal + ", in database table: " + itemTypeSub;
}