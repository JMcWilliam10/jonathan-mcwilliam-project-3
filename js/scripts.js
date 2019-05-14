let incrementor = 0;
let levels = ["lvlOne", "lvlTwo"];
let levelTwo = "(./../../assets/images/lvlOne.png)";

class Level;

$(document).ready(function() {
  $(".mario").on("click", function() {
    // prompt("what is marios favourite game?");
  });
  $("form").on("submit", function(e) {
    e.preventDefault();
    let userChoice = $("select").val();
    if (userChoice === "flex-end") {
      incrementor++;
      $(".scoreValue").html(incrementor);
      $(".mario").css({ left: "93%", bottom: "38.5%" });
      $(".background").toggleClass("animated fadeOut delay-1s");
      setTimeout(function() {
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".wrapper").css("background-position", "10% 0");
        $(".mario").css({ left: "15%" });
      }, 3000);
    } else {
      $(".mario").css({ left: "93%", bottom: "38.5%" });
      $(".background").toggleClass("animated fadeOut delay-1s");
      setTimeout(function() {
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".wrapper").css("background-position", "10% 0");
        $(".mario").css({ left: "15%" });
      }, 3000);
    }
  });
});
