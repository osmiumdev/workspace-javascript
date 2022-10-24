function checkAnswers(){ //Not necessary. Was working on validating answers, unfinished.

    var checkedBoxes = document.getElementsByClassName('answer selected');
    var checkedBoxesValues = [];
    var checkedBoxesAnswers = [2, 4];
    for(var i = 0; i < checkedBoxes.length; i++){

        console.log(checkedBoxes[i].value);
        checkedBoxesValues.push(checkedBoxes[i].value);

    }

    if(checkedBoxesValues == checkedBoxesAnswers){

        alert("Correct");
    
    } else {
        
        alert("Wronk"); 
        console.log(checkedBoxesValues.length);
        console.log(checkedBoxesValues[0].value);
        console.log(checkedBoxesValues[1].value);
    
    }

}

function modifyClassOnChecked(){

    switch(this.getAttribute("class")){

        case("answer"):

            this.setAttribute("class", "answer selected");
            console.log("toggled ON");
            break;

        case("answer selected"):

            this.setAttribute("class", "answer");

            console.log("toggled OFF");
            break;

    }

}

function setOnCheckedEventListeners(){

    var checkboxes = document.getElementsByClassName('answer');
    console.log("checkbox Total: " + checkboxes.length);
    for(var i = 0; i < checkboxes.length; i++){

        console.log("added Listener");
        checkboxes[i].addEventListener('change', modifyClassOnChecked, false);

    }

}

console.log("script LOADED");
setOnCheckedEventListeners();
document.getElementById('submit').addEventListener('click', checkAnswers, false);
