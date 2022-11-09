function viewItemSubmitted() {
  startDateVal = document.getElementById("view-sales-start-date").value;

  document.getElementById("postStartDate").setAttribute("value", startDateVal); // Copy the value

  endDateVal = document.getElementById("view-sales-end-date").value;
  //   document.write(formValue);
  document.getElementById("postEndDate").setAttribute("value", endDateVal); // Copy the value

  document.getElementById("restock-output").innerHTML = "<h3>Sales Report</h3> None. (This is displayed when no items have been sold.)";
}
