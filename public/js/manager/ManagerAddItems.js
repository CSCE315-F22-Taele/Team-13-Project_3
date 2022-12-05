// You have variables for the table (itemTypeSub), item name (itemNameVal), and price (itemPriceVal)

var itemTypeSub = "";
var itemNameVal = "";
var itemPriceVal = "";

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
  .catch(err => alert(err));
}

function addItemSubmitted() {
  itemTypeSub = document.getElementById("itemType").value;
  itemNameVal = document.getElementById("itemName").value;
  itemPriceVal = document.getElementById("itemPrice").value;
  

  const itemAdded = document.getElementById("itemAddedConfirmation");
  itemAdded.innerHTML = "Added: " + itemNameVal + ", price: " + itemPriceVal + ", in database table: " + itemTypeSub;
}