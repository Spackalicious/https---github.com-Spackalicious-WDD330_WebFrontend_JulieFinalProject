let planLIST = localStorage.getItem("planningItemLIST");
let planARRAY = [];
let planIdArray = [];
if(planLIST) {
    planARRAY = planLIST.split("<table id=");
    console.log(`There are ${planARRAY.length -1} plans.`);
    for(i = 0; i < planARRAY.length; i++) {
        let planID = planARRAY[i].slice(0, 13);
        planIdArray.push(planID);
    }
} else  {
    planLIST = "";
    planARRAY = [];
    console.log("There is no planningItemLIST");
} 

async function planningInput() {
    let planningInput = `<div id="inputPlanContainer"> 
        <h1 class="inputPlanTitle">
            <input type="textarea" class="input-plan-title" placeholder="add plan title">
        </h1>
        <input type="text" class="input-plan-details" placeholder="add new plan details"/>
        <button id="submitPlan">Submit</button>
    </div>
    `;
    let section = document.querySelector('.plan-input');
    section.innerHTML = planningInput;
}
planningInput();

async function loadExistingPlans() {
    const planGrid = document.querySelector('.plan-grid');
    const planList = localStorage.getItem("planningItemLIST");
    if (planList) {
        planGrid.innerHTML =  planList;
    }
} loadExistingPlans();

async function makeNewPlan() {
       
    const planTitle = document.querySelector(".input-plan-title");
    const planDetails = document.querySelector(".input-plan-details");
    const planDate = new Date().toDateString();
    const submitPlan = document.querySelector("#submitPlan");
    submitPlan.addEventListener("click", function(event){                           
        let theNewPlanTitle = planTitle.value;
        let theNewPlanDetails = planDetails.value;
        let theNewPlan = newPlan(planDate, theNewPlanTitle, theNewPlanDetails);
        planARRAY.push(theNewPlan);
        planLIST += theNewPlan;
        console.log(planLIST);
        localStorage.setItem("planningItemLIST", planLIST);    
        window.location.reload(); 
    })
    // function newPlan(date, title, plan) {
    //     const current = Date.now();
    //     // const current = "12345";
    //     const table = `<table id=${current}>
    //         <tr>    
    //             <th><span class="planDelete" id="pd-${current}">X</span>Date</th>
    //             <td class="planDate">${date}</td>
    //         </tr>      
    //         <tr>
    //             <th>Title</th>
    //             <td class="newPlanTitle">${title}</td>
    //         </tr>
    //         <tr>
    //             <th>Plan Notes</th>
    //             <td class="newPlanNotes">${plan}</td>
    //         </tr>                   
    //     </table>`
    //     return table;
    // }      
    function newPlan(date, title, plan) {
        const current = Date.now();
        const table = `<table id=${current}>
            <tr>    
                <th>Date</th>
                <td class="planDate">${date}</td>
            </tr>      
            <tr>
                <th>Title</th>
                <td class="newPlanTitle">${title}</td>
            </tr>
            <tr>
                <th>Plan Notes</th>
                <td class="newPlanNotes">${plan}</td>
            </tr>                   
        </table>`
        return table;
        // this hidden code has a <span>X</span> in it, intended to delete each individual table. To be puzzled out at a later date. 
        // const table = `<table id=${current}>
        //     <tr>    
        //         <th><span class="planDelete1" id="pd-${current}">X</span>Date</th>
        //         <td class="planDate">${date}</td>
        //     </tr>      
        //     <tr>
        //         <th>Title</th>
        //         <td class="newPlanTitle">${title}</td>
        //     </tr>
        //     <tr>
        //         <th>Plan Notes</th>
        //         <td class="newPlanNotes">${plan}</td>
        //     </tr>                   
        // </table>`
        // return table;
    }      
}
makeNewPlan();

