//below this line is back end logic

//below this line is front end logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($("input:radio[name=bear]:checked").val());
    var question2 = parseInt($("input:radio[name=problem]:checked").val());
    var question3 = parseInt($("input:radio[name=page]:checked").val());
    var question4 = parseInt($("input:radio[name=day]:checked").val());
    var question5 = parseInt($("input:radio[name=personality]:checked").val());
    var question6 = parseInt($("input:radio[name=database]:checked").val());
    var question7 = parseInt($("input:radio[name=design]:checked").val());
    var question8 = parseInt($("input:radio[name=experience]:checked").val());
    var question9 = parseInt($("input:radio[name=enjoy]:checked").val());
    var question10 = parseInt($("input:radio[name=helpful]:checked").val());
    var score = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 +question10
    console.log("quesion 1 value: " + question1);
    console.log("quesion 2 value: " + question2);
    console.log("quesion 3 value: " + question3);
    console.log("quesion 4 value: " + question4);
    console.log("quesion 5 value: " + question5);
    console.log("quesion 6 value: " + question6);
    console.log("quesion 7 value: " + question7);
    console.log("quesion 8 value: " + question8);
    console.log("quesion 9 value: " + question9);
    console.log("quesion 10 value: " + question10);
    //for checking if radio buttons return proper values

    if (score >= 45) {
      $(".ruby").hide();
      $(".csharp").show();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 45 && score >= 38) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").show();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 38 && score >= 31) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").show();
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
      $(".ruby").show();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").hide();
      $(".javascript").hide();
      $(".error").hide();
    } else if (score < 17 && score >= 10) {
      $(".ruby").hide();
      $(".csharp").hide();
      $(".rust").hide();
      $(".react").hide();
      $(".python").show();
      $(".javascript").hide();
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