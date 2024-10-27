

function opennav(){
    document.getElementById("navbar").style.display="flex"
    document.getElementById("this").style.display="none"
    document.getElementById("jd-mb").style.marginTop="80px"
}



// link opening 

function openlink(a){
    if( a == 1){
        window.location.href= 'https://javaadde.github.io/GreenApple.in/';
    }
    else if(a == 2){
        window.location.href= '#home';
    }
    else if(a == 3){
        window.location.href= 'https://javaadde.github.io/Calculator/';
    } 
    else if(a == 4){
        window.location.href= 'https://javaadde.github.io/javad.io/';
    }
    else if(a == 5){
        window.location.href= 'https://javaadde.github.io/greenapplestore/';
    }
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






