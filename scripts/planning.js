let planningInput = `<div id="inputPlanContainer"> 
    <h1 class="inputPlanTitle">
        <input type="textarea" class="input-plan-title" placeholder="add plan title">
    </h1>
    <input type="text" class="input-plan-details" placeholder="add new plan details"/>
    <ul id="planItems">        
    </ul>
</div> 
`;

let section = document.querySelector('.plan-input');
section.innerHTML = planningInput;


// Clear All & Restart button
function clearAllRestart() {
    const clearPlans = document.querySelector("#planningLists");
    clearPlans.addEventListener("click", function(ep){
    let warningPlan = confirm("WARNING!!!\n\nAre you certain you want to clear your plans? \nThis will lose all information and give you a fresh planning area\n\nCancel = Keep your plans.\n\nOK = Clear your plans.");
    if (warningPlan) {
        // figure out what localStorage items will be called and how!
        // localStorage.removeItem("list5");
        window.location.reload();
    } 
    })
}
clearAllRestart();