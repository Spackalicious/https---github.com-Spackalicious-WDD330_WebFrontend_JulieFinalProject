const motUL = document.querySelector("#motUL");

async function makeStars() {  
  for (let i = 0; i < 320; i++) {   
    let newStar = motUL.appendChild(document.createElement("li"));
    newStar.innerHTML = "&#9734;";
  }
}
makeStars(); 

function loadStars() {
  const starsUL = localStorage.getItem("motUL");
  if (starsUL) {
    motUL.innerHTML = starsUL;
  }
}
loadStars();

async function checkStars() {
  motUL.addEventListener("click", function(event){
      let target = event.target;
      target.classList.toggle("crossOut");
      localStorage.setItem("motUL", motUL.innerHTML);      
  })
}
checkStars();



async function resetStars() {
  const resetButton = document.querySelector("#resetStars");
  resetButton.addEventListener("click", function(e){
    localStorage.removeItem("motUL");
    window.location.reload();
  })  
}
resetStars();