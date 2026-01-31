import { Morsify, unMorsify } from "./moduals/morseModual.mjs"
const userOutput = document.querySelector("#span");
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
const inputEl = document.querySelector("#input");
const userInput = inputEl.value;
const select = document.querySelector("#select").value;
try{    
    if(select === "text"){
        userOutput.textContent = Morsify(userInput);
    }else if(select === "morse") {
        userOutput.textContent = unMorsify(userInput);
    }else {
        return;
    };
}catch(err){
    console.log(err);
}
    inputEl.value = "";
});