let score = 0;
let lives = 5;
const app = {};
const $form = $("form"),
  $scoreValue = $(".scoreValue"),
  $mario = $(".mario"),
  $levelBackground = $(".levelBackground"),
  $target = $(".target"),
  $coin = $(".coin"),
  $life = $(".life"),
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
  $userInput2 = $(".secondQuestion"),
  $hotCops = $(".hotCops");

app.setLevel1 = () => {
  $life.text(lives);
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
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "52%" && $userInput2.val() === "1%") {
      app.incrementor();
      app.level3();
    } else {
      app.incorrect();
      app.level3();
    }
    $scoreValue.html(score);
    $mario.css({ left: "17%", bottom: "38.5%" });
    $levelBackground.css("background-position", "10% 0");
    $target.css({ right: `46%`, bottom: "26%" });
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
    e.preventDefault();
    $form.unbind("submit");
    $scoreValue.html(score);
    if ($userInput1.val() === "26%" && $userInput2.val() === "46%") {
      app.incrementor();
      app.level4();
    } else {
      app.incorrect();
      app.level4();
    }
    $mario.css({ left: "9%", bottom: "23.5%" });
    $levelBackground.css("background-position", "14% 0");
    $target.css({ right: "34.5%", bottom: "34%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("14.5%").html("14.5%");
    $subQuestion1Option2.val("34.5%").html("34.5%");
    $subQuestion1Option3.val("54.5%").html("54.5%");
    $subQuestion1Option4.val("74.5%").html("74.5%");
    $subQuestion2Option1.val("14%").html("14%");
    $subQuestion2Option2.val("34%").html("34%");
    $subQuestion2Option3.val("54%").html("54%");
    $subQuestion2Option4.val("74%").html("74%");
  });
};
app.level4 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    $scoreValue.html(score);
    if ($userInput1.val() === "34.5%" && $userInput2.val() === "34%") {
      app.incrementor();
      app.level5();
    } else {
      app.incorrect();
      app.level5();
    }
    $mario.css({ left: "5%", bottom: "31%" });
    $levelBackground.css("background-position", "19.5% 0");
    $target.css({ right: `47.5%`, bottom: "41%" });
    $subQuestion1.text("bottom: ");
    $subQuestion2.text("right: ");
    $subQuestion1Option1.val("21%").html("21%");
    $subQuestion1Option2.val("41%").html("41%");
    $subQuestion1Option3.val("61%").html("61%");
    $subQuestion1Option4.val("81%").html("81%");
    $subQuestion2Option1.val("87.5%").html("87.5%");
    $subQuestion2Option2.val("67.5").html("67.5%");
    $subQuestion2Option3.val("47.5%").html("47.5%");
    $subQuestion2Option4.val("27.5%").html("25.5%");
  });
};
app.level5 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "41%" && $userInput2.val() === "47.5%") {
      app.incrementor();
      app.level6();
    } else {
      app.incorrect();
      app.level6();
    }
    $scoreValue.html(score);
    $mario.css({ left: "5%", bottom: "38%" });
    $levelBackground.css("background-position", "23.7% 0");
    $target.css({ right: `32.5%`, bottom: "41%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("12.5%").html("12.5%");
    $subQuestion1Option2.val("32.5%").html("32.5%");
    $subQuestion1Option3.val("52.5%").html("52.5%");
    $subQuestion1Option4.val("72.5%").html("72.5%");
    $subQuestion2Option1.val("1%").html("1%");
    $subQuestion2Option2.val("21%").html("21%");
    $subQuestion2Option3.val("41%").html("41%");
    $subQuestion2Option4.val("61%").html("61%");
  });
};
app.level6 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "32.5%" && $userInput2.val() === "41%") {
      app.incrementor();
      app.level7();
    } else {
      app.incorrect();
      app.level7();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "29.5% 0");
    $mario.css({ left: "5%", bottom: "38%" });
    $target.css({ right: `5%`, bottom: "15%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("65%").html("65%");
    $subQuestion1Option2.val("45%").html("45%");
    $subQuestion1Option3.val("25%").html("25%");
    $subQuestion1Option4.val("5%").html("5%");
    $subQuestion2Option1.val("15%").html("15%");
    $subQuestion2Option2.val("35%").html("35%");
    $subQuestion2Option3.val("55%").html("55%");
    $subQuestion2Option4.val("75%").html("75%");
  });
};
app.level7 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "5%" && $userInput2.val() === "15%") {
      app.incrementor();
      app.level8();
    } else {
      app.incorrect();
      app.level8();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "37.5% 0");
    $mario.css({ left: "8%", bottom: "10%" });
    $target.css({ right: "19%", bottom: "68%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("19%").html("19%");
    $subQuestion1Option2.val("39%").html("39%");
    $subQuestion1Option3.val("59%").html("59%");
    $subQuestion1Option4.val("69%").html("79%");
    $subQuestion2Option1.val("28%").html("28%");
    $subQuestion2Option2.val("48%").html("48%");
    $subQuestion2Option3.val("68%").html("68%");
    $subQuestion2Option4.val("88%").html("88%");
  });
};
app.level8 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "19%" && $userInput2.val() === "68%") {
      app.incrementor();
      app.level9();
    } else {
      app.incorrect();
      app.level9();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "44.5% 0");
    $mario.css({ left: "7%", bottom: "67%" });
    $target.css({ right: `14%`, bottom: "40%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("14%").html("14%");
    $subQuestion1Option2.val("34%").html("34%");
    $subQuestion1Option3.val("54%").html("54%");
    $subQuestion1Option4.val("74%").html("74%");
    $subQuestion2Option1.val("0%").html("0%");
    $subQuestion2Option2.val("20%").html("20%");
    $subQuestion2Option3.val("40%").html("40%");
    $subQuestion2Option4.val("60%").html("60%");
  });
};
app.level9 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "14%" && $userInput2.val() === "40") {
      app.incrementor();
      app.level10();
    } else {
      app.incorrect();
      app.level10();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "52% 0");
    $mario.css({ left: "7%", bottom: "38%" });
    $target.css({ right: `1%`, bottom: "40%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("61%").html("61%");
    $subQuestion1Option2.val("41%").html("41%");
    $subQuestion1Option3.val("21%").html("21%");
    $subQuestion1Option4.val("1%").html("1%");
    $subQuestion2Option1.val("0%").html("0%");
    $subQuestion2Option2.val("20%").html("20%");
    $subQuestion2Option3.val("40%").html("40%");
    $subQuestion2Option4.val("60%").html("60%");
  });
};
app.level10 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "1%" && $userInput2.val() === "40%") {
      app.incrementor();
      app.level11();
    } else {
      app.incorrect();
      app.level11();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "60.8% 0");
    $mario.css({ left: "7%", bottom: "38%" });
    $target.css({ right: `21%`, bottom: "70%" });
    $subQuestion1.text("bottom: ");
    $subQuestion2.text("right: ");
    $subQuestion1Option1.val("70%").html("70%");
    $subQuestion1Option2.val("50%").html("50%");
    $subQuestion1Option3.val("30%").html("30%");
    $subQuestion1Option4.val("10%").html("10%");
    $subQuestion2Option1.val("61%").html("61%");
    $subQuestion2Option2.val("41%").html("41%");
    $subQuestion2Option3.val("21%").html("21%");
    $subQuestion2Option4.val("1%").html("1%");
  });
};
app.level11 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "70%" && $userInput2.val() === "21%") {
      app.incrementor();
      app.level12();
    } else {
      app.incorrect();
      app.level12();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "67.6% 0");
    $mario.css({ left: "7%", bottom: "67%" });
    $target.css({ right: `42%`, bottom: "41%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("22%").html("22%");
    $subQuestion1Option2.val("42%").html("42%");
    $subQuestion1Option3.val("62%").html("62%");
    $subQuestion1Option4.val("82%").html("82%");
    $subQuestion2Option1.val("1%").html("1%");
    $subQuestion2Option2.val("21%").html("21%");
    $subQuestion2Option3.val("41%").html("41%");
    $subQuestion2Option4.val("61%").html("61%");
  });
};
app.level12 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "42%" && $userInput2.val() === "41%") {
      app.incrementor();
      app.level13();
    } else {
      app.incorrect();
      app.level13();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "72.4% 0");
    $mario.css({ left: "6%", bottom: "38.5%" });
    $target.css({ right: "12%", bottom: "41%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("72%").html("72%");
    $subQuestion1Option2.val("52%").html("52%");
    $subQuestion1Option3.val("32%").html("32%");
    $subQuestion1Option4.val("12%").html("12%");
    $subQuestion2Option1.val("21%").html("21%");
    $subQuestion2Option2.val("41%").html("41%");
    $subQuestion2Option3.val("61%").html("61%");
    $subQuestion2Option4.val("81%").html("81%");
  });
};
app.level13 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "12%" && $userInput2.val() === "41%") {
      app.incrementor();
      app.level14();
    } else {
      app.level14();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "80.2% 0");
    $mario.css({ left: "6%", bottom: "38.5%" });
    $target.css({ right: "12%", bottom: "17%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("12%").html("12%");
    $subQuestion1Option2.val("32%").html("32%");
    $subQuestion1Option3.val("52%").html("52%");
    $subQuestion1Option4.val("72%").html("72%");
    $subQuestion2Option1.val("17%").html("17%");
    $subQuestion2Option2.val("37%").html("37%");
    $subQuestion2Option3.val("57%").html("57%");
    $subQuestion2Option4.val("77%").html("77%");
  });
};
app.level14 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "12%" && $userInput2.val() === "17%") {
      app.incrementor();
      app.level15();
    } else {
      app.level15();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "88% 0");
    $mario.css({ left: "6%", bottom: "10%" });
    $target.css({ right: "17%", bottom: "42%" });
    $subQuestion1.text("right: ");
    $subQuestion2.text("bottom: ");
    $subQuestion1Option1.val("77%").html("77%");
    $subQuestion1Option2.val("57%").html("57%");
    $subQuestion1Option3.val("37%").html("37%");
    $subQuestion1Option4.val("17%").html("17%");
    $subQuestion2Option1.val("42%").html("42%");
    $subQuestion2Option2.val("62%").html("62%");
    $subQuestion2Option3.val("82%").html("82%");
    $subQuestion2Option4.val("100%").html("100%");
  });
};
app.level15 = () => {
  $form.on("submit", function(e) {
    e.preventDefault();
    $form.unbind("submit");
    if ($userInput1.val() === "17%" && $userInput2.val() === "42%") {
      app.incrementor();
      // app.level16();
    } else {
      // app.level16();
    }
    $scoreValue.html(score);
    $levelBackground.css("background-position", "95.3% 0");
    $mario.css({ left: "6%", bottom: "38%" });
    $target.css({ right: "17%", bottom: "72%" });
    $subQuestion1.text("bottom: ");
    $subQuestion2.text("right: ");
    $subQuestion1Option1.val("72%").html("72%");
    $subQuestion1Option2.val("52%").html("52%");
    $subQuestion1Option3.val("32%").html("32%");
    $subQuestion1Option4.val("12%").html("12%");
    $subQuestion2Option1.val("17%").html("17%");
    $subQuestion2Option2.val("37%").html("37%");
    $subQuestion2Option3.val("57%").html("57%");
    $subQuestion2Option4.val("77%").html("77%");
  });
};

