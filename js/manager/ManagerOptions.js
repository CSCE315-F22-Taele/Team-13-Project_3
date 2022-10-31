function updateManagerChosenAction(value) {
  localStorage.setItem("manager-chosen-action-name", value);
  document.write("Current manager chosen action is " + localStorage.getItem("manager-chosen-action-name"));
  switch (localStorage.getItem("manager-chosen-action-name")) {
    case "manager add item":
      window.location.href = "ManagerAddItems.html";
      break;
    case "manager view inventory":
      window.location.href = "ManagerViewInventory.html";
      break;
    case "manager update price":
      window.location.href = "ManagerUpdatePrice.html";
      break;
    case "manager restock inventory":
      window.location.href = "ManagerRestockInventory.html";
      break;
    case "manager view sales":
      window.location.href = "ManagerViewSales.html";
      break;
    default:
    document.write("Invalid Manager action.")
  }
}
