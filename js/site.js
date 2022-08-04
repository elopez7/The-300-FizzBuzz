document.getElementById("btnSubmit").addEventListener("click", getValuesFromPage);
function getValuesFromPage(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let fizzBuzzArray = [];

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        fizzBuzzArray = fizzBuzz(fizzValue, buzzValue);
    }
    else{
        alert("You must enter integers")
    }

    displayNumbers(fizzBuzzArray);
}

function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];

    for(let index = 1; index <= 300; index++){
        if(index % fizzValue == 0 && index % buzzValue == 0){
            returnArray.push("fizzbuzz")
        }
        else if(index % fizzValue == 0){
            returnArray.push("fizz");
        }
        else if(index % buzzValue == 0){
            returnArray.push("buzz");
        }
        else{
            returnArray.push(index);
        }
    }
    return returnArray;
}

function displayNumbers(fizzBuzzArray){
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for(let index = 0; index<fizzBuzzArray.length; index += 5){
        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fizzBuzzArray[index];
        rowCols[1].textContent = fizzBuzzArray[index+1];
        rowCols[2].textContent = fizzBuzzArray[index+2];
        rowCols[3].textContent = fizzBuzzArray[index+3];
        rowCols[4].textContent = fizzBuzzArray[index+4];

        tableBody.appendChild(tableRow);
    }
}