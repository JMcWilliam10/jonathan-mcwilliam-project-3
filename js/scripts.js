$(document).ready(function() {
  $(".mario").on("click", function() {
    // prompt("what is marios favourite game?");
    $(".mario").css({ left: "93%", top: "40%" });

    $(".background").toggleClass("animated fadeOut delay-1s");
  });
});
// });
