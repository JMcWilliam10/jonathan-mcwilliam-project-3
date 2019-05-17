let score = 0;
const app = {};
const $form = $("form"),
  $scoreValue = $(".scoreValue"),
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
  $userInput1 = $(".firstQuestion"),
  $userInput2 = $(".secondQuestion");

app.setLevel1 = () => {
  $questions.text(
    "Assuming mario is 'position: absolute' relative to the screen. Place mario to the target"
  );
  $subQuestion1.text("top: ");
  $subQuestion2.text("right: ");
  $subQuestion1Option1.val("12%").html("12%");
  $subQuestion1Option2.val("32%").html("32%");
  $subQuestion1Option3.val("52%").html("52%");
  $subQuestion1Option4.val("72%").html("72%");
  $subQuestion2Option1.val("1%").html("1%");
  $subQuestion2Option2.val("21%").html("21%");
  $subQuestion2Option3.val("41%").html("41%");
  $subQuestion2Option4.val("61%").html("61%");
  app.level2();
};

app.level2 = () => {
  $form.on("submit", function(e) {
    $form.unbind("submit");
    e.preventDefault();
    if ($userInput1.val() === "52%" && $userInput2.val() === "1%") {
      app.incrementor();
      app.level3();
    } else {
      app.level3();
    }

    $scoreValue.html(score);
    $mario.css({ left: "17%", bottom: "38.5%" });
    $levelBackground.css("background-position", "10% 0");
    $target.css({ right: `46%`, bottom: "26%" });
    $questions.text("Question 2");
    $subQuestion1.text("bottom: ");
    $subQuestion2.text("right: ");
    $subQuestion1Option1.val("86%").html("86%");
    $subQuestion1Option2.val("66%").html("66%");
    $subQuestion1Option3.val("46%").html("46%");
    $subQuestion1Option4.val("26%").html("26%");
    $subQuestion2Option1.val("26%").html("26%");
    $subQuestion2Option2.val("46%").html("46%");
    $subQuestion2Option3.val("66%").html("66%");
    $subQuestion2Option4.val("86%").html("86%");
  });
};
app.level3 = () => {
  $form.on("submit", function(e) {
    if ($userInput1.val() === "26%" && $userInput2.val() === "46%") {
      app.incrementor();
      app.level4();
    } else {
      app.level4();
    }
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
  });
};
app.level4 = () => {
  $form.on("submit", function(e) {
    if ($userInput1.val() === "flex-endr" && $userInput2.val() === "centerr") {
      app.incrementor();
      app.level5();
    } else {
      app.level5();
    }
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
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
    if ($userInput1.val() === "flex-end" && $userInput2.val() === "center") {
      app.incrementor();
      // app.level16();
    } else {
      // app.level16();
    }
  });
};

app.incrementor = () => {
  score = score + 1;
  $scoreValue.html(score);
};
app.brightness = () => {
  $(".background").css("filter", " brightness(1.25)");
};

$(document).ready(function() {
  setTimeout($levelBackground.css("background-position", "2% 0"), 1);
  app.setLevel1();
  // app.level2();
});
