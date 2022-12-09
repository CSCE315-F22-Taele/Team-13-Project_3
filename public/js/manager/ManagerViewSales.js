var startDateVal = "";
var endDateVal = "";
var stringOfSales = "";

function startView() {
  alert("here");
  console.log("here");
  startDateVal = document.getElementById("view-sales-start-date").value;
  endDateVal = document.getElementById("view-sales-end-date").value;
  alert(startDateVal);
  alert(endDateVal);

  fetch('http://localhost:3000/viewSales', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      startDate: startDateVal,
      endDate:   endDateVal
    })
  })
  .then(response => response.json())
  .then(data => viewSalesSubmitted(data['data']))
  .catch(err => alert(err));
}

function viewSalesSubmitted(data) {
  
  alert("in submit");
  // can use stringOfSales to hold the information, or however you want to organize it

  /* change this to same table system as viewInventory */
  const sales = document.getElementById("sales-output");

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

  sales.innerHTML = tableHtml;
}
