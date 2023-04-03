function toggle(){
    document.getElementById('phoneview').style.display="block"
    document.getElementById('hidefa').style.display="none "
}
function toggletwo(){
    document.getElementById('phoneview').style.display="none"
    document.getElementById('hidefa').style.display="block"
   
}

function reveal() {
    var reveals = document.querySelectorAll(".animation");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);