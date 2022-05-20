// "use strict"
let submit=document.querySelector(".button1");
let taskInput = document.querySelector("input.input1");
let taskWrapper = document.querySelector(".tasks .list-group");
submit.onclick = () => {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + d + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.style.display="none";
}