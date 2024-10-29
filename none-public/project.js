
function openlist(){
    document.getElementById("project-list").style.left="0";
    document.getElementById("open-btn").style.display="none"
    document.getElementById("close-btn").style.display="flex"

}

function closelist(){
    document.getElementById("project-list").style.left="270px";
    document.getElementById("open-btn").style.display="flex"
    document.getElementById("close-btn").style.display="none"

}

$(function(){
    $("#open-btn").draggable();
});