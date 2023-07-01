const mainBody = document.querySelector("#motSection");

async function makeDots() {  
  // works!
  // for (let i = 0; i < 21; i++) {
  //   let newDots = mainBody.appendChild(document.createElement("input"));
  //   newDots.setAttribute("id", "label-" + i);
  //   newDots.type = "checkbox";
  //   // newDots.style.display = "inline";
  //   let newLabel = mainBody.appendChild(document.createElement("label"));
  //   newLabel.setAttribute("for", "label-" + i);

    // didn't work
    // let eachLabel = `#label-${i}:checked ~ label[for=label-${i}]`;

    // let eachLabel = `#label-${i}`;
    let eachLabel = `#label-1`;


    if (`${eachLabel}:checked`) {
      let eachLabelChecked = `#label-1:checked ~ label[for=label-1]`;
      eachLabelChecked.style.background = "teal";
    }

  // }
  

    console.log("makeDots Working");
}
makeDots();  

async function saveDots() {
  const motivationChecked = [];


  console.log("saveDots Working");
}
saveDots();