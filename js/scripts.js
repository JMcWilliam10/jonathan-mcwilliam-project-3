let globalIncrementor = 0;
let score = 0;
let levelIncrementor = 2;

let level = [
  // Level one
  {
    marioPositon: function() {
      $(".mario").css({ left: "93%", bottom: "38.5%" });
    }
  },
  // Level two
  { marioPosition: function() {} }
];

$(document).ready(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    if (
      $(".firstQuestion").val() === "flex-end" &&
      $(".secondQuestion").val() === "center"
    ) {
      score++;
      globalIncrementor++;
      positionIncrementor = () => {};
      $(".scoreValue").html(score);
      $(".mario").css({ left: "93%", bottom: "38.5%" });
      $(".background").toggleClass("animated fadeOut delay-1s");
      setTimeout(function() {
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".levelBackground").css("background-position", "10% 0");
        $(".mario").css({ left: `${levelIncrementor + 15}%` });
        $(".target").css({ right: `46%`, bottom: "26%" });
        $(".questions").text(
          `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
        );
        $(".subQuestion1").text("top: ");
        $(".subQuestion2").text("left: ");
        $(".subQuestion1Option1")
          .val("30%")
          .html("30%");
        $(".subQuestion1Option2")
          .val("40%")
          .html("40%");
        $(".subQuestion1Option3")
          .val("50%")
          .html("50%");
        $(".subQuestion1Option4")
          .val("60%")
          .html("60%");
        $(".subQuestion2Option1")
          .val("30%")
          .html("30%");
        $(".subQuestion2Option2")
          .val("40%")
          .html("40%");
        $(".subQuestion2Option3")
          .val("50%")
          .html("50%");
        $(".subQuestion2Option4")
          .val("60%")
          .html("60%");
      }, 2000);
    } else {
      globalIncrementor++;
      $(".background").toggleClass("animated fadeOut");
      setTimeout(function() {
        $(".mario").css({ left: "93%", bottom: "38.5%" });
        $(".background").toggleClass("animated fadeOut delay-1s");
        $(".levelBackground").css("background-position", "10% 0");
        $(".target").css({
          right: `46%`,
          bottom: "26%"
        });
        $(".mario").css({ left: `${levelIncrementor + 15}%` });
        $(".questions").text(
          `Mario is 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
        );
        $(".subQuestion1").text(`second question`);
        $(".subQuestion1").text("top");
        $(".subQuestion2").text("left");
        $(".subQuestion1Option1")
          .val("30%")
          .html("30%");
        $(".subQuestion1Option2")
          .val("40%")
          .html("40%");
        $(".subQuestion1Option3")
          .val("50%")
          .html("50%");
        $(".subQuestion1Option4")
          .val("60%")
          .html("60%");
        $(".subQuestion2Option1")
          .val("30%")
          .html("30%");
        $(".subQuestion2Option2")
          .val("40%")
          .html("40%");
        $(".subQuestion2Option3")
          .val("50%")
          .html("50%");
        $(".subQuestion2Option4")
          .val("60%")
          .html("60%");
      }, 2000);
    }
  });
});
