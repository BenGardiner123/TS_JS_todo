let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if(myButton == null) {
    alert ("button not found!");
} else {
    myButton.value
    myButton.onclick = function(){
        if(myButton == null) return;
        alert(myButton.value);
    }
}