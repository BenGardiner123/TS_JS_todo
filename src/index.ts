//id the divs and make them variable to use in my function
///not sure why this wont upload to git

var newListItem = document.getElementById("theList") as HTMLDivElement | null;
var inputbutton = document.getElementById("inputSomethingButton") as HTMLButtonElement | null;
var RemoveAllButton = document.getElementById("removeAllButton") as HTMLButtonElement | null;
//var newListItem = document.getElementById("list") as HTMLDivElement | null;

inputbutton?.onclick = function(){
    addli(ul);
}

 function addli(targetUi) {
     
    var TextInput = (document.getElementById("textInput") as HTMLInputElement).value, 
    li = document.createElement('li'), 
    textNode = document.createTextNode(TextInput + ''),
    rmovebutton = document.createElement ('button');
    document.getElementById(TextInput)?.Value = "";

    if (TextInput == null){
    alert ("somthing wrong");
    return false;
    }
 
    li.appendChild(textNode);
    li.appendChild()


}




