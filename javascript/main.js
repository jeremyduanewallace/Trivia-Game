$(document).ready(function(){
  var counter = 0;
  var questions = [];
  var questionIndex = 0;
  var currentPlayer = '1';
  var comedyQuestions = null;
  var carQuestions = null;
  var songQuestions = null;
  var colorQuestions = null;
  var moneyQuestions = null;
  var catQuestions = null;
  


  // append points ************************************************
  function appendPoint(points){
    if(currentPlayer === '1'){
      var currentPoints = parseInt($('div.player1').html());
      $('div.player1').html(currentPoints + points);
      addPoints(currentPoints + points);
      currentPlayer = '2';
    }else if (currentPlayer === '2'){
      var currentPoints = parseInt($('div.player2').html());
      $('div.player2').html(currentPoints + points);
      currentPlayer = '1'
    }else{
      currentPlayer = '1';
    }
  }


  // randomInt function ********************************************
  function randomInt(){
    return Math.floor(2 * Math.random());
  }

  
  // submit function ***********************************************
  $('#answer_form').submit(function(event){
    event.preventDefault();
    checkAnswer();
    document.getElementById('answer_form').reset();
    
    
  });

  
  // form validation check answer **********************************
  function checkAnswer(){
    var answer = $('#answer_input').val();
    var actualAnswer = questions[questionIndex].answer.replace("-", " ");
    actualAnswer = actualAnswer.trim();
    answer = answer.trim();
    if(answer.toLowerCase() === actualAnswer.toLowerCase()){
       appendPoint(questions[questionIndex].value)
       $('#correct p').fadeIn(2000);
       $('#correct p').fadeOut(2000);
    } else {
      $('#wrong p').fadeIn(1000);
      $('#wrong p').fadeOut(3000);
       

    }
  }

  // add points *****************************************************
  function addPoints(num){
    if(num > 200){
      $('#winner p').fadeIn(2000);
    }
  }
    
   
    
  // get request trivia comedy ***************************************
  $("button.comedy").click(function(data){
    console.log(questionIndex);
    if(comedyQuestions) {
      console.log('comedy questions already exists');
      questionIndex = randomInt();
      $("div.card").html(comedyQuestions[questionIndex].question);
      counter++
      return;
     }else{
      $.getJSON("http://jservice.io/api/clues/?category=20", function(result){
        questions = result;
        comedyQuestions = result;
        questionIndex = randomInt();
        console.log('comedy', result); 
        $("div.card").html(result[questionIndex].question);
        counter++
      });
    }
  });



   // get request trivia cars *******************************************
  $("button.car").click(function(data){
    console.log(questionIndex);
     if(carQuestions){
      console.log('car questions already exists');
      questionIndex = randomInt(); 
      $("div.card").html(carQuestions[questionIndex].question);
      counter++
      return;
     }else{
      $.getJSON("http://jservice.io/api/clues/?category=16", function(result){
        questions = result;
        carQuestions = result;
        questionIndex = randomInt();
        console.log('car', result); 
        $("div.card").html(result[questionIndex].question);
        counter++
      });
     }
  });


  // get request trivia silly songs *************************************
  $("button.silly").click(function(data){
    console.log(questionIndex);
     if(songQuestions){
      console.log('song questions already exists');
      questionIndex = randomInt();
      $("div.card").html(songQuestions[questionIndex].question);
      counter++
       return;
     }else{
      $.getJSON("http://jservice.io/api/clues/?category=27", function(result){
        questions = result;
        questionIndex = randomInt();
        console.log('song', result); 
      if(result[questionIndex].question === ""){
          result.splice(questionIndex, 4)
        }
          songQuestions = result;
          $("div.card").html(result[questionIndex].question);
          counter++
        });
      }
  });


  // get request trivia colors *********************************************
  $("button.color").click(function(data){
    console.log(questionIndex)
      if(colorQuestions){
       console.log('color questions already exists');
       questionIndex = randomInt();
       $("div.card").html(carQuestions[questionIndex].question);
       counter++
       return;
       }else{
        $.getJSON("http://jservice.io/api/clues/?category=36", function(result){
          questions = result;
          carQuestions = result;
          questionIndex = randomInt();
          console.log('color', result); 
          $("div.card").html(result[questionIndex].question);
          counter++
        });
      }
  });


  // get request trivia money ***********************************************
  $("button.money").click(function(data){
    console.log(questionIndex)
    if(moneyQuestions){
      console.log('money questions already exist');
      questionsIndex = randomInt();
      $("div.card").html(moneyQuestions[questionIndex].question);
      counter++
      return;
      }else{
      $.getJSON("http://jservice.io/api/clues/?category=76", function(result){
        questions = result;
        moneyQuestions = result;
        questionsIndex = randomInt();
        console.log('money', result); 
        if(moneyQuestions[questionIndex].question === ""){
          result.splice(questionIndex, 1)
        }
        $("div.card").html(result[questionIndex].question);
        counter++
      });
    }
  });

  
  // get request trivia cat ergory **********************************************
  $("button.cat").click(function(data){
    console.log(questionIndex);
    if(catQuestions) {
      console.log('cat questions already exists');
      questionIndex = randomInt();
      $("div.card").html(catQuestions[questionIndex].question);
      counter++
      return;
      }else{
      $.getJSON("http://jservice.io/api/clues/?category=6", function(result){
        questions = result;
        comedyQuestions = result;
        questionIndex = randomInt();
        console.log('cat', result); 
         $("div.card").html(result[questionIndex].question);
        counter++
      });
    }
  });



}) 


  


 
