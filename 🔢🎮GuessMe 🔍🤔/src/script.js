

let Guess = Math.floor(Math.random() * 100);
console.log(Guess);
let hint = document.getElementById("hint")
let guessing =true;
let attempt=0;
function CheckNumber(){
   
    let uGuess=Number(document.getElementById("textbox").value);
   
    if(isNaN(uGuess))
    {   alert(uGuess)
        window.alert('Please enter a valid number');
    }
    else{   
        document.getElementById("attempt").style.color = "#54ff5a"; 
        document.getElementById("attempt").textContent=  ++attempt;  
        if(Guess==uGuess)
        {   document.getElementById("attempt").style.color = "#ff050d";
            document.getElementById("hint").style.color = "#78effa"; 
            document.getElementById("hint").textContent=" Congrates U Got it!!!";
        }
        else if(uGuess<Guess)
        {   
            document.getElementById("hint").style.color = "#78faa8"; 
            document.getElementById("hint").textContent=" Too Low...";
            
        }
        else if(uGuess>Guess)
        {  document.getElementById("hint").style.color = "#fcff2e";
            document.getElementById("hint").textContent=" Too High...";  
        }
        

    }



}