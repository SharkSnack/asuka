$(document).ready(function() {
  // load some HTML
  try {
    console.log(window.location.pathname);
    $("#header").load("../html/header.html", function() {
      console.log('i - loaded header');
    });
  } catch(e) {
    console.log(e);
  }
});
