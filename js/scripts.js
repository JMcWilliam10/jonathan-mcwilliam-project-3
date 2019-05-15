let incrementor = 0;
let levelIncrementor = 2;

const questionArr = [
  "Using flexbox properties how would you align mario to the target",
  "question 2",
  "question 3",
  "question 4",
  "question 5"
];

$(document).ready(function() {
  $(".mario").on("click", function() {
    // prompt("what is marios favourite game?");
  });
  $("form").on("submit", function(e) {
    e.preventDefault();
    let firstQuestion = $(".firstQuestion").val();
    let secondQuestion = $(".secondQuestion").val();
    if (firstQuestion === "flex-end" && secondQuestion === "center") {
      incrementor++;
      positionIncrementor = () => {};
      $(".scoreValue").html(incrementor);
      $(".mario").css({ left: "93%", bottom: "38.5%" });
      $(".background").toggleClass("animated fadeOut delay-1s");
      setTimeout(function() {
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".wrapper").css("background-position", "10% 0");
        $(".mario").css({ left: `${levelIncrementor + 15}%` });
        $(".target").css({ right: `46%`, bottom: "26%" });
        $(".questions").text("Question 2");
      }, 2000);
    } else {
      $(".background").toggleClass("animated fadeOut");
      setTimeout(function() {
        $(".mario").css({ left: "93%", bottom: "38.5%" });
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".wrapper").css("background-position", "10% 0");
        $(".mario").css({ left: `${levelIncrementor + 15}%` });
      }, 2000);
    }
  });
});
