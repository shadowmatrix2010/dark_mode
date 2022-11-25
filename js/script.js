
$("#listo").hide(4000);

$(document).ready(function(){


    $("#nolisto").fadeOut(2000, function(){$("#listo").fadeIn(4000);});

    $("#desaparecer").click(function(){
        $("#logo").hide("slow");
    });
    
    $("#aparecer").dblclick(function(){
        $("#logo").show("slow");
    });

    $("#down-up").click(function(){
        $("#logo").slideDown("slow");
    });

    $("#pa2").css({"background-color":"red"})
    
    $('.segundo').mouseenter(function(){
        $('.tercero').hide("slow");
        $('.priemro').animate({width: "300px"});
    });
    
    $('.segundo').mouseleave(function(){
        $('.tercero').show("slow");
    });
        
    $('#listo').click(function(){
        //alert($('#pa4').text());
        //$('#pa4').text("python");
        //$('#pa4').prepend("python<strong> adios </strong>");
        //$('#pa4').after("<p>parrafo insertado con Jquery</p>");
        $('#pa4').before("<p>parrafo insertado con Jquery</p>");
    });
        
    /*$('#eliminar').click(function(){
        $('#pa1').remove();
    })*/

    $('#eliminar').click(function(){
        $('#listo').empty();
        //$('#titulo').addClass("red");
        $('#titulo').toggleClass("red");
    


    })
})