/*
<audio data-key="65" a src="sounds/clap.wav"></audio>
<audio data-key="83" s src="sounds/hihat.wav"></audio>
<audio data-key="68" d src="sounds/kick.wav"></audio>
<audio data-key="70" f src="sounds/openhat.wav"></audio>
<audio data-key="71" g src="sounds/boom.wav"></audio>
<audio data-key="72" h src="sounds/ride.wav"></audio>
<audio data-key="74" j src="sounds/snare.wav"></audio>
<audio data-key="75" k src="sounds/tom.wav"></audio>
<audio data-key="76" l src="sounds/tink.wav"></audio>
*/

/* 

On click:
    capture data-key of item clicked
    play sound associated sound
    change the class to .playing
    remove class .playing

On keydown:
    capture data-key of key pressed
    play sound associated sound
    change the class to .playing
    remove class .playing


Need to make one function to play the sound, which will be switch statement - DONE

Need to make one function to change the class 
    - on click
    - on keydown - DONE

Feed the above two functions into two functions - one on keydown - DONE, one on click

*/

//Does not work to identify and capture the key id of the key pressed
/*
$(this).keydown (function () {
    var currentPressedKey = $(this).attr("id");
    console.log(currentPressedKey);
});*/



//Identifies and Captures the key id of the key clicked
$(".key").click(function () {
    var currentKey = $(this).attr("id");
    $("#" + currentKey).addClass("playing");
    setTimeout(function () {
        $("#" + currentKey).removeClass("playing");
    }, 100)
    console.log(currentKey);
    generateSound(currentKey);
})


document.addEventListener ("keydown", function(event) {
    generateSound(event.key);
    buttonAnimation(event.key);
    console.log(event.key);
});

//Adds and Removes Playing Class on Keydown//
function buttonAnimation(key){
    var activeButton = $("." + key);
    
    activeButton.addClass("playing");
    setTimeout(function() {
        activeButton.removeClass("playing");
    }, 100);
}


function generateSound(key) {
    switch (key) {
        case "65":
        case "a":
            var clap = new Audio ("sounds/clap.wav");
            clap.play();
            break;   
        case "83":
        case "s":
            var hihat = new Audio ("sounds/hihat.wav");
            hihat.play();
            break;
        case "68":
        case "d":
            var kick = new Audio ("sounds/kick.wav");
            kick.play();
            break;
        case "70":
        case "f":
            var openhat = new Audio ("sounds/openhat.wav");
            openhat.play();
            break;
        case "71":
        case "g":
            var boom = new Audio ("sounds/boom.wav");
            boom.play();
            break;
        case "72":
        case "h":
            var ride = new Audio ("sounds/ride.wav");
            ride.play();
            break;
        case "74":
        case "j":
            var snare = new Audio ("sounds/snare.wav");
            snare.play();
            break;
        case "75":
        case "k":
            var tom = new Audio ("sounds/tom.wav");
            tom.play();
            break;
        case "76":
        case "l":
            var tink = new Audio ("sounds/tink.wav");
            tink.play();
            break;
        
        default:
            break;
    }
}


