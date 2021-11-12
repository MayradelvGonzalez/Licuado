var stateBlender = "of";
var Blender = document.getElementById("blender");
var SoundBlender = document.getElementById("blender-sound");
var buttonBlender = document.getElementById("blender-button-sound");

function BlenderControl() {
    if(stateBlender == "of") {
        stateBlender = "on";
        console.log ("You turn it on!!!");
        sound();
        Blender.classList.add("active");
        
        
    }
    else {
        stateBlender = "of";
        console.log ("You turn it of!!!");
        sound();
        Blender.classList.remove("active");
    }

}

function sound() {
    if ( SoundBlender.paused ){
      buttonBlender.play();
      SoundBlender.play();
    }
    else {
        buttonBlender.play();
        SoundBlender.pause();
        SoundBlender.currentTime = 0;
    }
} 