app.incrementor = () => {
  score++;
  $scoreValue.html(score);
  coin.play();
};
app.incorrect = () => {
  lives--;
  $scoreValue.html(score);
  wrong.play();
  if (lives > 0) {
    $life.text(lives);
  } else {
    $("lives").text(`Last Life...`);
    if (lives === 0) {
      $("mario").css("scale", "5");
      alert("you're out of lives! try again!");
      setTimeout(function() {
        location.reload();
      }, 1);
    }
  }
};
// app.brightness = () => {
//   $(".background").css("filter", " brightness(1.25)");
// };
app.theme = () => {
  theme.play();
};
app.themeStop = () => {
  theme.pause();
};
app.kawhi = () => {
  $(".kawhi").css("display", "block");
  $mario.css("display", "none");
  $target.css("display", "none");
  $coin.css("display", "none");
  $scoreValue.css("display", "none");
  setTimeout(() => {
    $(".kawhi").css("display", "none");
    $mario.css("display", "block");
    $target.css("display", "block");
    $coin.css("display", "block");
    $scoreValue.css("display", "block");
  }, 9000);
};

app.hotCops = () => {
  $(".hotCops").css("display", "block");
  $mario.css("display", "none");
  $target.css("display", "none");
  $coin.css("display", "none");
  $scoreValue.css("display", "none");
  setTimeout(function() {
    $(".hotCops").css("display", "none");
    $mario.css("display", "block");
    $target.css("display", "block");
    $coin.css("display", "block");
  }, 12000);
};

$(document).ready(function() {
  setTimeout($levelBackground.css("background-position", "2% 0"), 1);
  app.setLevel1();
  let something = 1;
  // setInterval(() => console.log((something += 1)), 1000);
});
