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
  $form.on("submit", function(e) {
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
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $(".mario").css({ left: "9%", bottom: "23.5%" });
    $levelBackground.css("background-position", "14% 0");
    $target.css({ right: "34.5%", bottom: "34%" });
    $questions.text("Question 3");
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
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $mario.css({ left: "5%", bottom: "31%" });
    $levelBackground.css("background-position", "19.5% 0");
    $target.css({ right: `47.5%`, bottom: "41%" });
    $questions.text("Question 4");
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
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $mario.css({ left: "5%", bottom: "38%" });
    $levelBackground.css("background-position", "23.7% 0");
    $target.css({ right: `32.5%`, bottom: "41%" });
    $questions.text("Question 5");
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
      app.level6();
    } else {
      app.level6();
    }
  });
};
app.level6 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "29.5% 0");
    $mario.css({ left: "5%", bottom: "38%" });
    $target.css({ right: `5%`, bottom: "15%" });
    $questions.text("Question 6");
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
app.level7 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "37.5% 0");
    $mario.css({ left: "8%", bottom: "10%" });
    $target.css({ right: `19%`, bottom: "68%" });
    $questions.text("Question 7");
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
      app.level8();
    } else {
      app.level8();
    }
  });
};
app.level8 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "44.5% 0");
    $mario.css({ left: "7%", bottom: "67%" });
    $target.css({ right: `14%`, bottom: "40%" });
    $questions.text("Question 8");
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
      app.level9();
    } else {
      app.level9();
    }
  });
};
app.level9 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "52% 0");
    $mario.css({ left: "7%", bottom: "38%" });
    $target.css({ right: `1%`, bottom: "40%" });
    $questions.text("Question 9");
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
      app.level10();
    } else {
      app.level10();
    }
  });
};
app.level10 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "60.8% 0");
    $mario.css({ left: "7%", bottom: "38%" });
    $target.css({ right: `21%`, bottom: "70%" });
    $questions.text("Question 10");
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
      app.level11();
    } else {
      app.level11();
    }
  });
};
app.level11 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "67.6% 0");
    $mario.css({ left: "7%", bottom: "67%" });
    $target.css({ right: `42%`, bottom: "41%" });
    $questions.text("Question 11");
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
      app.level12();
    } else {
      app.level12();
    }
  });
};
app.level12 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "72.4% 0");
    $mario.css({ left: "6%", bottom: "38.5%" });
    $target.css({ right: "12%", bottom: "41%" });
    $questions.text("Question 12");
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
      app.level13();
    } else {
      app.level13();
    }
  });
};
app.level13 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "80.2% 0");
    $mario.css({ left: "6%", bottom: "38.5%" });
    $target.css({ right: "12%", bottom: "17%" });
    $questions.text("Question 13");
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
      app.level14();
    } else {
      app.level14();
    }
  });
};
app.level14 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "88% 0");
    $mario.css({ left: "6%", bottom: "10%" });
    $target.css({ right: "17%", bottom: "42%" });
    $questions.text("Question 14");
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
      app.level15();
    } else {
      app.level15();
    }
  });
};
app.level15 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $scoreValue.html(score);
    $levelBackground.css("background-position", "95.3% 0");
    $mario.css({ left: "6%", bottom: "38%" });
    $target.css({ right: "17%", bottom: "72%" });
    $questions.text("Question 15");
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
      app.level16();
    } else {
      app.level16();
    }
  });
};
app.brightness = () => {
  $(".background").css("filter", " brightness(1.25)");
};

$(document).ready(function() {
  setTimeout($levelBackground.css("background-position", "2% 0"), 1);
  app.level2();
});
