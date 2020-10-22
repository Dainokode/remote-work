window.onload = () => {
 const photoRight = document.querySelector(".photo-right");
 const photoLeft = document.querySelector(".photo-left");
 
 window.addEventListener("scroll", () => {
  if(window.scrollY > 800){
   photoRight.style.opacity = "1";
   photoRight.style.transform = "translateX(0)";
   photoRight.style.transition = "1.5s ease";
  } else {
   photoRight.style.opacity = "0";
   photoRight.style.transform = "translateX(250px)";
  }
 })

 window.addEventListener("scroll", () => {
  if(window.scrollY > 1400){
   photoLeft.style.opacity = "1";
   photoLeft.style.transform = "translateX(0)";
   photoLeft.style.transition = "1.5s ease";
  } else {
   photoLeft.style.opacity = "0";
   photoLeft.style.transform = "translateX(-250px)";
  }
 })
}