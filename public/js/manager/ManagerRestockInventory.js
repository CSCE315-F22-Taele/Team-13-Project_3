var stringOfItemsNeedingRestock = "";

var itemName = "";
var itemQuantityToRestock = "";

/**
 * Functionality 1: Shows the items that need to be restocked
 */
function checkInventoryRestock(){
    stringOfItemsNeedingRestock += "";
    /* DATABASE CODE HERE


    */


    const displayItems = document.getElementById("restockItemsDisplay");
    displayItems.innerHTML = stringOfItemsNeedingRestock;
}

/**
 * Functionality 2: Allows manager to restock a specific item
 */
function quantityItemSubmitted(){
    tableName = document.getElementById("tableNameRestock").value;
    itemName = document.getElementById("itemName").value;
    itemQuantityToRestock = document.getElementById("quantityAdded").value;

    // DATABASE CODE HERE

    fetch('http://localhost:3000/restockItem', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            itemType: tableName,
            itemName: itemName,
            itemAmount: itemQuantityToRestock
        })
    })



    const displayQuantityAdded = document.getElementById("restockQuantityItemsDisplay");
    displayQuantityAdded.innerHTML = "Updated Quantity!";
}