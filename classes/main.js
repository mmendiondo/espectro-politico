


function loadJson()
{
  var txt = "";

  jsonObject.preguntas.forEach(function(pregunta, index)
      {
        let pregsDiv = document.getElementById("preguntas");
        let b = document.createElement("button");
        b.type = "button";
        b.className = "test-question" + (index == 0? " show": "");

        let title = document.createElement("h2");
        title.innerHTML = pregunta.title;
        b.append(title);

        //b.addEventListener("click", function() {
        //  this.classList.toggle("active");
        //});

        let d = document.createElement("div");
        let h2 = document.createElement("h3");

        h2.innerHTML = pregunta.description;
        d.className = "content " + pregunta.type;
        d.append(h2);

        pregsDiv.append(b);
        b.append(d);
        
        pregunta.options.forEach(function(option){
          
          let optDiv = document.createElement("div");
         
          optDiv.setAttribute('data-id',pregunta.id);
          optDiv.setAttribute('data-value',option.value);
          optDiv.className = "option " + option.value;
          optDiv.innerHTML = option.text;
          optDiv.addEventListener("click", function() {
            showNextQuestion();
            Array.from(this.parentElement.children).forEach(function(elem){elem.classList.remove("selected");})
            this.classList.toggle("selected");
            if(index == 29)
            {
              finalize();
            }
          });
          d.append(optDiv);
        });
      });
}


var btn = document.getElementsByClassName("btn")[0];
function restart()
{
  currentQuestionIndex = 0;
  document.getElementsByClassName("test-question")[0].classList.add('show');
  experiment.classList.remove('show');
}
btn.addEventListener("click", restart);

function finalize() {

  experiment.classList.add('show');
  var options = document.getElementsByClassName("selected");
  const mapSelected = Array.from(options).map(x => ({
      "id": x.getAttribute("data-id"),
      "selected": x.getAttribute("data-value")
    }));
  var myresult = document.getElementById('myresult-ball');
  setBallPosition(myresult, mapSelected);
  orientateBall(myresult, xTransform || -10,  yTransform || -40);

  Object.keys(movements).forEach(function(key)
    {

        if(!document.getElementById(key + "-ball"))
        {
          let figure = document.createElement("figure");
          let span = document.createElement("span");
          span.className="result";
          span.innerHTML = key;
          
          figure.className = "ball";
          figure.id = key + "-ball";
          figure.append(span);

          cube.append(figure);

          setBallPosition(figure, movements[key].respuestas);
          orientateBall(figure, xTransform || -10,  yTransform || -40);
        }
    }
  );
}

loadJson();


const testQuestions = document.querySelectorAll('.test-question');
let currentQuestionIndex = 0;

function showNextQuestion() {
  if (currentQuestionIndex < testQuestions.length) {
    testQuestions[currentQuestionIndex].classList.remove('show');
    currentQuestionIndex++;
    if (currentQuestionIndex < testQuestions.length) {
    requestAnimationFrame(() => {
          testQuestions[currentQuestionIndex].classList.add('show');
        });
    }
  }
}
   
var xAngle = 0, yAngle = 0;
var xBallsAngle = 0, yBallsAngle = 0;

var xballTransform = 0;
var yballTransform = 0;
var zballTransform = 0;

var cube = document.getElementById("cube");
var experiment = document.getElementById("experiment");
var deltaX = 0;
var touchXPos = 0;
var deltaY = 0;
var touchYPos = 0;
var mousedownID = -1;  //Global ID of mouse down interval

function mousedown(event) {
  //Prevent multimple loops!
  if(mousedownID==-1)  
    mousedownID = setInterval(function(){whilemousedown(event.x || event.targetTouches[0].clientX, event.y || event.targetTouches[0].clientY);}, 50);
}

function mousemove(event)
{
  touchYPos = event.x || event.targetTouches[0].clientX;
  touchXPos = event.y || event.targetTouches[0].clientY;
}

function mouseup(event) {
  originXtransform = xTransform;
  originYtransform = yTransform;

   if(mousedownID!=-1) {  //Only stop if exists
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}

let scale = 1;
function wheel(event) {

  event.preventDefault();

  scale += event.deltaY * -0.001;

  // Restrict scale
  scale = Math.min(Math.max(0.325, scale), 2.5);

  // Apply scale transform
  cube.style.transform = " scale(" + scale + ")" + "rotateX("+(xTransform)+"deg) rotateY("+(-yTransform)+"deg)" ;

}

var xTransform = 10;
var yTransform = -40;
var originXtransform = 0;
var originYtransform = 0;

Array.from(document.getElementsByClassName('ball')).forEach(function(ball)
{
    moveBallToPosition(ball, 0, 0, 0);
    orientateBall(ball, -10, -40);
});

function whilemousedown(initialPositionY, initialPositionX) {
 
    xTransform = originXtransform + ((initialPositionX-touchXPos)/3)*Math.PI;
    yTransform = originYtransform + ((initialPositionY-touchYPos)/3)*Math.PI;

    cube.style.transform =  " scale(" + scale + ")" + "rotateX("+(xTransform)+"deg) rotateY("+(-yTransform)+"deg)" ;

    Array.from(document.getElementsByClassName('ball')).forEach(function(ball)
    {
        orientateBall(ball, xTransform, yTransform);
    });  
}

function moveBallToPosition(ball, x, y, z)
{
  const regex = /translate3d(.*) /i;
  ball.style.webkitTransform = "translate3d("+x+"px"+","+y+"px"+","+(z-150)+"px) " + ball.style.webkitTransform.replace(regex, '') ;
  ball.style.background  = "rgba("+x+","+y+","+z+",0.8)";
  ball.style.background = "radial-gradient(circle at 75% 25%, #ffffff, " + "rgba("+x+","+y+","+z+",1)" +" 70%, #000000 100%)";
}

function orientateBall(ball, xDegTransform, yDegTransform)
{
  const regex = / rotateY(.*)/i;
  const regex2 = / rotateX(.*)/i;
  ball.style.webkitTransform = ball.style.webkitTransform.replace(regex, '').replace(regex2, '') + " rotateY("+(yDegTransform)+"deg)" + " rotateX("+(-xDegTransform)+"deg)";
}

['mousedown','touchstart'].forEach( function(evt) {
    experiment.addEventListener(evt, mousedown, false);
});

['mousemove','touchmove'].forEach( function(evt) {
    experiment.addEventListener(evt, mousemove, false);
});

['mouseup','mouseout', 'touchend', 'touchcancel'].forEach( function(evt) {
    experiment.addEventListener(evt, mouseup, false);
});

['wheel'].forEach( function(evt) {
    experiment.addEventListener(evt, wheel, false);
});

function setBallPosition(ball, selections)
{
    var x = 0;
    var y=0;
    var z = 0;

    
    for (i = 0; i < selections.length; i++)
    {
      var pregunta = jsonObject.preguntas.find(element => element.id == selections[i].id);
      var optionIndex = selections[i].selected - 1;

      switch(pregunta.type)
      {
        case "sociales":
          y += 15*(pregunta.options[optionIndex].value-1);
          break;
        case "economicas": 
          z += 15*(pregunta.options[optionIndex].value-1);
          break;
        case "politicas": 
          x += 15*(pregunta.options[optionIndex].value-1);
          break;
        default: console.log(`${pregunta.value}.`);
      }
    }
    
    moveBallToPosition(ball, x, y, z);
}
