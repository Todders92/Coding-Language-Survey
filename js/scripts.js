//below this line is back end logic

//below this line is front end logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=bear]:checked").val());
    var q2 = parseInt($("input:radio[name=problem]:checked").val());
    var q3 = parseInt($("input:radio[name=page]:checked").val());
    var q4 = parseInt($("input:radio[name=day]:checked").val());
    var q5 = parseInt($("input:radio[name=personality]:checked").val());
    var q6 = parseInt($("input:radio[name=problem]:checked").val());
    var q7 = parseInt($("input:radio[name=problem]:checked").val());
    var q8 = parseInt($("input:radio[name=problem]:checked").val());
    var q9 = parseInt($("input:radio[name=problem]:checked").val());
    var q10 = parseInt($("input:radio[name=problem]:checked").val());
    var score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10
    if (score >= 15) {
      $(".python").show();
    } else {
      $(".javascript").show();
    }
  });
});