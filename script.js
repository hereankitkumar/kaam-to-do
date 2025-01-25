const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");


function addItem() {
    if (inputBox.value === '') {
        var alert = document.getElementsByClassName("alert")[0].innerHTML = "please write something"; 
    } else {
        let task = document.createElement("li");
        task.textContent = inputBox.value;
        listContainer.appendChild(task);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        task.appendChild(cross); 
    }
    inputBox.value ="";
    saveData();
}

inputBox.addEventListener('input', function() {
    document.getElementsByClassName("alert")[0].innerHTML = "";
})
inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addItem();
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();