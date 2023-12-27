document.addEventListener("DOMContentLoaded", function () {
  var paragraph = document.querySelector(".paragraph");
  var showButton = document.getElementById("show");
  var collapseButton = document.getElementById("collapse");

  showButton.addEventListener("click", function () {
    paragraph.style.display = "block";
    showButton.style.display = "none";
    collapseButton.style.display = "block";
  });

  collapseButton.addEventListener("click", function () {
    paragraph.style.display = "none";
    collapseButton.style.display = "none";
    showButton.style.display = "block";
  });
});
