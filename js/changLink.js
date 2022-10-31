$(document).ready(function(){

    $('a').each(function(){

        $(this).wrap("<strike>");
        /*
        $(this).css("text-decoration", "line-through");
        */
        $(this).attr("href", "http://www.example.com/"); 

    });

    var imgs = ["img/usca1.jpg", "img/usca2.jpg", "img/usca3.jpg"];
    var i = 1;
    $('img').each(function(){

        $(this).attr("src", imgs[(i % 3)]);
        i++;

    })

});