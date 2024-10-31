

//
// ==>  navabar
//

function openNav(){
    document.getElementById("navbar").style.display="flex";
    document.getElementById("m-n-btn-open").style.display="none";
    document.getElementById("m-n-btn-close").style.display="flex";
}

function closeNav(){
    document.getElementById("navbar").style.display="none";
    document.getElementById("m-n-btn-open").style.display="flex";
    document.getElementById("m-n-btn-close").style.display="none";
}




//
// ==> show more button
//

function showMore() {
    const elements = document.querySelectorAll(".no-display");
    elements.forEach(element => {
      element.style.display = "flex";
    });

    document.getElementById("show-btn").style.display="none";

  }
  



//
// ==> read more button
//


 function readMore(){
    document.getElementById("readMore-btn").style.display="none";
    document.getElementById("para-2").style.display="flex";
    document.getElementById("pa").style.height="50vh";

 }









//
// ==> theme changing
//


function theme(){

     

    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--last').trim();

  
    // Toggle between two colors
  
    if (currentColor === 'rgb(63, 250, 110') {
      root.style.setProperty('--last', '#000');
      root.style.setProperty('--ooo','#fff');
      root.style.setProperty('--body','#717b7a');
      root.style.setProperty('--back','#b9dfda');
      root.style.setProperty('--back-img','url("./image/red.jpg")');
      
    } else {
      root.style.setProperty('--last', 'rgb(63, 250, 110'); 
      root.style.setProperty('--ooo','#000');
      root.style.setProperty('--body','#131212');
      root.style.setProperty('--back','#3e3e44');
      root.style.setProperty('--back-img','url("./image/headding.webp")');
    }
  

      

}



//
/// ==> skill and tool  shifting
//




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