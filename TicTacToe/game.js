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
          $('#board').append("<button  class= 'box'></button>");
          $('.box').css({
            "background-color":"lightblue",
            "height":BlockSize, "width":BlockSize,
            "border": "1px solid black", "float": "left",
            "font-size":(BlockSize -20)});

          }
        }
        LittleBox();

        function Used(button){
          return button.innerHTML.length == 0;
        };

        function Victory(Box, p){

          if(Box[0].innerHTML== p && Box[1].innerHTML == p && Box[2].innerHTML == p
          ){
            Box[0].style.backgroundColor = "green";
            Box[1].style.backgroundColor = "green";
            Box[2].style.backgroundColor = "green";
            return true;
          }

          if(Box[3].innerHTML== p && Box[4].innerHTML == p && Box[5].innerHTML == p
          ){
            Box[3].style.backgroundColor = "green";
            Box[4].style.backgroundColor = "green";
            Box[5].style.backgroundColor = "green";
            return true;
          }

          if(Box[6].innerHTML== p && Box[7].innerHTML == p && Box[8].innerHTML == p
          ){
            Box[6].style.backgroundColor = "green";
            Box[7].style.backgroundColor = "green";
            Box[8].style.backgroundColor = "green";
            return true;
          }

          if(Box[0].innerHTML== p && Box[3].innerHTML == p && Box[6].innerHTML == p
          ){
            Box[0].style.backgroundColor = "green";
            Box[3].style.backgroundColor = "green";
            Box[6].style.backgroundColor = "green";
            return true;
          }

          if(Box[1].innerHTML== p && Box[4].innerHTML == p && Box[7].innerHTML == p
          ){
            Box[1].style.backgroundColor = "green";
            Box[4].style.backgroundColor = "green";
            Box[7].style.backgroundColor = "green";
            return true;
          }

          if(Box[2].innerHTML== p && Box[5].innerHTML == p && Box[8].innerHTML == p
          ){
            Box[2].style.backgroundColor = "green";
            Box[5].style.backgroundColor = "green";
            Box[8].style.backgroundColor = "green";
            return true;
          }
          if(Box[0].innerHTML== p && Box[4].innerHTML == p && Box[8].innerHTML == p
          ){
            Box[0].style.backgroundColor = "green";
            Box[4].style.backgroundColor = "green";
            Box[8].style.backgroundColor = "green";
            return true;
          }

          if(Box[2].innerHTML== p && Box[4].innerHTML == p && Box[6].innerHTML == p
          ){
            Box[2].style.backgroundColor = "green";
            Box[4].style.backgroundColor = "green";
            Box[6].style.backgroundColor = "green";
            return true;
          }
        }

        function setBox(btn, player){
          // console.log(player);
          if(player == "Player 1" ){
            btn.innerHTML = 'X';
            return val = "X";
          }
          else {
            btn.innerHTML = 'O';
            return val = "O";
          }
        }

        function ActivePlayer(t){
          var Players;

          // console.log('T : ' + t)
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
            BoxChoice[i].addEventListener("click", function(){
              if (Used(this)){
                var p = ActivePlayer(t);
                setBox(this, p);
                t++;
                if(Victory(BoxChoice, val)== true ){

                }
              }
              else{
                console.log("What the eck")
              }
              // if()
              // $("#textboard").innerHTML += ActivePlayer(t)+" a vous de joué."
            })
          }
        }
        Main()
      };
    })(jQuery);
