(function(){
    "use strict"
    // basketball game
    var player1 = prompt("Player 1 name");
    var player2 = prompt("Player 2 name");
    var currentPlayer = player1;
    var player1Score = 0;
    var player2Score = 0;
    var gif = document.getElementById("gifs");
    var img1 = ["fp1.gif","mp1.gif"]
    var img2 = ["fp2.gif","mp2.gif"]
    var randomIndex1= 0;
    var randomIndex2=0;
    var shoot = document.getElementById('shoot')
    

    shoot.addEventListener("click", function(){
        if (currentPlayer == player1){

            randomIndex1 = Math.floor(Math.random() * img1.length);
            currentPlayer = player2;

            if (randomIndex1 == 0) {
                player1Score = player1Score
                swapImg()
            }
            else {
                player1Score++;
                swapImg()
            }

            if (player1Score == 1 || player2Score == 1){
                if (player1Score == 1 && play2Score != 1){alert(`${player1} has won`)}
                else if (player1Score ==1 && player2Score == 1){alert("It is a tie")}
                else{alert(`${player2} has won`)}
            }

        }
        

        function swapImg(){
            if (gif.children.length > 1){
                gif.removeChild(gif.children[0]);
                const newgif = document.createElement("img");
                newgif.src = `${img1[randomIndex1]}`;
                gif.appendChild(newgif);
            }
            else{
                const newgif = document.createElement("img");
                newgif.src = `${img1[randomIndex1]}`;
                gif.appendChild(newgif);
            }
        }
    })
          
 
    shoot.addEventListener("click", function(){
        if (currentPlayer == player2) {
            randomIndex2 = Math.floor(Math.random() * img2.length);
            currentPlayer = player1;
            console.log(randomIndex2)
            if (randomIndex2 == 0) {
                player2Score = player2Score
                swapImg2()
            }
            else {
                player2Score++;
                swapImg2()
            }

            if (player1Score == 1 || player2Score == 1){
                if (player1Score == 1 && play2Score != 1){alert(`${player1} has won`)}
                else if (player1Score ==1 && player2Score == 1){alert("It is a tie")}
                else{alert(`${player2} has won`)}
            }
        }

        function swapImg2(){
            if (gif.children.length > 1){
                gif.removeChild(gif.children[0]);
                const newgif = document.createElement("img");
                newgif.src = `${img2[randomIndex2]}`;
                gif.appendChild(newgif);
            }
            else{
                const newgif = document.createElement("img");
                newgif.src = `${img2[randomIndex2]}`;
                gif.appendChild(newgif);
            }
        }
            

    })


  
    

}());