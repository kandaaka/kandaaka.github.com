
    
    const bbody = document.querySelector("body");
    const bimg = document.querySelector("img");

    //Processing circles

    function windowResized(){
        resizeCanvas(windowWidth, windowHeight)
    }

    function setup(){
        const myCanvas = createCanvas(windowWidth, windowHeight);
        myCanvas.position(0,0)
        myCanvas.style("z-index", "-1")
        frameRate(8);
        noStroke();
        background(225, 225, 225);
        myCanvas.parent(bbody);
    }

    function draw(){
        if(mouseIsPressed){
            fill(225);
        }
        else {
            fill(random(225),random(225),random(225), random(225));
        }
        const circSize = random(200);
        ellipse(mouseX, mouseY, circSize, circSize);
    }

        // listen for the submission of the form
    document.getElementById("myform").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        const ddiv = document.getElementById("outside")
        const myNum= parseInt(document.getElementById("noun2").value);
        if (myNum){
            ddiv.removeChild(bimg);
            if (myNum >= 6){
                const img = document.createElement("img");
                img.src="images/bin.gif";
                ddiv.appendChild(img)
                ddiv.style.backgroundColor="rgba(158, 140, 116, 0.9)";

            }

            else{
                const img = document.createElement("img");
                img.src="images/miss.gif";
                ddiv.appendChild(img);
                ddiv.style.backgroundColor="rgba(140, 133, 140, 0.9)";
            }

        }
        else{
            alert("Please enter a number for the second question")
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);
    });

    //This function takes an array input, then constructs the madlib, peppering
    //in the user's words where necessary.
    function makeMadLib(theWords){
        const madlib = `${theWords[0]} has been playing basketball for ${theWords[1]} years. ${theWords[0]} plays for the ${theWords[2]} team. ${theWords[0]}'s favorite player is ${theWords[3]}.`;

        //Get the madlib container
        const mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<p>${madlib}</p>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");
    }

