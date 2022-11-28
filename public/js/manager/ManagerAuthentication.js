function manPassSubmitted() {
  manPassword = document.getElementById("man-pw").value;
  if (manPassword == "CorrectHorseBatteryStapl3"){
    window.location.href = "./ManagerOptions.html";
  }
  else{
    // window.location.href = "../other/UserSelector.html";

    //  var table = "<table>";
    //  table += "<tr>";
    //  table += "<th><center>Title</center></th>";
    //  table += "</tr>";
    //  table += "<tr>";
    //  table += "<td><center> data </center></td>";
    //  table += "</tr>";
    //  table += "</table>";
    //  $("body").append(table);

    const youre_wrong = document.getElementById("incorrect-pw");
    youre_wrong.innerHTML = "Try again.";
  }

}