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
    let planLIST = localStorage.getItem("planningItemLIST");
    let planARRAY = [];
    if(planLIST) {
        planARRAY = planLIST.split("<table>");
        console.log(`There are ${planARRAY.length -1} plans.`);
    } else  {
        planLIST = "";
        planARRAY = [];
        console.log("There is no planningItemLIST");
    }    
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
    function newPlan(date, title, plan) {
        const table = `<table>
            <tr>    
                <th><span class="planDelete">X</span>Date</th>
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
    }      
}
makeNewPlan();

// Clear All & Restart button for the planning page
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