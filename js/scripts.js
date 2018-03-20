$(document).ready(function() {
  $("#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });
  $("#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });
});
