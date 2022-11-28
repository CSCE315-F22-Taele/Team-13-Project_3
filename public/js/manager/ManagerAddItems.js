// function submitted() {
//   formValue = document.getElementsByName("firstname")[0].value;
//   document.getElementsByName("firstname")[1].setAttribute("value", formValue); // Copy the value
//   return false;
// }

function addItemSubmitted() {
  itemNameVal = document.getElementById("itemName").value;
  document.getElementById("postItemName").setAttribute("value", itemNameVal); // Copy the value

  itemPriceVal = document.getElementById("itemPrice").value;
  document.getElementById("postItemPrice").setAttribute("value", itemPriceVal); // Copy the value
}