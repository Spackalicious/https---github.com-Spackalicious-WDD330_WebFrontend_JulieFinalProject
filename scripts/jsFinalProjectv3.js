function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 

// Page has 5 to do lists.
let list0 = `<div class="container" id="container0"> 
    <h1 class="titleText" id="title0">
        <input type="textarea" class="title" id="titleInput0" placeholder="Add List Title">
    </h1>
    <ul class="list-controls">
        <li id="checkUncheck-list0">check/uncheck</li>
        <li id="resetList-list0">reset list</li>
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
        <li id="checkUncheck-list1">check/uncheck</li>
        <li id="resetList-list1">reset list</li>
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
        <li id="checkUncheck-list2">check/uncheck</li>
        <li id="resetList-list2">reset list</li>
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
        <li id="checkUncheck-list3">check/uncheck</li>
        <li id="resetList-list3">reset list</li>
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
        <li id="checkUncheck-list4">check/uncheck</li>
        <li id="resetList-list4">reset list</li>
    </ul>
    <input type="text" class="to-do-item" id="to-do-item-4" placeholder="Add New To Do Item"/>
    <ul class="todoListItems" id="ul4">        
    </ul>
</div> 
`;
let ArrayOfToDoLists = [list0, list1, list2, list3, list4];
// let ArrayOfToDoLists = [];
// ArrayOfToDoLists.push(list0);
// ArrayOfToDoLists.push(list1);
// ArrayOfToDoLists.push(list2);
// ArrayOfToDoLists.push(list3);
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

function setTitle1() {    
    if (localStorage.getItem("listname1") != null) { 
        document.querySelector("#title1").innerHTML = localStorage.getItem("listname1");
    } else {
        let inputTitle = document.querySelector("#titleInput1");
        let title = document.querySelector("#title1");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ // Listen for "Enter" keypress
            // Save Title Text
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname1", newTitle);
            };
        })
    };
}
setTitle1();

function setTitle2() {    
    if (localStorage.getItem("listname2") != null) { 
        document.querySelector("#title2").innerHTML = localStorage.getItem("listname2");
    } else {
        let inputTitle = document.querySelector("#titleInput2");
        let title = document.querySelector("#title2");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ // Listen for "Enter" keypress
            // Save Title Text
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname2", newTitle);
            };
        })
    };
}
setTitle2();

function setTitle3() {    
    if (localStorage.getItem("listname3") != null) { 
        document.querySelector("#title3").innerHTML = localStorage.getItem("listname3");
    } else {
        let inputTitle = document.querySelector("#titleInput3");
        let title = document.querySelector("#title3");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ // Listen for "Enter" keypress
            // Save Title Text
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname3", newTitle);
            };
        })
    };
}
setTitle3();

function setTitle4() {    
    if (localStorage.getItem("listname4") != null) { 
        document.querySelector("#title4").innerHTML = localStorage.getItem("listname4");
    } else {
        let inputTitle = document.querySelector("#titleInput4");
        let title = document.querySelector("#title4");
        inputTitle.addEventListener("keypress", function(event){      
        if(event.which === 13){ // Listen for "Enter" keypress
            // Save Title Text
            let newTitle = inputTitle.value;
            title.innerHTML = "";
            title.innerHTML = newTitle;
            localStorage.setItem("listname4", newTitle);
            };
        })
    };
}
setTitle4();

// set lists to memory
// add items to List0
let ul0 = document.querySelector("#ul0");
function setList0() {    
    if (localStorage.getItem("list0") != null) { 
        document.querySelector("#ul0").innerHTML = localStorage.getItem("list0");
    } else {
        let createTodo0 = document.querySelector("#to-do-item-0");
        createTodo0.addEventListener("keypress", function(event){            
            if(event.which === 13){ //Listen for "Enter" keypress                
                let todoText = this.value; //Grab To Do Text                
                this.value = ""; //Clear To Do Text Box
                //Create New LI Element
                let newLi = ul0.appendChild(document.createElement("li"));
                newLi.setAttribute("id", "li0");
                //Create New Span Element
                let newSpan = newLi.appendChild(document.createElement("span"));
                // Create new trash can button to delete this item
                let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
                //Add text to both Elements
                newLi.appendChild(document.createTextNode(" " + todoText));
                localStorage.setItem("list0", ul0.innerHTML);
            };
        });            
    };
}
setList0();
// Remove or Cross Out Items for List0
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
// add items to List 1
let ul1 = document.querySelector("#ul1");
function setList1() {    
    if (localStorage.getItem("list1") != null) { 
        document.querySelector("#ul1").innerHTML = localStorage.getItem("list1");
    } else {
        let createTodo1 = document.querySelector("#to-do-item-1");
        createTodo1.addEventListener("keypress", function(event){            
            if(event.which === 13){ //Listen for "Enter" keypress                
                let todoText = this.value; //Grab To Do Text                
                this.value = ""; //Clear To Do Text Box
                //Create New LI Element
                let newLi = ul1.appendChild(document.createElement("li"));
                newLi.setAttribute("id", "li1");
                //Create New Span Element
                let newSpan = newLi.appendChild(document.createElement("span"));
                // Create new trash can button to delete this item
                let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
                //Add text to both Elements
                newLi.appendChild(document.createTextNode(" " + todoText));
                localStorage.setItem("list1", ul1.innerHTML);
            };
        });            
    };
}
setList1();
// Remove or Cross Out Items for List1
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

// add items to List 2
let ul2 = document.querySelector("#ul2");
function setList2() {    
    if (localStorage.getItem("list2") != null) { 
        document.querySelector("#ul2").innerHTML = localStorage.getItem("list2");
    } else {
        let createTodo2 = document.querySelector("#to-do-item-2");
        createTodo2.addEventListener("keypress", function(event){           
            if(event.which === 13){ //Listen for "Enter" keypress                
                let todoText = this.value; //Grab To Do Text                
                this.value = ""; //Clear To Do Text Box
                //Create New LI Element
                let newLi = ul2.appendChild(document.createElement("li"));
                newLi.setAttribute("id", "li2");
                //Create New Span Element
                let newSpan = newLi.appendChild(document.createElement("span"));
                // Create new trash can button to delete this item
                let newI = newSpan.appendChild(document.createElement("I")).classList.add("fas", "fa-trash");
                //Add text to both Elements
                newLi.appendChild(document.createTextNode(" " + todoText));
                localStorage.setItem("list2", ul2.innerHTML);
            };
        });            
    };
}
setList2();
// Remove or Cross Out Items for List2
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

// Clear All & Restart button
const clearLists = document.querySelector("#clearLists");
clearLists.addEventListener("click", function(event){
    localStorage.clear();
    window.location.reload();
})

// set year for footer
document.querySelector("#year").innerHTML = new Date().getFullYear();