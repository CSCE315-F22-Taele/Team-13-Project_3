function manEmailSubmitted() {
  manEmailVal = document.getElementById("man-email").value;
  if (manEmailVal == "manager@spinnstone.com"){
    window.location.href = "./ManagerOptions.html";
  }
  else{
    window.location.href = "../other/UserSelector.html";
  }
}
