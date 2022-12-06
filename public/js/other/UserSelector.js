/**
 * Set the stage for the user based on their role
 * @param  {} value the role of the user
 */
function updateUserRole(value) {
    localStorage.setItem("role-name", value);
    if (localStorage.getItem("role-name") == "manager")
      changeScreenForManager();
    else if (localStorage.getItem("role-name") == "server" || localStorage.getItem("role-name") == "customer")
      changeScreenForServer();
    else if (localStorage.getItem("role-name") == "location")
      changeScreenForLocation();
    else
      document.write("Invalid user type selected.");
}
/**
 * sets the role and screen for the manager
 */
function changeScreenForManager() {
  window.location.href = "../manager/ManagerAuthentication.html";
} 


/**
 * sets the role and screen for the server and customer
 */
function changeScreenForServer() {
  window.location.href = "../serverAndCustomer/StartOrder.html";
} 


/**
 * sets the screen for the location
 */
function changeScreenForLocation() {
  window.location.href = "../other/pages_maps.html";
} 