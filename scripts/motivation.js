
const motivationSection = document.querySelector("#motivation-list");

function motivationDots() {
    for (i = 0; i < 320; i++ ) {
        
        // let newDot = motivationSection.appendChild(document.createElement("li"));
        let newDot = motivationSection.appendChild(document.createElement("input"));
        newDot.type = "checkbox";
        newDot.id = "starBox";
        let newDotLabel = motivationSection.appendChild(document.createElement("label"));
       newDotLabel.id = "starBoxLabel";

        // newDot.innerHTML = "&#9734;";
        // newDot.style.color = "lightgrey";
        // newDot.style.background = "white";
        // newDot.style.border = "dotted grey 1px";
        
    }
    // console.log("Motivation is key!");
}
motivationDots();

function checkMotivation() {
    motivationSection.li.addEventListener("click", function(event){
        let target = event.target;
        // let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("checkedStar");
        localStorage.setItem("motivation", motivationSection.innerHTML);        
    })
}