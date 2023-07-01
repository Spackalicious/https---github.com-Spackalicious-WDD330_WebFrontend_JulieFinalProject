const mainBody = document.querySelector("#motSection");

async function makeDots() {  
    for (let i = 0; i < 320; i++) {        
        document.body.appendChild(document.createElement("label"));
        let newLabel = mainBody.appendChild(document.createElement("label"));
        newLabel.setAttribute("class", "container");
        let newCheckbox = newLabel.appendChild(document.createElement("input"));
        newCheckbox.type = "checkbox";
        let newSpan = newLabel.appendChild(document.createElement("span")); 
        newSpan.setAttribute("class", "checkmark");
    }
    localStorage.setItem("motivation", mainBody.innerHTML);
}
makeDots();  

async function saveDots() {
  const dot = document.getElementsByTagName("span");
  dot.setAttribute("class", "dotted");
}
saveDots();