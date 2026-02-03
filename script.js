import { Morsify, unMorsify } from "./index.js"
const userOutput = document.querySelector("#span");
const btn = document.querySelector("#btn");
const inputEl = document.querySelector("#input");

btn.addEventListener('click', () => {
const userInput = inputEl.value;
const select = document.querySelector("#select").value;
console.log(userInput)
if(!userInput){
    alert("input something")
    return
}
if(select === "text"){
    userOutput.textContent = Morsify(userInput)
}else if(userInput === "morse"){
    userOutput.textContent = unMorsify(userInput)
}else {
    throw new Error("idk")
};

document.querySelector("#input").value = "";
});