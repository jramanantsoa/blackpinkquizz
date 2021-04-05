<!DOCTYPE html>
<html>
   <head>
      <title>Blackpink quizz </title>
      <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open Sans"/>
      <!-- Font Awesome -->
      <link
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
         rel="stylesheet"
         />
      <!-- Google Fonts -->
      <link
         href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
         rel="stylesheet"
         />
      <!-- MDB -->
      <link
         href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
         rel="stylesheet"
         />
       <link type='text/css' rel='stylesheet' href='mystyle.css'/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   </head>
   <body>
    <div class="bg">
       </div>
       <!-- Just an image -->
<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="center-logo navbar-brand" href="#">
      <img
        src="img/logo.png"
        height="30"
        alt=""
        loading="lazy"
      />
    </a>
  </div>
</nav>
      <div class="quizContainer centered slidein form-check" style ="padding-left: 0px;">
          <br>
         <h2 class="question"></h2><br>
         <ul class="choiceList"></ul>
         <div class="quizMessage"></div>
         <!--<div class="result"></div>-->
          <center><button type="button" class="btn btn-dark nextButton">Next Question</button></center>
         <br>
      </div>
       <!-- Full Height Modal Right Success Demo-->
  <div class="modal mymodal fade right" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true" data-backdrop="true">
    <div class="modal-dialog modal-lg" role="document">
      <!--Content-->
      <div class="modal-content">
        <!--Header-->
        <!--<div class="modal-header">
          <p class="heading lead">Modal Success</p>

          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="white-text">&times;</span>
          </button>
        </div>-->

        <!--Body-->
        <div class="modal-body">
          <div class="text-center">
              <h1 class="result"></h1>
              <br>
              <br>
              
                <img class="comments" src=""/><br>
                <img class="gif_area" src=""/>
          </div>
        </div>

        <!--Footer-->
        <div class="modal-footer justify-content-center">
          <a type="button" class=" nextButton btn btn-outline-danger waves-effect" data-dismiss="modal">Play again <i class="far fa-gem ml-1"></i></a>
        </div>
      </div>
      <!--/.Content-->
    </div>
  </div>
  <!-- Full Height Modal Right Success Demo-->
      <script type='text/javascript' src='myscript.js'></script>
      <!-- MDB -->
      <script
         type="text/javascript"
         src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
         ></script>
   </body>
</html>