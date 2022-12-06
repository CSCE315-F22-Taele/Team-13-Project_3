// You have variables for the table (itemTypeSub), item name (itemNameVal), and price (itemPriceVal)

var itemTypeSub = "";
var itemNameVal = "";
var itemPriceVal = "";

function updateItemSubmitted() {
  itemTypeSub = document.getElementById("itemType").value;
  itemNameVal = document.getElementById("itemName").value;
  itemPriceVal = document.getElementById("itemPrice").value;
  if (itemPriceVal == ""){
    itemPriceVal = "N/A";
  }

  /*
    DATABASE CODE HERE
  
  */

    if (itemPriceVal == "") {
      itemPriceVal = "N/A";
    }

  fetch('http://localhost:3000/updatePrice', {
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

  const itemUpdated = document.getElementById("itemUpdatedConfirmation");
  itemUpdated.innerHTML = "Updated: " + itemNameVal + ", price: " + itemPriceVal + ", in database table: " + itemTypeSub;
  
  // .catch(err => alert(err));
}
