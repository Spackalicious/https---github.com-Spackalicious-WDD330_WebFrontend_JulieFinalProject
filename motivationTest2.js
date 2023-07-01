const mainBody = document.querySelector("#motSection");

async function makeDots() {  
  for (let i = 0; i < 100; i++) {
    let newDots = mainBody.appendChild(document.createElement("input"));
    newDots.setAttribute("id", "label-" + i);
    newDots.type = "checkbox"
    // let newLabel = mainBody.
  }
  

    console.log("makeDots Working");
}
makeDots();  

async function saveDots() {
  console.log("saveDots Working");
}
saveDots();