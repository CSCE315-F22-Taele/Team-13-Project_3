function manEmailSubmitted() {
  manPassword = document.getElementById("man-pw").value;
  if (manPassword == "CorrectHorseBatteryStapl3"){
    window.location.href = "./ManagerOptions.html";
  }
  else{
    window.location.href = "../other/UserSelector.html";
  }
}
