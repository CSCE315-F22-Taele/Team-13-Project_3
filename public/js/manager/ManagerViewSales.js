var startDateVal = "";
var endDateVal = "";
var stringOfSales = "";
function viewSalesSubmitted() {
  startDateVal = document.getElementById("view-sales-start-date").value;
  endDateVal = document.getElementById("view-sales-end-date").value;

  // DATABASE CODE HERE
  // can use stringOfSales to hold the information, or however you want to organize it

  const sales = document.getElementById("sales-output");
  sales.innerHTML = stringOfSales;
}
