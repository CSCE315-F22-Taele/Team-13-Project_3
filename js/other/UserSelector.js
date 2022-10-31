function updateUserRole(value) {
    localStorage.setItem("role-name", value);
    document.write("Current user role is " + localStorage.getItem("role-name"));
    changeScreenForManager();
}

function changeScreenForManager() {
  window.location.href = "../manager/ManagerOptions.html";
} 