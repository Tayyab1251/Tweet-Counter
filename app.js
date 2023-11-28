// function findLength(){
//     var totalChar=280;//<------total length is 
//     var userMsg=window.prompt("Enter your message here [280 Characters] "); //Asking the user
//     var messageLength=userMsg.length; //<------user input's length is 
//     var remainingChars=messageLength-totalChar; //remaining characters
//     alert("You entered a message having length [ " + messageLength + " ] and remaining characters are " +remainingChars);
// }
function charCount(){
    const totalChar=280;
    var userInput = document.getElementById("userInput").value;
    var inputLen = userInput.length;
    document.getElementById("Length").value = inputLen;
    var remainChars=totalChar-inputLen;
    document.getElementById("remains").value = remainChars;
}
function clearBtn(){
    document.getElementById("userInput").value=""
    var inputLen = userInput.length;
    document.getElementById("Length").value = "";
    document.getElementById("remains").value = "";
}