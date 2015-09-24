var notiVal = 0;
var venueVal = 0;

$(document).ready(function () {
    $(".circle").hide();
    $("a").click(function () {
        $(this).css('color', '#333');
    });

    //Contact us
    $("#dvHome").removeClass('hidedv').addClass('showdv');
    $("#imgHome").attr("src", "images/home_hover.png");
    $("#imgMedi").attr("src", "images/media.png");
    $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
    $("#imgContact").click(function () {
        showPage("imgContact");

    });
    //Media List
    $("#imgMedi").click(function () {        
        showPage("imgMedi");
    });
    //Agenda
    $("#imgAgenda").click(function () {
        AgendaFunc();
        showPage("imgAgenda");

    });
    //About us
    $("#imgHome").click(function () {
        showPage("dvHome");
    });



    //Image Gallry
    $("#AnchorPhotoGallary").click(function () {
        photoGallaryFunc();
        showPage("AnchorPhotoGallary");
    });
    //Back Link
    $("#linkBackMediaList").click(function () {
        showPage("linkBackMediaList");
    });
    //Press Release
    $("#AnchorPresssRelease").click(function () {
        PressReleasesFunc();
        showPage("AnchorPresssRelease");
    });

    //Media Coverage
    $("#AnchorMediaCoverage").click(function () {
        mediaCovFunc();
        showPage("AnchorMediaCoverage");       

    });
    //Media Advisory
    $("#AnchorMediaAdvisory").click(function () {
        MediaAdvisoryFunc();
        showPage("AnchorMediaAdvisory");
    });

    //Speeches Statements
    $("#AnchorSpeechStatement").click(function () {
        SpeechesFunc();
        showPage("AnchorSpeechStatement");
    });

    //Document
    $("#AnchorDocument").click(function () {
        documentFunc();
        showPage("AnchorDocument");
    });

    //Login


    //Dashboard
    $("#btnSubmit").click(function () {
        // GetDashboard(uid);
        //$("#imgNoti").attr("src", "images/register.png");
        //$("#imgMedi").attr("src", "images/media.png");
        //$("#imgAgenda").attr("src", "images/agenda.png");
        //$("#imgHome").attr("src", "images/home_hover.png");
        //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
        //$("#dvNoti").removeClass('showdv').addClass('hidedv');
        //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
        //$("#dvHome").removeClass('showdv').addClass('hidedv');
        //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        //$("#dvImageList").removeClass('showdv').addClass('hidedv');
        //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');

        //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        //$("#dvvLogin").removeClass('showdv').addClass('hidedv');
        //$("#dvvDashboard").removeClass('hidedv').addClass('showdv');
        //$("#dvvVenue").removeClass('showdv').addClass('hidedv');
        //$("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        //$("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        //$("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        //$("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        //$("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        //$("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
        //$("#page19").removeClass('showdv').addClass('hidedv');

        ////Hide all
        //$("#page27").removeClass('showdv').addClass('hidedv');
        //$("#page28").removeClass('showdv').addClass('hidedv');
        //$("#page29").removeClass('showdv').addClass('hidedv');
        //$("#page30").removeClass('showdv').addClass('hidedv');
        //$("#page31").removeClass('showdv').addClass('hidedv');
        //$("#page32").removeClass('showdv').addClass('hidedv');
        //$("#page33").removeClass('showdv').addClass('hidedv');
        //$("#page34").removeClass('showdv').addClass('hidedv');
        //$("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        //$("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        //$("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        //$("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
    });

    //Venue
    $("#P9").click(function () {
        Location();
        showPage("P9");
    });

    //For Venue from Home
    $("#loc").click(function () {
        venueVal = "1";
        if (venueVal == "1") {
            Location();
            showPage("loc");
            //showPage("linkBackVenue");
        }
    });


    //Travel India
    $("#P3").click(function () {
        showPage("P3");
    });

    //Travel Africa
    $("#P4").click(function () {
        showPage("P4");
    });

    //Visa Advisory
    $("#P5").click(function () {
        showPage("P5");
    });



    //City Guide
    $("#P6").click(function () {
        showPage("P6");
    });

    //Form Required
    $("#P7").click(function () {
        showPage("P7");
    });


    //Yellow Fever
    $("#P8").click(function () {
        showPage("P8");

    });




    //Visa Advisory
    $("#P5").click(function () {
        showPage("P5");
    });



    //Hotel List
    $("#P10").click(function () {
        showPage("P10");

    });


    $("#Anchor27").click(function () {
        showPage("Anchor27");
    });

    $("#Anchor28").click(function () {
        showPage("Anchor28");
    });


    $("#Anchor29").click(function () {
        showPage("Anchor29");
    });

    $("#Anchor30").click(function () {
        showPage("Anchor30");
    });

    $("#Anchor31").click(function () {
        showPage("Anchor31");
    });

    $("#Anchor32").click(function () {
        showPage("Anchor32");
    });


    $("#Anchor33").click(function () {
        showPage("Anchor33");
    });

    $("#Anchor34").click(function () {
        showPage("Anchor34");
    });


    $("#Anchor35").click(function () {
        showPage("Anchor35");
    });


    $("#Anchor36").click(function () {
        showPage("Anchor36");
    });

    //Back Link Dashboard
    $("#linkBackDashboardList").click(function () {
        showPage("linkBackDashboardList");

    });


    //Back Link Hotel List
    $("#linkBackHotelList").click(function () {
        showPage("linkBackHotelList");
    });



    //Back Link Press Release
    $("#linkBackPressRelease").click(function () {
        showPage("linkBackPressRelease");
    });



    //Back Link Document
    $("#linkBackDocument").click(function () {
        showPage("linkBackDocument");
    });
    //IAFS Logos
    $("#IAFS_logo").click(function () {
        showPage("IAFS_logo");
    });
    $("#iQuiz").click(function () {
        alert('Page Under Construction…');
    });
    //Notification Link

    $("#imgNoti").click(function () {
        try {
            alert('notifi calling click event.');
            debugger;
            notiVal = "1";

            if (aLogout == "0") {
                debugger;
                alert('You are not logged in, Please log on first.');
                showPage("dvvLogin");
                debugger;
            }
            if (aLogout == "1") {
                debugger;
                showPage("dvNoti");
                debugger;
            }
        }
        catch (ex) { ex.message }

    });


    //Back Link ImgGallry
    $("#linkBackImgGallry").click(function () {
        showPage("linkBackImgGallry");

    });
    //Back Link Home
    $("#linkBackVenue").click(function () {
        try {
            //debugger;
            //alert("calling.....");
            showPage("linkBackVenue");
            showPage("dvHome");
            //debugger;
            //alert("calling.2222....");
            //debugger;
        }
        catch (ex) { ex.message;}
    });

});





function Location() {
    
    var option = { enableHighAccuracy: true }
    navigator.geolocation.getCurrentPosition(onsuccess, onerror, option);
    function onsuccess(position) {
        var slat = position.coords.latitude;
        var slong = position.coords.longitude;
        var elat = "28.631143";
        var elong = "77.248942";
        debugger;
        //alert(slat+" : "+slong);
        var str = "https://maps.google.com/maps?saddr=" + slat + "," + slong + "&daddr=" + elat + "," + elong + "&output=embed";

        //$("#mapp5").html('<iframe id="#mapp" src="'+str+'" style="width:100%;height:450px;"  frameborder="0" style="border:0" allowfullscreen></iframe>');
        //document.getElementById("mapp5").innerHTML("gfgg");
        $(".jsk").html('<iframe id="#mapp" src="' + str + '" style="width:100%;height:512px;"  frameborder="0" style="border:0" allowfullscreen></iframe>');
        //alert(str);
    }
    function onerror(error) {
        debugger;
        //alert(error.message);
    }

}




//Location();