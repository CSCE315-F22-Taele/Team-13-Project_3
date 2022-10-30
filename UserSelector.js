function sayGoodBye() {
  document.write("Bye!");
}

function updateUserRole(value){
    //document.write("Bye!");
    let amount = value;
    console.log(amount);
    document.write(amount.toString());
}

function toggleSheet() { // idk if name is legal
  const element = document.getElementById("user-role");
  if (element.getAttribute("role") == "customer") {
    // document.write("togglesheet but fake works")
    element.setAttribute("role", "customer");
    localStorage.setItem("role-name", "customer");
  } else if (element.getAttribute("role") == "server") {
    element.setAttribute("role", "server");
    localStorage.setItem("role-name", "server");
  } else {
    element.setAttribute("role", "manager");
    localStorage.setItem("role-name", "manager");
  }
  document.write("Current user role is " + localStorage.getItem("role-name"));
}

function toggleSheetParam(value) {
    localStorage.setItem("role-name", value);
    document.write("Current user role is " + localStorage.getItem("role-name"));
}