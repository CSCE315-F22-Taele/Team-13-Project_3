var startDateVal = "";
var endDateVal = "";
var stringOfSales = "";

/**
 * view the sales of the restaurant across a period of time
 */
function viewSalesSubmitted() {
  startDateVal = document.getElementById("view-sales-start-date").value;
  endDateVal = document.getElementById("view-sales-end-date").value;

  // DATABASE CODE HERE
  // can use stringOfSales to hold the information, or however you want to organize it

  const sales = document.getElementById("sales-output");
  sales.innerHTML = stringOfSales;
}
