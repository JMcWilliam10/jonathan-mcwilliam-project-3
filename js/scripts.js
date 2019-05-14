$(document).ready(function() {
  $(".mario").on("click", function() {
    // prompt("what is marios favourite game?");
    $(".mario")
      .css({ left: "93%", top: "40%" })
      .delay(5000);
    // $(".background")
    //   .delay(800)
    //   .toggleClass("animated fadeOut");
  });
});
