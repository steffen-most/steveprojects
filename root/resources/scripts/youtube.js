let element = document.getElementById("youtube");

window.addEventListener('resize', resizeYt);

function resizeYt(){
    var width=element.scrollWidth;
    var height=width/16*9;
    $("#youtube").attr("height", height);
}

//first call when page is loaded;
resizeYt(); 