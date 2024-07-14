
var display = document.getElementById("display");


function appendtodisplay(input){
    display.value += input;
}
function cleardisplay(){
    display.value="";

}
function calculate(){
    display.value = eval(display.value);  // eval is an inbuilt function in javascript for calculation....
    

}
