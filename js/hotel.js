reservations = [];

function createReservation(name, inDate, outDate, guestCount, roomType){

    reservations.push({

        name:name,
        inDate:inDate,
        outDate:outDate,
        guestCount:guestCount,
        roomType:roomType

    });

}

function newReservation(){

    createReservation(
        document.getElementById("name").value,
        document.getElementById("checkin").value,
        document.getElementById("checkout").value,
        document.getElementById("guestCount").value,
        document.getElementById("room").value
    );

}

document.getElementById("rsvp").addEventListener('click', newReservation, false);

function printReservations(){

    var output = document.getElementById("reservations");

    output.innerHTML = "";

    for(var i in reservations){

        output.innerHTML = 
        output.innerHTML + "<br>" +
        "Reservation " + (parseInt(i) + 1) + ":" + "<br>" +
        "Name: " + reservations[i].name + "<br>" +
        "Check-in: " + reservations[i].inDate + "<br>" +
        "Check-out: " + reservations[i].outDate + "<br>" +
        "Guests: " + reservations[i].guestCount + "<br>" +
        "Room: " + reservations[i].roomType + "<br>" +
        "------------" + "<br>" 

    }

}

document.getElementById("lists").addEventListener('click', printReservations, false);