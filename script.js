

function opennav(){
    document.getElementById("navbar").style.display="flex"
    document.getElementById("this").style.display="none"
    document.getElementById("jd-mb").style.marginTop="80px"
}



// link opening 

function openlink(){
   window.location.href="./none-public/projects.html"
}



   







// cursor 




const cursor = document.querySelector(".cursor");
var timeout;


document.addEventListener('mousemove', (e) =>{
    let x = e.pageX;
    let y = e.pageY;

   cursor.style.top = y + "px";
   cursor.style.left = x + "px";
   cursor.style.display = "block";

   function mousestopped(){
    cursor.style.display = "none"
}

clearTimeout(timeout);
timeout = setTimeout(mousestopped,1000)

});

// cursor style on mouse

document.addEventListener("mouseout",() =>{
    cursor.style.display = "none";
});






