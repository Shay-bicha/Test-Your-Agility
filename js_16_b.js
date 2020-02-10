       let numberOfClick = 0;
       let mistakeMoves = 0;
       let lestTimeClick;
       let bestTime = 0 ;
       let timeOfStartGame = new Date();
       function moveAndNewShape(event){
          event.stopPropagation();
          const div = document.getElementById("id1");
          let randomColor = Math.floor((Math.random()*4)+1);
          let coupleMoves = Math.floor((Math.random()*4)+1);
          let MoveTopmovesTop = Math.floor(Math.random()*74);
          let MoveRightOrLeft = Math.floor(Math.random()*86);
          let timeNow = new Date();
          if(numberOfClick > 0){
            
            if(bestTime>(timeNow - lestTimeClick)){
                 bestTime = timeNow - lestTimeClick;
            }
            document.getElementById("nowTime").innerHTML = ` Now time: 0.${timeNow - lestTimeClick}s`;
            document.getElementById("bestTime").innerHTML = ` best time: 0.${bestTime}s`;

        }
        else{ 
          document.getElementById("nowTime").innerHTML = `Your time: 0.${timeNow - timeOfStartGame}s`;
          bestTime = timeNow - timeOfStartGame;
        }
          lestTimeClick = timeNow;
          if(randomColor %2 == 0){
              div.style.backgroundColor = "blue";
              div.style.borderRadius = "50%"; 
          }
          else{
            div.style.backgroundColor = "red";
            div.style.borderRadius = "0%";            
          }
         
          if(coupleMoves  %2 == 0){
             div.style.top = `${MoveTopmovesTop}%`;
             div.style.right = `${MoveRightOrLeft}%`;
             console.log(coupleMoves , "right");
             console.log(`top or bottom: ${MoveTopmovesTop}%`);
             console.log(`right or left: ${MoveRightOrLeft}%`);
            }
            else{
              div.style.top = `${MoveTopmovesTop}%`;
              div.style.left = `${MoveRightOrLeft}%`;
              console.log(coupleMoves , "left");
              console.log(`top or bottom: ${MoveTopmovesTop}%`);
              console.log(`right or left: ${MoveRightOrLeft}%`);
            }
             numberOfClick++;
             document.getElementById("clicks").innerHTML = `Clicks: ${numberOfClick} misss: ${mistakeMoves}` ;
       }

    function movelost(){
       mistakeMoves++;
       document.getElementById("clicks").innerHTML = `Clicks: ${numberOfClick} misss: ${mistakeMoves}` ;
     }
    function resetGame(){
      numberOfClick = 0;
      mistakeMoves = 0;
      bestTime = 0 ;
      timeOfStartGame = new Date();
      timeNow = new Date();
      lestTimeClick = 0 ;
      document.getElementById("nowTime").innerHTML = `Your time: 0.${timeNow - timeOfStartGame}s`;
      document.getElementById("clicks").innerHTML = `Clicks: ${numberOfClick} misss: ${mistakeMoves}`;
      document.getElementById("bestTime").innerHTML = ` best time: 0.${bestTime}s`;
    }   