let score = 0;
const app = {};
const $form = $("form"),
  $scoreValue = $("scoreValue"),
  $mario = $(".mario"),
  $levelBackground = $(".levelBackground"),
  $target = $(".target"),
  $questions = $(".questions"),
  $subQuestion1 = $(".subQuestion1"),
  $subQuestion2 = $(".subQuestion2"),
  $subQuestion1Option1 = $(".subQuestion1Option1"),
  $subQuestion1Option2 = $(".subQuestion1Option2"),
  $subQuestion1Option3 = $(".subQuestion1Option3"),
  $subQuestion1Option4 = $(".subQuestion1Option4"),
  $subQuestion2Option1 = $(".subQuestion2Option1"),
  $subQuestion2Option2 = $(".subQuestion2Option2"),
  $subQuestion2Option3 = $(".subQuestion2Option3"),
  $subQuestion2Option4 = $(".subQuestion2Option4"),
  $userInput1 = $(".firstQuestion").val(),
  $userInput2 = $(".secondQuestion").val();

app.level2 = () => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $mario.css({ left: "17%", bottom: "38.5%" });
    $levelBackground.css("background-position", "10% 0");
    $target.css({ right: `46%`, bottom: "26%" });
    $questions.text(
      `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
    );
    $subQuestion1.text("top: ");
    $subQuestion2.text("left: ");
    $subQuestion1Option1.val("30%").html("30%");
    $subQuestion1Option2.val("40%").html("40%");
    $subQuestion1Option3.val("50%").html("50%");
    $subQuestion1Option4.val("60%").html("60%");
    $subQuestion2Option1.val("30%").html("30%");
    $subQuestion2Option2.val("40%").html("40%");
    $subQuestion2Option3.val("50%").html("50%");
    $subQuestion2Option4.val("60%").html("60%");
    if ($userInput1 === "flex-end" && $userInput2 === "center") {
      score++;
      app.level3();
    } else {
      app.level3();
    }
  });
};
app.level3 = () => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(".scoreValue").html(score);
    $(".mario").css({ left: "9%", bottom: "23.5%" });
    $(".levelBackground").css("background-position", "14% 0");
    $(".target").css({ right: "34.5%", bottom: "34%" });
    $questions.text(
      `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
    );
    $subQuestion1.text("top: ");
    $subQuestion2.text("left: ");
    $subQuestion1Option1.val("30%").html("30%");
    $subQuestion1Option2.val("40%").html("40%");
    $subQuestion1Option3.val("50%").html("50%");
    $subQuestion1Option4.val("60%").html("60%");
    $subQuestion2Option1.val("30%").html("30%");
    $subQuestion2Option2.val("40%").html("40%");
    $subQuestion2Option3.val("50%").html("50%");
    $subQuestion2Option4.val("60%").html("60%");
    if ($userInput1 === "flex-end" && $userInput2 === "center") {
      score++;
      app.level4();
    } else {
      app.level4();
    }
  });
};
app.level4 = () => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(".scoreValue").html(score);
    $(".mario").css({ left: "5%", bottom: "31%" });
    $(".levelBackground").css("background-position", "19.5% 0");
    $(".target").css({ right: `47.5%`, bottom: "41%" });
    $questions.text(
      `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
    );
    $subQuestion1.text("top: ");
    $subQuestion2.text("left: ");
    $subQuestion1Option1.val("30%").html("30%");
    $subQuestion1Option2.val("40%").html("40%");
    $subQuestion1Option3.val("50%").html("50%");
    $subQuestion1Option4.val("60%").html("60%");
    $subQuestion2Option1.val("30%").html("30%");
    $subQuestion2Option2.val("40%").html("40%");
    $subQuestion2Option3.val("50%").html("50%");
    $subQuestion2Option4.val("60%").html("60%");
    if ($userInput1 === "flex-end" && $userInput2 === "center") {
      score++;
      app.level5();
    } else {
      app.level5();
    }
  });
};
app.level5 = () => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(".scoreValue").html(score);
    $(".mario").css({ left: "5%", bottom: "38%" });
    $(".levelBackground").css("background-position", "23.7% 0");
    $(".target").css({ right: `32.5%`, bottom: "41%" });
    $questions.text(
      `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
    );
    $subQuestion1.text("top: ");
    $subQuestion2.text("left: ");
    $subQuestion1Option1.val("30%").html("30%");
    $subQuestion1Option2.val("40%").html("40%");
    $subQuestion1Option3.val("50%").html("50%");
    $subQuestion1Option4.val("60%").html("60%");
    $subQuestion2Option1.val("30%").html("30%");
    $subQuestion2Option2.val("40%").html("40%");
    $subQuestion2Option3.val("50%").html("50%");
    $subQuestion2Option4.val("60%").html("60%");
    if ($userInput1 === "flex-end" && $userInput2 === "center") {
      score++;
      app.level5();
    } else {
      app.level5();
    }
  });
};

app.level6 = () => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(".scoreValue").html(score);
    $(".mario").css({ left: "93%", bottom: "38.5%" });
    $(".levelBackground").css("background-position", "4% 0");
    $(".mario").css({ left: `50%` });
    $(".target").css({ right: `46%`, bottom: "26%" });
    $questions.text(
      `Mario is placed 'position: absolute'. Mario is placed relatively to the whole level. Using absolute position how would you position mario using % values.`
    );
    $subQuestion1.text("top: ");
    $subQuestion2.text("left: ");
    $subQuestion1Option1.val("30%").html("30%");
    $subQuestion1Option2.val("40%").html("40%");
    $subQuestion1Option3.val("50%").html("50%");
    $subQuestion1Option4.val("60%").html("60%");
    $subQuestion2Option1.val("30%").html("30%");
    $subQuestion2Option2.val("40%").html("40%");
    $subQuestion2Option3.val("50%").html("50%");
    $subQuestion2Option4.val("60%").html("60%");
    if ($userInput1 === "flex-end" && $userInput2 === "center") {
      score++;
      app.level7();
    } else {
      app.level7();
    }
  });
};

app.brightness = () => {
  $(".background").css("filter", " brightness(1.25)");
};

$(document).ready(function() {
  app.level2();
});
