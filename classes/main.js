var cube = document.getElementById("cube");
var experiment = document.getElementById("experiment");
var deltaX = 0;
var xPos = 0;
var deltaY = 0;
var yPos = 0;
var mousedownID = -1;  //Global ID of mouse down interval
function mousedown(event) {
  //Prevent multimple loops!
  if(mousedownID==-1)  
    mousedownID = setInterval(function(){whilemousedown(event.x, event.y);}, 100);
}

function mousemove(event)
{
  yPos = event.x;
  xPos = event.y;
}

function mouseup(event) {
   if(mousedownID!=-1) {  //Only stop if exists
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}
var xTransform = 0;
var yTransform = 0;
function whilemousedown(initialPositionY, initialPositionX) {
 
  xTransform = ((initialPositionX-xPos)/10)*Math.PI;
  yTransform = ((initialPositionY-yPos)/10)*Math.PI;
 
  cube.style.transform = "rotateX("+(-xTransform)+"deg) rotateY("+(-yTransform)+"deg)";
  (document.getElementsByClassName('ball')[0]).style.webkitTransform = translateBall + "rotateY("+yTransform+"deg) rotateX("+xTransform+"deg)" ;
}

//Assign events
experiment.addEventListener("mousedown", mousedown);
experiment.addEventListener("mousemove", mousemove);
experiment.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
experiment.addEventListener("mouseout", mouseup);

(document.getElementsByClassName('ball')[0]).style.webkitTransform = "rotateY(-45deg) rotateX(30deg)";

var btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", function() {
  var option = document.getElementsByClassName("selected");

  xballTransform = 0;
  yballTransform = 0;
  zballTransform = 0;


  for (i = 0; i < option.length; i++) {
    var values = calculateAxis(option[i]);
    setBallPosition(values[0],values[1],values[2]);
  }
});

var xballTransform = 0;
var yballTransform = 0;
var zballTransform = 0;

function calculateAxis(elem)
{
  const filteredArray = Array.from(elem.parentElement.classList).filter(value => ["sociales", "economicas", "politicas"].includes(value));
  const value = Array.from(elem.classList).filter(value => ["1", "2", "3"].includes(value));
  
  var multiplier = 0;
  switch(value[0])
  {
    case "1": multiplier = 0;break;
    case "2": multiplier = .5;break;
    case "3": multiplier = 1;break;
    default: console.log(`${value}.`);
  }

  switch(filteredArray[0])
  {
    case "sociales": yballTransform += (30*multiplier);break;
    case "economicas": zballTransform += (30*multiplier);break;
    case "politicas": xballTransform += (30*multiplier);break;
    default: console.log(`${filteredArray}.`);
  }

  return [xballTransform, yballTransform, zballTransform];

}

function setBallPosition(xballTransform,yballTransform,zballTransform){
  translateBall = "translate3d("+xballTransform+"px"+","+yballTransform+"px"+","+(zballTransform-150)+"px)";  
  (document.getElementsByClassName('ball')[0]).style.webkitTransform = translateBall + "rotateY("+yTransform+"deg) rotateX("+xTransform+"deg)" ;
}

var translateBall =  "translate3d("+xballTransform+"px"+","+yballTransform+"px"+","+(zballTransform-150)+"px)";
(document.getElementsByClassName('ball')[0]).style.webkitTransform = translateBall;
var xAngle = 0, yAngle = 0;
var xBallsAngle = 0, yBallsAngle = 0;
