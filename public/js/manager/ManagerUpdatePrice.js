function updatePriceSubmitted() {
  itemNameVal = document.getElementById("update-price-item-name").value;
  document.getElementById("postUpdateItem").setAttribute("value", itemNameVal); // Copy the value

  itemPriceVal = document.getElementById("update-price-new-price").value;
  document.getElementById("postUpdatePrice").setAttribute("value", itemPriceVal); // Copy the value
}
