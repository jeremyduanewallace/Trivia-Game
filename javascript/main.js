
$(document).ready(function(){
  var counter = 0;
  var questions = [];
  var questionIndex = 0;
  var currentPlayer = '1';
  

  function appendPoint(points){
    if(currentPlayer === '1'){
      var currentPoints = parseInt($('div.player1').html());
      $('div.player1').html(currentPoints + points)
      currentPlayer = '2';
    }else if (currentPlayer === '2'){
      $('div.player2').html(points);
    }
  }


  // randomInt function
  function randomInt(){
    return Math.floor(6 * Math.random());
  }

  
  // submit function
  $('#answer_form').submit(function(event){
    event.preventDefault();
    console.log('Checking answer');
    checkAnswer();
  });

  
  // form validation check answer
  function checkAnswer(){
    var answer = $('#answer_input').val();
    if(answer.toLowerCase() === questions[questionIndex].answer.toLowerCase()){
       appendPoint(questions[questionIndex].value)
       alert('correct');
    } else {
      alert('wrong');
    }
  }


  // get request trivia random question
  $("button.random").click(function(data){
    console.log('clicked');
      $.getJSON("http://jservice.io/api/random?&count=20", function(result){
        questions = result;
        console.log('results', result);
        $("div.card").html(result[0].question);
        counter++
      });
  });



   // get request trivia 100 points
  $("button.one").click(function(data){
    console.log('clicked');
      $.getJSON("http://jservice.io/api/clues?&value=100", function(result){
        questions = result;
        questionIndex = randomInt();
        console.log('results', result);
        $("div.card").html(result[questionIndex].question);
        counter++
      });
  });


  // get request trivia 200 points
  $("button.two").click(function(data){
    console.log('clicked');
      $.getJSON("http://jservice.io/api/clues?&value=200", function(result){
        questions = result;
        questionIndex = randomInt();
        console.log('results', result);
        $("div.card").html(result[questionIndex].question);
        counter++
      });
  });


  // get request trivia 400 points
  $("button.four").click(function(data){
    console.log('clicked');
      $.getJSON("http://jservice.io/api/clues?&value=400", function(result){
        questions = result;
        questionIndex = randomInt();
        console.log('results', result);
        $("div.card").html(result[questionIndex].question);
        counter++
      });
  });


  // get request trivia 800 points
  $("button.eight").click(function(data){
    console.log('clicked');
      $.getJSON("http://jservice.io/api/clues?&value=800", function(result){
        questions = result;
        questions = randomInt();
        console.log('results', result);
        $("div.card").html(result[questionIndex].question);
        counter++
      });
  });



}) 

 
