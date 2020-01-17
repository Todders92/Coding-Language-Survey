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
    var q6 = parseInt($("input:radio[name=database]:checked").val());
    var q7 = parseInt($("input:radio[name=design]:checked").val());
    var q8 = parseInt($("input:radio[name=experience]:checked").val());
    var q9 = parseInt($("input:radio[name=enjoy]:checked").val());
    var q10 = parseInt($("input:radio[name=helpful]:checked").val());
    var score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10
    console.log("quesion 1 value: " + q1);
    console.log("quesion 2 value: " + q2);
    console.log("quesion 3 value: " + q3);
    console.log("quesion 4 value: " + q4);
    console.log("quesion 5 value: " + q5);
    console.log("quesion 6 value: " + q6);
    console.log("quesion 7 value: " + q7);
    console.log("quesion 8 value: " + q8);
    console.log("quesion 9 value: " + q9);
    console.log("quesion 10 value: " + q10);
    

    if (score >= 45) {
      $(".ruby").show();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 45 && score >= 38) {
      $(".ruby").hide();
      $(".csharp").show();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 38 && score >= 31) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").show();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 31 && score >= 24) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").show();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 24 && score >= 17) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").show();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 17 && score >= 10) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").show();
      $(".error").hide();
    } else if (score < 10) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").show();
    } 
  });
});