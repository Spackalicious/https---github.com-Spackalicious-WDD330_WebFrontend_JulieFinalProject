// Page has 5 to do lists.
let list0 = `<div class="container" id="container0"> 
    <h1 class="titleText" id="title0">
        <input type="textarea" class="title" id="titleInput0" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkAll0">check all</li>
        <li id="uncheckAll0">uncheck all</li>
        <li id="resetList0">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-0" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul0">        
    </ul>
</div> 
`;
let list1 = `<div class="container" id="container1"> 
    <h1 class="titleText" id="title1">
        <input type="textarea" class="title" id="titleInput1" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkAll1">check all</li>
        <li id="uncheckAll1">uncheck all</li>
        <li id="resetList1">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-1" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul1">        
    </ul>
</div> 
`;
let list2 = `<div class="container" id="container2"> 
    <h1 class="titleText" id="title2">
        <input type="textarea" class="title" id="titleInput2" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkAll2">check all</li>
        <li id="uncheckAll2">uncheck all</li>
        <li id="resetList2">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-2" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul2">        
    </ul>
</div> 
`;
let list3 = `<div class="container" id="container3"> 
    <h1 class="titleText" id="title3">
        <input type="textarea" class="title" id="titleInput3" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkAll3">check all</li>
        <li id="uncheckAll3">uncheck all</li>
        <li id="resetList3">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-3" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul3">        
    </ul>
</div> 
`;
let list4 = `<div class="container" id="container4"> 
    <h1 class="titleText" id="title4">
        <input type="textarea" class="title" id="titleInput4" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkAll4">check all</li>
        <li id="uncheckAll4">uncheck all</li>
        <li id="resetList4">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-4" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul4">        
    </ul>
</div> 
`;
let ArrayOfToDoLists = [list0, list1, list2, list3, list4];
let section = document.querySelector('.list-columns');
section.innerHTML = ArrayOfToDoLists;

// if localStorage doesn't already have title, user input to determine list titles
function setTitle0() {    
    if (localStorage.getItem("listname0") != null) { 
        document.querySelector("#title0").innerHTML = localStorage.getItem("listname0");
    } else {
        let inputTitle = document.querySelector("#titleInput0");
        let title = document.querySelector("#title0");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ // Listen for "Enter" keypress
            // Save Title Text
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname0", newTitle);
            };
        })
    };
}
setTitle0();

// BEGIN FIRST LIST (List0)
function setList0() {    
    let ul0 = document.querySelector("#ul0");
    if (localStorage.getItem("list0") != null) { 
        document.querySelector("#ul0").innerHTML = localStorage.getItem("list0");
    } else {
        localStorage.setItem("list0", "");
    } 
    let createTodo0 = document.querySelector("#to-do-item-0");
    createTodo0.addEventListener("keypress", function(event){            
        if(event.which === 13){ //Listen for "Enter" keypress                
            let todoText = this.value; //Grab To Do Text                
            this.value = ""; //Clear To Do Text Box
            //Create New LI Element
            let newLi = ul0.appendChild(document.createElement("li"));
            // newLi.setAttribute("id", "li0");
            //Create New Span Element
            let newSpan = newLi.appendChild(document.createElement("span"));
            // Create new trash can button to delete this item
            let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
            //Add text to both Elements
            newLi.appendChild(document.createTextNode(" " + todoText));
            localStorage.setItem("list0", ul0.innerHTML);
        };
    })       
}
setList0();

function checkAll0() {
    const toggleButton = document.querySelector("#checkAll0");
    const localStorageList = localStorage.getItem("list0");        
        
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul0");
                let targetSpan = target.children;
                // let targetSpan = document.body.section.children;
                // console.log(target.tagName);
                // console.log(targetSpan[0].tagName);
                // console.log(targetSpan.length);
                for (let i = 0; i < targetSpan.length; i++) {
                    // targetSpan[i].classList.toggle("crossOut");
                    // ^^just switches which ones are clicked.
                    targetSpan[i].setAttribute("class", "crossOut");
                    localStorage.setItem("list0", ul0.innerHTML);
                    // console.log(`completed ${i} ` + targetSpan[i].tagName);
                }
                // console.log("Completed Task"); 
        })
}
checkAll0();

