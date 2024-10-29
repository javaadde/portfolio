

// function opennav(){
//     document.getElementById("navbar").style.display="flex"
//     document.getElementById("this").style.display="none"
//     document.getElementById("jd-mb").style.marginTop="80px"
// }



// link opening 

function openlink(){
   window.location.href="./none-public/projects.html";
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






// theme


function theme(){

     

    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--last').trim();

  
    // Toggle between two colors
  
    if (currentColor === 'rgb(63, 250, 110') {
      root.style.setProperty('--last', '#000');
      root.style.setProperty('--ooo','#fff');
      root.style.setProperty('--body','#717b7a');
      root.style.setProperty('--back','#b9dfda');
      
    } else {
      root.style.setProperty('--last', 'rgb(63, 250, 110'); 
      root.style.setProperty('--ooo','#000');
      root.style.setProperty('--body','#131212');
      root.style.setProperty('--back','#3e3e44');
    }
  
   

   
      

}

///skill and tool  shifting


  function toolchange(){
    document.getElementById("span2").style.color="var(--ooo)"
    document.getElementById("span2").style.backgroundColor="var(--last)"

    document.getElementById("skills").style.display="none"
    document.getElementById("tools").style.display="flex"


    document.getElementById("span1").style.color="var(--last)"
    document.getElementById("span1").style.backgroundColor="var(--ooo)"

  }


  function skillchange(){
    document.getElementById("span1").style.color="var(--ooo)"
    document.getElementById("span1").style.backgroundColor="var(--last)"

    document.getElementById("skills").style.display="flex"
    document.getElementById("tools").style.display="none"


    document.getElementById("span2").style.color="var(--last)"
    document.getElementById("span2").style.backgroundColor="var(--ooo)"

  }