function toggleImagens() {
  var imagens = document.getElementById("imagensTeam");
  var icone = document.getElementById("icone");
  if (imagensTeam.classList.contains("show")) {
    imagensTeam.classList.remove("show");
    icone.style.transform = "rotate(0deg)";
  } else {
    imagensTeam.classList.add("show");
    icone.style.transform = "rotate(90deg)";
  }
}
