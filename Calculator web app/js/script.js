


// select all buttons 
let buttons = document.querySelectorAll('.button');
let string = "";

// loop through all buttons
Array.from(buttons).forEach(button => {
    // addEventListener to each button
    button.addEventListener('click', (e) =>{
        // = logic
        if(e.target.innerHTML === "="){
            // evaluate the string
            string = eval(string);
            document.querySelector('input').value = string;
        }
        // Clear logic
        else if(e.target.innerHTML === "C"){
            //clear the display
            string = "";
            document.querySelector('input').value = string;
        }
        
        // backspace logic
        else if(e.target.innerHTML === "X"){
            // remove the last character
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }

        // M+ Logic 
        else if(e.target.innerHTML === "M+"){
            // store the value in memory
            // output the value when MRC is clicked
        }

        // normal calculation logic
        else{
            // display the value of the button clicked
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})

