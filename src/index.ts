//id the divs and make them variable to use in my function
var MakelistItem = document.getElementById("list");
var textInput = document.getElementById("textInput");
var makeCompleteButton = document

// this function creates the list items an tells the input box to store the users input as the list string

inputSomethingButton.onclick = function() {
    
    let MakelistItem = document.createElement("li");
    let MakelistButton = document.createElement("button");

    MakelistButton.innerHTML = "complete";

    MakelistItem.appendChild(document.createTextNode(textInput.value));
    
    list.appendChild(MakelistButton);
    list.appendChild(MakelistItem);



    //this will remove the list item and the complete button
     
    MakelistItem.onclick = function () {
        list.removeChild(MakelistItem);
        list.removeChild(MakelistButton);
     }

    //this will mark the item red for completed
    MakelistButton.onclick = function(){
        if (MakelistButton.style.backgroundColor == "grey")
            {
            list.removeChild(MakelistButton);
            }
        MakelistButton.style.backgroundColor = "red";

    }

    

}
//this button is going to remove everything from the list
removeAllButton.onclick =  function(){
        while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }


}