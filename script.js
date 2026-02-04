import { Morsify, unMorsify } from "./index.js"
const userOutput = document.querySelector("#span");
const btn = document.querySelector("#btn");
const inputEl = document.querySelector("#input");
const clearBtn = document.querySelector("#delete");

btn.addEventListener('click', () => {
const userInput = inputEl.value;
const select = document.querySelector("#select").value;
if(!userInput){
    alert("input something")
    return
}
if(select === "text"){
    userOutput.textContent = Morsify(userInput)
}else {
    userOutput.textContent = unMorsify(userInput)
}
document.querySelector("#input").value = "";
});

clearBtn.addEventListener("click", () => {
    userOutput.textContent = "";
});