/* 
To blur: filter: blur(8px);
Spacing: border: 20px solid #ff9000;
Base: color picker to feed the border in spacing


Create function that will add border to image based on the slider of the #spacing

Create function that will blur the image based on the slider of #blur

Create function that will change the border color of the image based on the color selected in #base


*/


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

