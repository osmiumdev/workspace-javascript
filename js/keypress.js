function updateCount(){

    var message = document.getElementById('message');
    var count = message.value.length;
    var left = (180 - parseInt(count));

    document.getElementById('charactersLeft').innerHTML = 
        left + " character(s) left";

}

$('#message').keydown(

    function(e){

        updateCount();
        document.getElementById('lastKey').textContent = e.key;

    }

)

function showPosition(e){



}

document.addEventListener('mousemove', showPosition);

//canvas test

const canvas = document.getElementById('groundofplay');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

function randomColor(){

    var colors = ["red", "orange", "blue", "green", "white", "black", "grey", "yellow", "purple", "cyan"];
    var randNum = Math.floor(Math.random() * 10);
    ctx.fillStyle = colors[randNum];
    ctx.fillRect(10, 10, 150, 100);

}

document.addEventListener('mousemove', randomColor);