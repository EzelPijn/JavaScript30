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


Need to make one function to play the sound, which will be switch statement

Need to make one function to change the class

Feed the above two functions into two functions - one on keydown, one on click

*/



//Identifies and Captures the key id of the key clicked
$(".key").click(function () {
    var currentKey = $(this).attr("id");
    console.log(currentKey);
})

//Does not work to identify and capture the key id of the key pressed
$(this).keydown(function () {
    var currentKey = $(this).attr("id");
    console.log(currentKey);
})



//Plays Sound on click of specific box//
$('[data-key="65"]').click(function (){
    var clapAudio = new Audio("sounds/clap.wav");
    clapAudio.play();
    $('[data-key="65"]').addClass("playing");
    setTimeout(function () {
        $('[data-key="65"]').removeClass("playing");
    }, 100)
} )

//Plays Sound on keydown of any key//
$(this).keydown(function (){
    var clapAudio = new Audio("sounds/clap.wav");
    clapAudio.play();
    $('[data-key="65"]').addClass("playing");
    setTimeout(function () {
        $('[data-key="65"]').removeClass("playing");
    }, 100)
} )

/*
/function generateSound() {
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}*/

