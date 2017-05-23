(function($){
  $.fn.mygame= function(size){
    var gameObject = this.attr('id');
    var BlockSize = size;
    var BoardSize = (BlockSize) * 3;


    $('#'+gameObject).append("<div id='board'></div>");
    $('#board').css({
      "background-color":"blue",
      "height":BoardSize,
      "width":BoardSize,
      "position":"absolute"});

      function LittleBox(){
        for(var X = 0; X < 3; X++){
          for(var Y = 0; Y < 3; Y++)
            $('#board').append("<button id = 'Box"+ X + Y+"' class= 'box'></button>");
            $('.box').css({
              "background-color":"lightblue",
              "height":BlockSize, "width":BlockSize,
              "border": "1px solid black", "float": "left" });

          }
        }
        LittleBox();


        function setBox(btn, player){
          console.log(player);
          if(player == "Player 1" ){
            btn.innerHTML = 'X';
          }
          else {
            btn.innerHTML = 'O'
          }
        }

        function ActivePlayer(t){
          var Players;

          console.log('T : ' + t)
          if((t%2) === 0){
            Players = "Player 2";
          }
          else {
           Players = "Player 1";
          }
          return Players;
        }

        function Main(){
          var BoxChoice = document.querySelectorAll(".box");
          var t = 1
          for (var i = 0; i <= 8; i ++){
            //var BoxChoice = $('.box').attr("id");

            // console.log(BoxChoice)
            BoxChoice[i].addEventListener("click", function(){
              var p = ActivePlayer(t);
              setBox(this, p);
              t++;
              // $("#textboard").innerHTML += ActivePlayer(t)+" a vous de joué."
            })
          }
        }
  Main()
      };
    })(jQuery);
