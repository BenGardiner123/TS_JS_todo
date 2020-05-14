//id the divs and make them variable to use in my function
var userDiv = document.getElementById("list") as HTMLDivElement | null;
var textInput = document.getElementById("textInput") as HTMLInputElement | null;
var inputbutton = document.getElementById("inputSomethingButton") as HTMLButtonElement | null;
var RemoveAllButton = document.getElementById("removeAllButton") as HTMLButtonElement | null;
//var userDiv = document.getElementById("list") as HTMLDivElement | null;

// this function creates the list items an tells the input box to store the users input as the list string
////need to finsih of the statment 
if (inputbutton == null) {
    alert("There is no button!")
} else {
    inputbutton.onclick = function () {
        if (textInput == null) {
            alert("the text input element is null for some reason");
            return;
        }
        let MakelistItem = document.createElement("li");
        let MakelistButton = document.createElement("button");

        MakelistButton.innerHTML = "complete";

        MakelistItem.appendChild(document.createTextNode(textInput.value));

        if (userDiv == null) {
            alert("the html element userDiv is null for some reason");
            return;
        }

        userDiv.appendChild(MakelistButton);
        userDiv.appendChild(MakelistItem);


        //this will remove the list item and the complete button

        
            MakelistItem.onclick = function () {
                if (MakelistItem == null){
                alert("There is a problem with your list somewhere"); 
                } else if (userDiv = null){

                }
                userDiv.removeChild(MakelistItem);
                userDiv.removeChild(MakelistButton);
            }
        }

        //this will mark the item red for completed
        MakelistButton.onclick = function () {
            if (userDiv == null) {
                alert("There is a null issue with your list item!")

            }

            if (MakelistButton.style.backgroundColor == "grey") {
                userDiv.removeChild(MakelistButton);
            }
            MakelistButton.style.backgroundColor = "red";

        }

    }



if (RemoveAllButton == null) {
    alert("There is a problem with one of your missing buttons1!")
} else {
    //this button is going to remove everything from the list
    RemoveAllButton.onclick = function () {
        if (userDiv == null) return;
        alert(userDiv.nodeValue);
        while (userDiv.hasChildNodes()) {
            userDiv.removeChild(userDiv.children[0]);
            ///or user.div.innerhtml = " "///
        }
    }
}
