const btn = document.getElementById("btn")
const stringIn = document.getElementById("stringIn")
const numIn = document.getElementById("numIn")
const result = document.getElementById("result")

btn.addEventListener("click", function(){
    const repeatString = function(stringInValue, numInValue) {
        if(numIn < 0) return "ERROR"
        let string = ""
        for(let i = 0; i < numIn.value; i++){
            string += stringIn.value
        }
        result.innerHTML = string

    };
    repeatString(stringIn.value, parseInt(numIn.value));
})