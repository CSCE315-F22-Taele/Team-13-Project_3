function manPassSubmitted() {
  manPassword = document.getElementById("man-pw").value;
  if (manPassword == "CorrectHorseBatteryStapl3"){
    window.location.href = "./ManagerOptions.html";
  }
  else{
    const youre_wrong = document.getElementById("incorrect-pw");
    youre_wrong.innerHTML = "Try again.";
  }
}

function changeScreenForUserSelector(){
  window.location.href = "../../html/other/UserSelector.html";
}