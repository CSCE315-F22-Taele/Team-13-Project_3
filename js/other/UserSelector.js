function updateUserRole(value) {
    localStorage.setItem("role-name", value);
    document.write("Current user role is " + localStorage.getItem("role-name"));
    if (localStorage.getItem("role-name") == "manager")
      changeScreenForManager();
    else if (localStorage.getItem("role-name") == "server" || localStorage.getItem("role-name") == "customer")
      changeScreenForServer();
    else
      document.write("Invalid user type selected.");
}

function changeScreenForManager() {
  window.location.href = "../manager/ManagerOptions.html";
} 

function changeScreenForServer() {
  window.location.href = "../serverAndCustomer/StartOrder.html";
} 