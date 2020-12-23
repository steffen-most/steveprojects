document.getElementById("contentCreationBt").addEventListener("click",toogleCreationContent);

function toogleCreationContent(){
    if($("#contentCreation").is(":visible")){
        $("#contentCreation").fadeOut();
    }
    else{
        $("#contentCreation").fadeIn();
    }
}