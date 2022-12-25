studName = document.getElementById('studName');
studRoll = document.getElementById('studRoll');
let resultId = document.getElementById('result');
let errorMsg = document.getElementById('errorMsg')
let history = document.getElementById('history');
let geography = document.getElementById('geography');
let lifeScience = document.getElementById('lifeScience');
let physicalScience = document.getElementById('physicalScience');
let hindi = document.getElementById('hindi');
let english = document.getElementById('english');
let math = document.getElementById('math');

form = document.getElementById('studentNameAndRoll');

form.addEventListener('submit', (e) => {

    studentName = studName.value;
    studentRoll = studRoll.value;
    let dataFound = false;

    for (let result of resultsData) {
        if (
            studentName == result.name &&
            studentRoll == result.roll
        ) {
            // Updating marks.
            history.innerHTML = result.history;
            geography.innerHTML = result.geography;
            lifeScience.innerHTML = result.lifeScience;
            physicalScience.innerHTML = result.physicalScience;
            hindi.innerHTML = result.hindi;
            english.innerHTML = result.english;
            math.innerHTML = result.math;

            dataFound = true
            resultId.style.display = "block";
            errorMsg.style.display = "none"
        }

        if(dataFound) {
            break;
        }
    }

    if (!dataFound) {
        errorMsg.style.display = "block";
        resultId.style.display = "none"
    }
    e.preventDefault();

});

function getData() {
    console.log('Getting data..')
    fetch("result.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

let resultsData = [
    {
        "name": "Nikhil",
        "roll": "120",
        "history": "130",
        "geography": "100",
        "lifeScience": "20",
        "physicalScience": "30",
        "hindi": "30",
        "english": "40",
        "math": "100"
    },
    {
        "name": "Rohit",
        "roll": "130",
        "history": "130",
        "geography": "100",
        "lifeScience": "20",
        "physicalScience": "30",
        "hindi": "30",
        "english": "40",
        "math": "100"
    }
];