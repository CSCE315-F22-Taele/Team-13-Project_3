function updateManagerChosenAction(value) {
  localStorage.setItem("manager-chosen-action-name", value);
  document.write("Current manager chosen action is " + localStorage.getItem("manager-chosen-action-name"));
}
