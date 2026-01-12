let task=document.getElementById("task-input");
let addtask=document.getElementById("addtask");
let tasklist=document.querySelector(".tasklist");

// access delete all/ button
let delalltask=document.getElementById("delalltask");
// add eventlistner on btn 
addtask.addEventListener("click",(e)=>
{
    e.preventDefault();
    // create element for each new task 
    let newtask=document.createElement("div");
    newtask.classList.add("listmember");

    // create p to hold the text/task 
    let taskname=document.createElement("p");
    taskname.textContent=task.value;

    tasklist.appendChild(newtask);
    newtask.appendChild(taskname);

    //button to delete a task
    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.classList.add("deletebtn");
    console.log(btn);
    newtask.appendChild(btn);


    //when delete btn is clicked
    //task shoud be deleted
    btn.addEventListener("click",()=>
    {
        newtask.remove();
    });
});


// delete all tasks 
// add event listner on delete all btn 
delalltask.addEventListener("click",()=>
{
    let listel=document.getElementsByClassName("listmember");
    for(let el of listel)
    {
        el.remove();
    }
});