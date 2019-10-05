let compteur = 0;
document.getElementById("scrollDL").onclick = function() {
  compteur++;
  console.log(compteur);

  if (compteur % 2 === 0) {
    document.getElementById("scrollDL").style.left = "5px";
    document.getElementById("scrollDL").style.transition = "0.5s";
    document.getElementById("containerDL").style.background = "#1a343d";
    document.getElementById("scrollDL").style.backgroundColor = "#fff";
    document.getElementById("myIMG").src = "images/LogoBleu.png";
    document.getElementById("myIMG").style.transition = "ease 1.5s";
    document.getElementById("testinput").style.background = "#1a343d";
    document.getElementById("testinput2").style.background = "#1a343d";
    document.getElementById("testinput3").style.background = "#1a343d";
    document.getElementById("containerResultat").style.background =
      "linear-gradient(to right, #e0eafc, #cfdef3)";
    document.getElementById("btnGO").style.backgroundColor = "#1a343d";
    var x = document.getElementById("btnGO");
    var y = x.getElementsByTagName("a");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.color = "#fff";
    }
    document.body.style.background =
      "linear-gradient(to right, #E0EAFC, #CFDEF3)";
  } else {
    document.getElementById("scrollDL").style.left = "30px";
    document.getElementById("scrollDL").style.transition = "0.5s";
    document.getElementById("containerDL").style.background = "#fff";
    document.getElementById("scrollDL").style.backgroundColor = "#1a343d";
    document.getElementById("myIMG").src = "images/Logo.png";
    document.getElementById("testinput").style.background = "#fff";
    document.getElementById("testinput2").style.background = "#fff";
    document.getElementById("testinput3").style.background = "#fff";
    document.getElementById("containerResultat").style.background = "#1a343d";
    document.getElementById("btnGO").style.backgroundColor = "#fff";
    var x = document.getElementById("btnGO");
    var y = x.getElementsByTagName("p");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.color = "#1a343d";
    }
    document.body.style.background =
      "linear-gradient(to right, #1a343d, #264651)";
  }
};

document.getElementById("btnGO").onclick = function ani(e) {
  e.preventDefault();
  buttonClickGET();
  console.log("test");
  document.getElementById("containerResultat").style.display = "block";
  window.scroll(0, 1000);
  setTimeout(() => {
    document.getElementById("containerAccueil").style.display = "none";
  }, 1000);
};

function buttonClickGET() {
  let Chanteur = document.getElementById("testinput").value;
  $.ajax({
    type: "GET",
    url:
      "https://app.ticketmaster.com/discovery/v2/events.json?size=2&keyword=" +
      Chanteur +
      " &apikey=MxqV3TAXu3y8Xg8FarGmpSyAcB5VaRyN",
    async: true,
    dataType: "json",
    success: function(json) {
      console.log(json);

      /*
      let element = document.getElementById("Localisation");
      element.innerHTML = "la zone de l'event : " + json.id;*/
    },
    error: function(xhr, status, err) {}
  });
}
