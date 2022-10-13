
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title> Matias</title>
  <meta name="author" content="mendiond">
  
  <meta property="og:type" content="website">
  <style>



</style>

<link rel="stylesheet" type="text/css" href="styles/main.css">
</head>

<body>
    

<div class="container" style="display:inline-block">

  <div class="form">

  <div>
    <h2>Por favor, responda a las 20 preguntas.</h2>

    Las 10 primeras preguntas le posicionarán en cuestiones sociales.
    Las últimas 10 preguntas le posicionarán en cuestiones económicas.
    Las últimas 10 preguntas le posicionarán en cuestiones políticas.
  </div>


  <div id="preguntas"></div>


<script>


  loadDoc();
  function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           
            writeXML(xhttp.responseXML);//(this);
        }
    };

    xhttp.open("GET", "questions/questions.xml", true);
    xhttp.send();

  }

  /*
    <button type="button" class="collapsible">Pregunta 1: Libertad de expresión</button>
    <div class="content sociales">
      <h2>Algunos individuos y medios de comunicación difunden con facilidad opiniones equivocadas con objetivos cuestionables.</h2>

      <div class="option 1">Debe prohibirse la difusión de opiniones equivocadas cuyo objetivo sea manipular y/o influir en los demás.</div>
      <div class="option 2">Debe prohibirse la realización de apologías de ideologías extremas.</div>
      <div class="option 3">No debe haber censura de opiniones por parte del Estado en ningún caso.</div>
    </div>
  */

  function writeXML(xml)
  {
      var txt = "";
      path = "/preguntas";

      if (xml.evaluate) {
          var nodes = xPathFind(xml, xml, path);
          var result = nodes;
          
          result.childNodes.forEach(function(tipo)
          {
            tipo.childNodes.forEach(function(pregunta){
              
              let pregsDiv = document.getElementById("preguntas");
              let b = document.createElement("button");
              b.type = "button";
              b.className = "collapsible";
              b.innerHTML = xPathFind(xml, pregunta, "title").childNodes[0].nodeValue;
                        
              b.addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });

              let d = document.createElement("div");
              let h2 = document.createElement("h2");

              h2.innerHTML = xPathFind(xml, pregunta, "description").childNodes[0].nodeValue;
              d.className = "content " + tipo.nodeName;
              d.append(h2);

              pregsDiv.append(b);
              pregsDiv.append(d);


              ["1", "2", "3"].forEach(function(index){
                
                let optDiv = document.createElement("div");
                optDiv.className = "option " + index;
                optDiv.innerHTML = xPathFind(xml, pregunta, "option" + index).childNodes[0].nodeValue;

                optDiv.addEventListener("click", function() {
                  Array.from(this.parentElement.children).forEach(function(elem){elem.classList.remove("selected");})
                  this.classList.toggle("selected");
                });

                d.append(optDiv);
              });              

            });
          });
      }
      
  }

  function xPathFind(rootNode, node, path)
  {
    return rootNode.evaluate(path, node, null, XPathResult.ANY_TYPE, null).iterateNext();
  }

</script>


  <button type="button" class="btn">Finalizar</button>

   </div> 
    <div id="experiment">
    <div id="cube" class="noselect">
      <div class="face one">
        <div class="grid-container">
           
          </div>
      </div>
      <div class="face two">
        <div class="grid-container">
            
          </div>
      </div>
      <div class="face three">
        <div class="grid-container">
            
          </div>
      </div>
      <div class="face four">
        <div class="grid-container">
              
          </div>
      </div>
      <div class="face five">
        <div class="grid-container">
            <div class="grid-item">Nacional bolchevismo</div>
            <div class="grid-item">Socialismo cristiano</div>
            <div class="grid-item">Anarquismo cristiano</div>  
            <div class="grid-item">Fascismo clerical</div>
            <div class="grid-item">Centro derecha</div>
            <div class="grid-item">Comunalismo tradicionalista</div>  
            <div class="grid-item">Neoreacción(Nrx)</div>
            <div class="grid-item">Liberalismo conservador</div>
            <div class="grid-item">Paleo libertarismo</div>  
          </div> 
      </div>    

      <div class="face internal">
        <div class="grid-container">
            <div class="grid-item">Marxismo leninismo</div>
            <div class="grid-item">Socialismo democrático</div>
            <div class="grid-item">Anarco comunismo</div>  
            <div class="grid-item">Fascismo clásico</div>
            <div class="grid-item">Centro</div>
            <div class="grid-item">Mutualismo</div>  
            <div class="grid-item">Capitalismo liberal</div>
            <div class="grid-item">Liberalismo clásico</div>
            <div class="grid-item">Libertarismo</div>  
          </div>  
      </div>

      <div class="face six">
        <div class="grid-container">
            <div class="grid-item">Comunismo posmarxista</div>
            <div class="grid-item">Luxemburguismo</div>
            <div class="grid-item">Posanarquismo</div>  
            <div class="grid-item">Tecnocracia progresista</div>
            <div class="grid-item">Centro Izquierda</div>
            <div class="grid-item">Anarquismo egoísta</div>  
            <div class="grid-item">Jacobinismo</div>
            <div class="grid-item">Socio liberalismo</div>
            <div class="grid-item">Izquierda libertaria</div>  
          </div>  
      </div>

      <div class="cartesian-arrow x">
        <div class="left-arrow"></div><div class="right-arrow"></div>
        <div class="left-text">conservadurismo</div><div class="right-text">progresismo</div>
        EJE SOCIAL
        
      </div>
      <div class="cartesian-arrow y">
         <div class="left-arrow"></div><div class="right-arrow"></div>
         <div class="left-text">autoritarismo</div><div class="right-text">acracia</div>
        EJE POLITICO
      </div>
      <div class="cartesian-arrow z">
         <div class="left-arrow"></div><div class="right-arrow"></div>
         <div class="left-text">intervencionismo</div><div class="right-text">libre mercado</div>
        EJE ECONOMICO
      </div>
    
      <figure class="ball"><span class="result">Tu Resultado</span></figure>
    </div>


</div>

<script type="text/javascript" src="classes/main.js"></script>

</body>