function uncheckAll0() {
    const toggleButton = document.querySelector("#uncheckAll0");
    // const localStorageList = localStorage.getItem("list0");        
        
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul0");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "");
                    localStorage.setItem("list0", ul0.innerHTML);
                }
        })
}
uncheckAll0();

// Remove or Cross Out Items for List0
async function removeListItems0() {
    ul0.addEventListener("click", function(event){
        let target = event.target;
        let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("crossOut");
        localStorage.setItem("list0", ul0.innerHTML);
        // Delete the To Do Item
        if(targetSpan.tagName === "SPAN"){
            let listItem = targetSpan.parentNode;
            listItem.remove();
            localStorage.setItem("list0", ul0.innerHTML);
        };
    })
}
removeListItems0();

function resetList0() {
    const resetList0 = document.querySelector("#resetList0");
    resetList0.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear this list? \nThis will lose all information and give you a blank list.\n\nCancel = Keep your list.\n\nOK = Clear this list.");
    if (warning) {
        localStorage.removeItem("listname0");
        localStorage.removeItem("list0");
        window.location.reload();
    } 
    })
}
resetList0();

// BEGIN SECOND LIST (List1)
function setTitle1() {    
    if (localStorage.getItem("listname1") != null) { 
        document.querySelector("#title1").innerHTML = localStorage.getItem("listname1");
    } else {
        let inputTitle = document.querySelector("#titleInput1");
        let title = document.querySelector("#title1");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ 
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname1", newTitle);
            };
        })
    };
}
setTitle1();

// add items to List 1
function setList1() {    
    let ul1 = document.querySelector("#ul1");
    if (localStorage.getItem("list1") != null) { 
        document.querySelector("#ul1").innerHTML = localStorage.getItem("list1");
    } else {
        localStorage.setItem("list1", "");
    } 
    let createTodo1 = document.querySelector("#to-do-item-1");
    createTodo1.addEventListener("keypress", function(event){            
        if(event.which === 13){                
            let todoText = this.value;               
            this.value = ""; 
            let newLi = ul1.appendChild(document.createElement("li"));
            // newLi.setAttribute("id", "li1");
            let newSpan = newLi.appendChild(document.createElement("span"));
            let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
            newLi.appendChild(document.createTextNode(" " + todoText));
            localStorage.setItem("list1", ul1.innerHTML);
        };
    })       
}
setList1();

function checkAll1() {
    const toggleButton = document.querySelector("#checkAll1");             
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul1");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "crossOut");
                    localStorage.setItem("list1", ul1.innerHTML);
                }
        })
}
checkAll1();

function uncheckAll1() {
    const toggleButton = document.querySelector("#uncheckAll1");       
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul1");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "");
                    localStorage.setItem("list1", ul1.innerHTML);
                }
        })
}
uncheckAll1();

async function removeListItems1() {
    ul1.addEventListener("click", function(event){
        let target = event.target;
        let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("crossOut");
        localStorage.setItem("list1", ul1.innerHTML);
        // Delete the To Do Item
        if(targetSpan.tagName === "SPAN"){
            let listItem = targetSpan.parentNode;
            listItem.remove();
            localStorage.setItem("list1", ul1.innerHTML);
        };
    })
}
removeListItems1();

function resetList1() {
    const resetList1 = document.querySelector("#resetList1");
    resetList1.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear this list? \nThis will lose all information and give you a blank list.\n\nCancel = Keep your list.\n\nOK = Clear this list.");
    if (warning) {
        localStorage.removeItem("listname1");
        localStorage.removeItem("list1");
        window.location.reload();
    } 
    })
}
resetList1();

