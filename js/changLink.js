$(document).ready(function(){

    $('a').each(function(){

        $(this).wrap("<strike>");
        $(this).attr("href", "http://www.example.com/"); 

    });

    $('img').each(function(){

        $(this).attr("src", "img/usca1.jpg");

    })

});