async function deleteIndividualPlan() {
    // for(t = 0; t < planARRAY.length; t++) {
    //     const variable = 1;
    //     let clearPlans = document.querySelector.bind(".planDelete"+variable);
    //     let deletePlan = clearPlans.bind(clearPlans);
    //     // clearPlans.addEventListener = clearPlans.addEventListener.bind(clearPlans);
    //     deletePlan.addEventListener("click", function(event){
    //         // console.log(toString(planARRAY[t]));
    //         console.log("button working");
    //     })
    // }
    // if(planARRAY.length > 1) {
    //     let tableStops = [];
    //     for(i = 0; i < planARRAY.length; i++) {
    //         let planID = planARRAY[i].slice(0, 13);
    //         planIdArray.push(planID);
    //         console.log(planID);
    //         let index = planLIST.search(`<table id=${planID}`);
    //         // let indexEnd = planLIST.match("</table>");
    //         // console.log(index);
    //         // console.log(indexEnd);
    //         tableStops.push(index);
    //     }
    //     for(t = 0; t < tableStops.length; t++) {
    //         console.log(tableStops[t]);
    //     }       
    // }

    // if(planARRAY.length > 1) {
    //     console.log(planARRAY.length);
    //     for(id = 0; id < planIdArray.length; id++) {
    //         let planIdNum = planIdArray[id];
    //         console.log(planIdNum);
    //         let clearPlans = document.querySelector(`#pd-${planIdNum}`);
    //         clearPlans.innerHTML = ":)";
    //     }
        
        // for(i = 0; i < planARRAY.length; i++) {
        //     let planID = planARRAY[i].slice(0, 13);
        //     const id = {
                
        //         callId: function () {
        //             let x = `#pd-${planID}`;
        //             return x;
        //         }
        //     }
            
        //     let callId = id.callId.bind(id);
            // console.log(planID);
            // console.log(planARRAY[i]);
            // let clearPlans = document.querySelector(callId);
            // clearPlans.addEventListener("click", function(event){

                // console.log(callId);

            // })
            
            // let tableId = function () {
            //     let x = document.querySelector("#pd-" + planID);
            //     x.innerHTML = "O";
            // }
                
            // planIdArray.push(tableId);
        // }

        // for ( d = 0; d < planIdArray.length; d++ ) {
        //     console.log(planIdArray[d]);
        // }

        // for(t = 1; t < planARRAY.length; t++ ) {

        // }

            // const clearPlans = document.querySelector(`#pd-${planID}`);
            // clearPlans.innerHTML = ":)";
            // clearPlans.addEventListener("click", function(event){
            //     let target = event.target;            
            //     let planItem = target.parentNode.parentNode.parentNode.parentNode;
            //     console.log(planItem);
                // planItem.remove();
            // })    
            // }

            // cleaner part 2 of this attempt at a for loop! (replaces lines 104-112)
            // const clearPlans = document.querySelector(`#pd-${planID}`);
            // clearPlans.addEventListener("click", function(event){
            //     let target = event.target;            
            //     let planItem = target.parentNode.parentNode.parentNode.parentNode;
            //     console.log(planItem);
            // })    
            // }
        // }
    // }

//     const myElement = document.getElementById("foo");
// for (const child of myElement.children) {
//   console.log(child.tagName);
// }

    // if(planARRAY.length > 1) {
    //     console.log("something to delete");
    //     const clearPlans = document.querySelector(".planDelete");
    //     clearPlans.addEventListener("click", function(event){
    //         let target = event.target;            
    //         let planItem = target.parentNode.parentNode.parentNode.parentNode;
    //         console.log(planItem);
    //         // planItem.remove();
    //     })
    // } else { 
    //     console.log("nothing to delete!");
    // }   
}
deleteIndividualPlan();

async function clearAllPlans() {
    const clearPlans = document.querySelector("#planningLists");
    clearPlans.addEventListener("click", function(ep){
    let warningPlan = confirm("WARNING!!!\n\nAre you certain you want to clear your plans? \nThis will lose all information and give you a fresh planning area\n\nCancel = Keep your plans.\n\nOK = Clear your plans.");
    if (warningPlan) {
        localStorage.removeItem("planningItemLIST");
        window.location.reload();
    } 
    })
}
clearAllPlans();