function setTitle2() {    
    if (localStorage.getItem("listname2") != null) { 
        document.querySelector("#title2").innerHTML = localStorage.getItem("listname2");
    } else {
        let inputTitle = document.querySelector("#titleInput2");
        let title = document.querySelector("#title2");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ 
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname2", newTitle);
            };
        })
    };
}
setTitle2();

function setList2() {    
    let ul2 = document.querySelector("#ul2");
    if (localStorage.getItem("list2") != null) { 
        document.querySelector("#ul2").innerHTML = localStorage.getItem("list2");
    } else {
        localStorage.setItem("list2", "");
    } 
    let createTodo2 = document.querySelector("#to-do-item-2");
    createTodo2.addEventListener("keypress", function(event){            
        if(event.which === 13){                
            let todoText = this.value;               
            this.value = ""; 
            let newLi = ul2.appendChild(document.createElement("li"));
            let newSpan = newLi.appendChild(document.createElement("span"));
            let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
            newLi.appendChild(document.createTextNode(" " + todoText));
            localStorage.setItem("list2", ul2.innerHTML);
        };
    })       
}
setList2();

function checkAll2() {
    const toggleButton = document.querySelector("#checkAll2");             
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul2");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "crossOut");
                    localStorage.setItem("list2", ul2.innerHTML);
                }
        })
}
checkAll2();

function uncheckAll2() {
    const toggleButton = document.querySelector("#uncheckAll2");       
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul2");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "");
                    localStorage.setItem("list2", ul2.innerHTML);
                }
        })
}
uncheckAll2();

async function removeListItems2() {
    ul2.addEventListener("click", function(event){
        let target = event.target;
        let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("crossOut");
        localStorage.setItem("list2", ul2.innerHTML);
        // Delete the To Do Item
        if(targetSpan.tagName === "SPAN"){
            let listItem = targetSpan.parentNode;
            listItem.remove();
            localStorage.setItem("list2", ul2.innerHTML);
        };
    })
}
removeListItems2();

function resetList2() {
    const resetList2 = document.querySelector("#resetList2");
    resetList2.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear this list? \nThis will lose all information and give you a blank list.\n\nCancel = Keep your list.\n\nOK = Clear this list.");
    if (warning) {
        localStorage.removeItem("listname2");
        localStorage.removeItem("list2");
        window.location.reload();
    } 
    })
}
resetList2();

function setTitle3() {    
    if (localStorage.getItem("listname3") != null) { 
        document.querySelector("#title3").innerHTML = localStorage.getItem("listname3");
    } else {
        let inputTitle = document.querySelector("#titleInput3");
        let title = document.querySelector("#title3");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ 
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname3", newTitle);
            };
        })
    };
}
setTitle3();

function setList3() {    
    let ul3 = document.querySelector("#ul3");
    if (localStorage.getItem("list3") != null) { 
        document.querySelector("#ul3").innerHTML = localStorage.getItem("list3");
    } else {
        localStorage.setItem("list3", "");
    } 
    let createTodo3 = document.querySelector("#to-do-item-3");
    createTodo3.addEventListener("keypress", function(event){            
        if(event.which === 13){                
            let todoText = this.value;               
            this.value = ""; 
            let newLi = ul3.appendChild(document.createElement("li"));
            let newSpan = newLi.appendChild(document.createElement("span"));
            let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
            newLi.appendChild(document.createTextNode(" " + todoText));
            localStorage.setItem("list3", ul3.innerHTML);
        };
    })       
}
setList3();

function checkAll3() {
    const toggleButton = document.querySelector("#checkAll3");             
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul3");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "crossOut");
                    localStorage.setItem("list3", ul3.innerHTML);
                }
        })
}
checkAll3();

function uncheckAll3() {
    const toggleButton = document.querySelector("#uncheckAll3");       
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul3");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "");
                    localStorage.setItem("list3", ul3.innerHTML);
                }
        })
}
uncheckAll3();

