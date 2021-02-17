function display(){
    //this .value allows me to access the value of the user input
    var name = document.getElementById("name").value
    // this .innerHTML allows to display content in the page
    var display = document.getElementById("display")
    display.innerHTML =  name + " " + "welcome aboard!"
}
