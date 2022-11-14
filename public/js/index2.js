function testLocalStorage(){
    document.write("This is the local storage value for 'role-name': " + localStorage.getItem("role-name"));
}

function getStarted() {
  window.location.href = "../html/other/UserSelector.html";
}