// You have variables for the table (itemTypeSub), item name (itemNameVal), and price (itemPriceVal)

var itemTypeSub = "";
var itemNameVal = "";
var itemPriceVal = "";

function addItemSubmitted() {
  itemTypeSub = document.getElementById("itemType").value;
  itemNameVal = document.getElementById("itemName").value;
  itemPriceVal = document.getElementById("itemPrice").value;
  if (itemPriceVal == ""){
    itemPriceVal = "N/A";
  }

  /*
    DATABASE CODE HERE

  */

  const itemAdded = document.getElementById("itemAddedConfirmation");
  itemAdded.innerHTML = "Added: " + itemNameVal + ", price: " + itemPriceVal + ", in database table: " + itemTypeSub;
}