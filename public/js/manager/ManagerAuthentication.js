/**
 * verifies that the password is correct.
 */
function manPassSubmitted() {
  manPassword = document.getElementById("man-pw").value;
  if (manPassword == "PPP315"){
    window.location.href = "./ManagerOptions.html";
  }
  else{
    const youre_wrong = document.getElementById("incorrect-pw");
    youre_wrong.innerHTML = "Try again.";
  }
}

/**
 * takes user back, because they are not a manager.
 */
function changeScreenForUserSelector(){
  window.location.href = "../../html/other/UserSelector.html";
}