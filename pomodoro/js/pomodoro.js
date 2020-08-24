var changeaudio = new Audio("./audio/27568__suonho__memorymoon-space-blaster-plays_edit.wav");
var startaudio = new Audio("./audio/15348__ch0cchi__bubble-pop.wav");
var session = true;

$(document).ready(function(){
    var timechange = true;

    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 120,
        values: [5, 25],
        slide: function( event, ui ) {
            $("#break").val(ui.values[0]);
            $("#session").val(ui.values[1]);
            if (running === false) {$("#time-remaining").text(secondsToHms(ui.values[1] * 60));}
            timechange = true;
        }
    });
    $("#break").val($("#slider-range").slider("values", 0));
    $("#session").val($("#slider-range").slider("values", 1));
    $("#time-remaining").text(secondsToHms($("#slider-range").slider("values", 1)*60));

    var timer;
    var running = false;
    $(".clock").on("click", function () {
        startaudio.play();
        breaktime = $("#slider-range").slider("values", 0) * 1000 * 60;
        sessiontime = $("#slider-range").slider("values", 1) * 1000 * 60;

        if (running === false && timechange === true) {
            $("#state").text("Session");
            time_remaining = sessiontime;
            running = true;
            timer = window.setInterval(function() {starttimer();}, 1000);
        } else if (running === false && timechange === false) {
            if (session === true) {
                        $("#state").text("Session");
            } else {
                        $("#state").text("Break");
            }
            running = true;
            timer = window.setInterval(function() {starttimer();}, 1000);
        } else if (running === true && timechange == true) {
            window.clearInterval(timer);
            $("#state").text("Start");
            $("#time-remaining").text(secondsToHms($("#slider-range").slider("values", 1)*60));
            time_remaining = sessiontime;
            session = true;
            running = false;
        } else {
            window.clearInterval(timer);
            $("#state").text("Start");
            running = false;
        }

        timechange = false;
    });
    Notification.requestPermission();
    //var notification = new Notification("Hi there!");
    //console.log(Notification.permission);
});


function starttimer () {
    time_remaining -= 1000;
    $("#time-remaining").text(secondsToHms(time_remaining / 1000));

    if (session) {
        $(".filler").height(100 - time_remaining/sessiontime*100 + "%");
    } else {
        $(".filler").height(100 - time_remaining/breaktime*100 + "%");
    }

    if (time_remaining <= 0 && session) {
        changeaudio.play();
        var notification = new Notification("Pomodoro: Break!");
        time_remaining = breaktime;
        $("#state").text("Break");
        session = false;
    }

    if (time_remaining <= 0 && !session) {
        changeaudio.play();
        var notification = new Notification("Pomodoro: Session!");
        time_remaining = sessiontime;
        $("#state").text("Session");
        session = true;
    }
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
        (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    );
}
