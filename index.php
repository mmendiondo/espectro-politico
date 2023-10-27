<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Espectro Político</title>
    <meta name="author" content="mendiond">
    <meta property="og:type" content="website">
    <style>
    </style>

    <link rel="stylesheet" type="text/css" href="styles/main.css">
  </head>
  <body>

    <div class="container" style="display:inline-block">
      <div class="form">
          <div id="preguntas"></div>      
      </div> 
      <div id="experiment">
        <div class="movable-3d-icon">
          <div style="text-align: center; padding: 50px 0 0 0;">Mover<br>
          arrastrando</div>
          <button type="button" class="btn">Reiniciar</button>
        </div>
        <div id="cube" class="noselect">
          <div class="face one">
            <div class="grid-container"></div>
          </div>
          <div class="face two">
            <div class="grid-container"></div>
          </div>
          <div class="face three">
            <div class="grid-container"></div>
          </div>
          <div class="face four">
            <div class="grid-container"></div>
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
            <div class="left-text">Conservadurismo</div><div class="right-text">Progresismo</div>
            <div class="inlineBlock">EJE SOCIAL</div>
          </div>
          <div class="cartesian-arrow y">
             <div class="left-arrow"></div><div class="right-arrow"></div>
             <div class="left-text">Autoritarismo</div><div class="right-text">Acracia</div>
            <div class="inlineBlock">EJE POLITICO</div>
          </div>
          <div class="cartesian-arrow z">
             <div class="left-arrow"></div><div class="right-arrow"></div>
             <div class="left-text">Intervencionismo</div><div class="right-text">Libre mercado</div>
            <div class="inlineBlock">EJE ECONOMICO</div>
          </div>
          <figure class="ball" id="myresult-ball"><span class="result">Tu Resultado</span></figure>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="questions/questions.js"></script>
    <script type="text/javascript" src="movements/diff-movements.js"></script>
    <script type="text/javascript" src="classes/main.js"></script>

  </body>
</html>

