//get the values from the input
//CONTROLLER (start) function
function getValues(){
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //validate numbers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData
        displayData(fbArray)
    } else {
        alert("Enter only integers");
    }

}

//LOGIC function(s)
function fizzBuzz(fizzValue, buzzValue) {
    let array = [];

    //check to see if divisible by both (3 and 5)
    //check if divisble by fizz value(3)
    //check if divisible by buzz value(5)
    for(let i=1; i<=100; i++){
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
        array.push(value);
    }
    return array;
}

//VIEW function(s)
function displayData(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fizzBuzzTemplate");

    //clear the table
    tableBody.innerHTML = "";

    //dislplay data on the table
    for(let i=0; i<fbArray.length; i+=5){
        let tableRow = document.importNode(templateRow.content, true);
        //grab the <td> content & put into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }

   }
