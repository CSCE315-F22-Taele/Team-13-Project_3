const { json } = require("express");

var stringOfInventory = "";

function startView() {
  
  const tableName = document.getElementById('tableNameViewInv').value;
  // alert(tableName);
  fetch('http://localhost:3000/viewTable', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({tableName: tableName})
  })
  .then(response => response.json())
  .then(data => viewInventorySubmitted(data['data']))
  .catch(err => alert(err));
  
}

function viewInventorySubmitted(data) {
  stringOfInventory += "";
  // alert(data);

  const displayInventory = document.getElementById("inventoryDisplay");
  // alert("inView");
  if (data.length === 0){
    table.innerHTML = "<tr><td class='no data' colspan='3'>No Data</td></tr>";
  } else {
    
    var tableHtml = "";

    for (var key in data.rows) {
      tableHtml += "<tr>";
      for (var keyName in data.rows[key]){
        var entry = (data.rows[key])[keyName];
        // alert(keyName);
        tableHtml += `<td>${entry}</td>`;
      }
      tableHtml += "</tr>";
      tableHtml += "\n";
    }
  }
  displayInventory.innerHTML = tableHtml;
}