async function removeListItems3() {
    ul3.addEventListener("click", function(event){
        let target = event.target;
        let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("crossOut");
        localStorage.setItem("list3", ul3.innerHTML);
        // Delete the To Do Item
        if(targetSpan.tagName === "SPAN"){
            let listItem = targetSpan.parentNode;
            listItem.remove();
            localStorage.setItem("list3", ul3.innerHTML);
        };
    })
}
removeListItems3();

function resetList3() {
    const resetList3 = document.querySelector("#resetList3");
    resetList3.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear this list? \nThis will lose all information and give you a blank list.\n\nCancel = Keep your list.\n\nOK = Clear this list.");
    if (warning) {
        localStorage.removeItem("listname3");
        localStorage.removeItem("list3");
        window.location.reload();
    } 
    })
}
resetList3();

function setTitle4() {    
    if (localStorage.getItem("listname4") != null) { 
        document.querySelector("#title4").innerHTML = localStorage.getItem("listname4");
    } else {
        let inputTitle = document.querySelector("#titleInput4");
        let title = document.querySelector("#title4");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ 
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname4", newTitle);
            };
        })
    };
}
setTitle4();

function setList4() {    
    let ul4 = document.querySelector("#ul4");
    if (localStorage.getItem("list4") != null) { 
        document.querySelector("#ul4").innerHTML = localStorage.getItem("list4");
    } else {
        localStorage.setItem("list4", "");
    } 
    let createTodo4 = document.querySelector("#to-do-item-4");
    createTodo4.addEventListener("keypress", function(event){            
        if(event.which === 13){                
            let todoText = this.value;               
            this.value = ""; 
            let newLi = ul4.appendChild(document.createElement("li"));
            let newSpan = newLi.appendChild(document.createElement("span"));
            let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
            newLi.appendChild(document.createTextNode(" " + todoText));
            localStorage.setItem("list4", ul4.innerHTML);
        };
    })       
}
setList4();

function checkAll4() {
    const toggleButton = document.querySelector("#checkAll4");             
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul4");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "crossOut");
                    localStorage.setItem("list4", ul4.innerHTML);
                }
        })
}
checkAll4();

function uncheckAll4() {
    const toggleButton = document.querySelector("#uncheckAll4");       
        toggleButton.addEventListener("click", function(event){
                let target = document.querySelector("#ul4");
                let targetSpan = target.children;
                for (let i = 0; i < targetSpan.length; i++) {
                    targetSpan[i].setAttribute("class", "");
                    localStorage.setItem("list4", ul4.innerHTML);
                }
        })
}
uncheckAll4();

async function removeListItems4() {
    ul4.addEventListener("click", function(event){
        let target = event.target;
        let targetSpan = event.target.parentNode.parentNode;
        target.classList.toggle("crossOut");
        localStorage.setItem("list4", ul4.innerHTML);
        // Delete the To Do Item
        if(targetSpan.tagName === "SPAN"){
            let listItem = targetSpan.parentNode;
            listItem.remove();
            localStorage.setItem("list4", ul4.innerHTML);
        };
    })
}
removeListItems4();

function resetList4() {
    const resetList4 = document.querySelector("#resetList4");
    resetList4.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear this list? \nThis will lose all information and give you a blank list.\n\nCancel = Keep your list.\n\nOK = Clear this list.");
    if (warning) {
        localStorage.removeItem("listname4");
        localStorage.removeItem("list4");
        window.location.reload();
    } 
    })
}
resetList4();

// Clear All & Restart button
function clearAllRestart() {
    const clearLists = document.querySelector("#clearLists");
    clearLists.addEventListener("click", function(event){
    let warning = confirm("WARNING!!!\n\nAre you certain you want to clear your lists? \nThis will lose all information and give you clean, blank lists.\n\nCancel = Keep your lists.\n\nOK = Clear your lists.");
    if (warning) {
        localStorage.clear();
        window.location.reload();
    } 
    })
}
clearAllRestart();