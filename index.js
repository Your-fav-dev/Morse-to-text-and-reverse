
const STRING_TO_MORSE = {
    KEY : {
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
        " ": " ",
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
    },
};

const MORSE_TO_STRING = {
    KEY : {    
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        " ": " ",
        "-----": "0 ",
        ".----": "1 ",
        "..---": "2 ",
        "...--": "3 ",
        "....-": "4 ",
        ".....": "5 ",
        "-....": "6 ",
        "--...": "7 ",
        "---..": "8 ",
        "----.": "9 ",
    }
};

export function Morsify(input) {
    if(typeof input !== "string") return;
    let text = input.toUpperCase();
    let buffer = text.split("");
    let out = [];
    for(let letter of buffer){
        let morse = STRING_TO_MORSE.KEY[`${letter}`]
        out.push(morse);
    };
    let output = out.join("");
    return output
};

export function unMorsify(input){
    if(typeof input !== "string") return;
    let buffer = input.split(" ");
    let out = [];
    for(let morse of buffer){
        let english = MORSE_TO_STRING.KEY[`${morse}`]
        out.push(english);
    }
    const cleaned = out.map(item => 
    item === undefined ? " " : item
        );
    let output = cleaned.join("");
    return output
};