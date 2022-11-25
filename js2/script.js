$("#listo").hide(4000);
$(document).ready(function(){
    $("#aparecer").click(function(){
        $("#logo0").slideDown("slow");
        $("#logo1").slideDown("slow");
        $("#logo2").slideDown("slow");
        $("#logo3").slideDown("slow");
        $("#logo4").slideDown("slow");

        $("#TWW").slideDown("slow");
        $("#BEDWARS").slideDown("slow");
        $("#NIC").slideDown("slow");
        $("#TDS").slideDown("slow");
        $("#ARSENAL").slideDown("slow");
    });
    
    $("#desaparecer").click(function(){
        $("#logo0").slideUp("slow");
        $("#logo1").slideUp("slow");
        $("#logo2").slideUp("slow");
        $("#logo3").slideUp("slow");
        $("#logo4").slideUp("slow");

        $("#TWW").slideUp("slow");
        $("#BEDWARS").slideUp("slow");
        $("#NIC").slideUp("slow");
        $("#TDS").slideUp("slow");
        $("#ARSENAL").slideUp("slow");
    });
})
