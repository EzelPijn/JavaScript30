var spacing = document.getElementById("spacing");
var blur = document.getElementById("blur");
var base = document.getElementById("base");
var image = document.getElementById("image");


function adjustSpacing() {
    var borderValue = spacing.value;
   document.getElementById("image").style.border = `${borderValue}px solid #ff9000`;
}


function adjustBlur() {
    var blurValue = blur.value;
    document.getElementById("image").style.filter = `blur(${blurValue}px)`;
}

function adjustBorderColor() {
    var baseValue = base.value;
    document.getElementById("image").style.borderColor = `${baseValue}`;
    document.getElementById("JS").style.color = `${baseValue}`;
}

