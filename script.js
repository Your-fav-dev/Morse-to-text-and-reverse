const btn = document.getElementById("btn");
const morse = {
    alphabet : {
        A: ".- ",
        B: "-... ",
        C: "-.-. ",
        D: "-.. ",
        E: ". ",
        F: "..-. ",
        G: "--. ",
        H: ".... ",
        I: ".. ",
        J: ".--- ",
        K: "-.- ",
        L: ".-.. ",
        M: "-- ",
        N: "-. ",
        O: "--- ",
        P: ".--. ",
        Q: "--.- ",
        R: ".-. ",
        S: "... ",
        T: "- ",
        U: "..- ",
        V: "...- ",
        W: ".-- ",
        X: "-..- ",
        Y: "-.-- ",
        Z: "--.. ",
        " ": "$"
    },
    numbers : {
        "0" : " -----",
        "1" : " .----",
        "2" : " ..---",
        "3" : " ...--",
        "4" : " ....-",
        "5" : " .....",
        "6" : " -....",
        "7" : " --...",
        "8" : " ---..",
        "9" : " ----.",
    }
};

function morsify(str) {
    try{
        if(!str){
            throw new Error("Input was not a string nor a number")
        }else if(typeof str == "string"){
            let out = []
            const text = str.toUpperCase()
            let strArray = text.split("")
            for(let letters of strArray){
                let transform = morse.alphabet[`${letters}`]
                out.push(transform)
            }
            let newOut = out.join("")
                    return newOut;

        }else if(typeof str == "number"){
            return morse.numbers[str]

        }else {return;}
        
    }catch(err){
        console.log(`Morsify function Error : ${err}`);
    }
};
btn.addEventListener("click", async () => {
    const input = await document.getElementById("input").value;
    console.log(typeof input)
    try{
        if(typeof input === "string"){
    const output = document.getElementById("morse");
    output.textContent = morsify(input)
    }
    else if(typeof input === "number"){
    const output = document.getElementById("morse");
    output.textContent = morsify(+input.value)
    }
    else{
        throw new Error("Invalid input type")
    }}
    catch(err){
        console.log(`Error : ${err}`)
    }
});

const action = document.addEventListener('keydown',
     (e) => {
const output = document.getElementById("morse")

    if(e.key === "1"){
        output.append(morsify(1))

    }    else if(e.key === "2"){
        output.append(morsify(2))

    }    else if(e.key === "3"){
        output.append(morsify(3))

    }    else if(e.key === "4"){
        output.append(morsify(4))

    }    else if(e.key === "5"){
        output.append(morsify(5))

    }    else if(e.key === "6"){
        output.append(morsify(6))

    }    else if(e.key === "7"){
        output.append(morsify(7))

    }    else if(e.key === "8"){
        output.append(morsify(8))

    }    else if(e.key === "9"){
        output.append(morsify(9))

    }    else if(e.key === "0"){
        output.append(morsify(0))

    }else{
        return;
    }

})