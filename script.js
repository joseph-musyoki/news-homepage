  document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.querySelector(".bar-icon");
    const closeIcon = document.querySelector(".close-icon");
    const menu = document.querySelector(".tabs ul");

    menuIcon.addEventListener("click", function(){
        menu.style.display = "block";
        
          menuIcon.style.display="none";
          closeIcon.style.display="block"; 
        });
    closeIcon.addEventListener("click" , function(){
        menu.style.display = "none";
          menuIcon.style.display="block";
          closeIcon.style.display="none";
    });
 });

