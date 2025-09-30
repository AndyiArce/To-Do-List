const formSub = document.getElementById("submit-button");
const table = document.getElementById("table-body");

formSub.addEventListener("click", function(e){

    e.preventDefault();

    const submission = document.getElementById("taskInput").value;
    // no need to repeat this
    // const tbody = document.getElementById("table-body");

    if(!submission.trim())
    {
        alert("Item is Empty");
        return;
    }

    const submissionObject = {
        tr : document.createElement("tr"),
        tdTask : document.createElement("td"),
        tdButt1: document.createElement("td"),
        tdButt2: document.createElement("td"),
        buttCom: document.createElement("button"),
        buttDel: document.createElement("button"),
        submitText: function(sub){
            this.tdTask.innerText = sub;
            this.buttCom.innerText = "Complete";
            this.buttDel.innerText = "Delete";
            this.tdTask.setAttribute("class", "Task");
            this.buttCom.setAttribute("class", "complete");
            this.buttDel.setAttribute("class", "delete");
        },
        nestElements: function(){
            this.tdButt1.appendChild(this.buttCom);
            this.tdButt2.appendChild(this.buttDel);
            this.tr.appendChild(this.tdTask);
            this.tr.appendChild(this.tdButt1);
            this.tr.appendChild(this.tdButt2);
        }
    }

    submissionObject.submitText(submission);
    submissionObject.nestElements();

    table.appendChild(submissionObject.tr);


});


table.addEventListener("click", function(e){
    const buttonPressed = e.target;
    let parentElement;
    let collectedTask;

    if(buttonPressed.classList.contains("complete"))
    {
        parentElement = buttonPressed.parentElement.parentElement;
        collectedTask = parentElement.querySelector(".Task");
        collectedTask.classList.toggle("completed");

    }
    else if(buttonPressed.classList.contains("delete"))
    {
        parentElement = buttonPressed.parentElement.parentElement;
        parentElement.remove();

    }
})