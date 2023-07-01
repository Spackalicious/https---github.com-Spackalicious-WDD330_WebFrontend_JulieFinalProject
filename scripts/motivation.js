const motUL = document.querySelector("#motUL");

async function makeStars() {  
  for (let i = 0; i < 312; i++) {   
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
      target.classList.toggle("checkStar");
      localStorage.setItem("motUL", motUL.innerHTML);      
  })
}
checkStars();

// async function addCountStars() {
//     const starNumInput = document.querySelector("#starCount");
//     async function getCount() {
//         starNumInput.addEventListener("keypress", function(event){
//             if(event.which === 13){
//                 let starNum = parseInt(this.value);
//                 this.value = "";   
//                 if(Number.isInteger(starNum)) {
//                     let motAddCheck = confirm(`Please confirm\n\nAre you certain you want to add ${starNum} stars to your motivation tracker?\n\nOK = Add ${starNum} stars.`);
//                     if (motAddCheck) {
//                         console.log("The number of stars to add is: " + starNum);
//                         updateList(starNum);
//                     }
//                 }                    
//             }
//         })
//     } getCount();
//     async function updateList(num) {
//         const starArray = localStorage.getItem("motUL");
//         const splitStarArray = starArray.split("<li");
//         console.log(`Total number of stars is ${splitStarArray.length -1}, and you want to remove ${num}`);
       
        // for (let i = 0; i < num + 1; i++) {
            // let eachStar = splitStarArray[i].getElementsByClassName;
            // console.log(eachStar);
            // if (!eachStar) {
                // starArray[i].classList.toggle("checkstar");
                // localStorage.setItem("motUL", motUL.innerHTML); 
            //     console.log(toString(x[i]));
            // }        
        // }     
//     }   
// }
// addCountStars();

async function resetStars() {
  const resetButton = document.querySelector("#resetStars");  
  resetButton.addEventListener("click", function(e){
    let starsUL = localStorage.getItem("motUL");
    if (starsUL) {
        let motWarning = confirm("WARNING!!!\n\nAre you certain you want to clear your stars? \n\nCancel = Keep your stars.\nOK = Reset stars.");
        if (motWarning) {
            localStorage.removeItem("motUL");
        window.location.reload();
        } 
    }   
    })  
}
resetStars();