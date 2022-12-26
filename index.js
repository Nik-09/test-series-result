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
let sName = document.getElementById('sName');
let total = document.getElementById('total');

form = document.getElementById('studentNameAndRoll');

function normalize(marks) {
    if (!marks) {
        return 'absent';
    } else {
        return marks;
    }
}

form.addEventListener('submit', (e) => {
    studentRoll = 'A2/' + studRoll.value + '/2023';
    let dataFound = false;
    for (let result of resultsData) {
        if (
            studentRoll == result.roll
        ) {
            // Updating marks.
            history.innerHTML = normalize(result.history);
            geography.innerHTML = normalize(result.geography);
            lifeScience.innerHTML = normalize(result.lifeScience);
            physicalScience.innerHTML = normalize(result.physicalScience);
            hindi.innerHTML = normalize(result.hindi);
            english.innerHTML = normalize(result.english);
            math.innerHTML = normalize(result.math);
            sName.innerHTML = result.name;
            total.innerHTML = result.total;

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
      "name": "Nishant Kr Singh",
      "roll": "A2/0884/2023",
      "hindi": 32,
      "english": 52,
      "history": 55,
      "geography": 40,
      "lifeScience": 53,
      "physicalScience": 50,
      "math": 58,
      "total": 340
    },
    {
      "name": "Aryan Mondal",
      "roll": "A2/0879/2023",
      "hindi": 39,
      "english": 47,
      "history": 57,
      "geography": 49,
      "lifeScience": 48,
      "physicalScience": 49,
      "math": 50,
      "total": 339
    },
    {
      "name": "Naman Choudhry",
      "roll": "A2/0887/2023",
      "hindi": 35,
      "english": 45,
      "history": 57,
      "geography": 50,
      "lifeScience": 51,
      "physicalScience": 47,
      "math": 53,
      "total": 338
    },
    {
      "name": "Rim Jhim Singh",
      "roll": "A2/0937/2023",
      "hindi": 30,
      "english": 53,
      "history": 57,
      "geography": 48,
      "lifeScience": 50,
      "physicalScience": 41,
      "math": 40,
      "total": 319
    },
    {
      "name": "Md.Sayeed",
      "roll": "A2/0882/2023",
      "hindi": 26,
      "english": 50,
      "history": 45,
      "geography": 45,
      "lifeScience": 46,
      "physicalScience": 51,
      "math": 52,
      "total": 315
    },
    {
      "name": "Bhawna Parekh",
      "roll": "A2/0948/2023",
      "hindi": 27,
      "english": 43,
      "history": 49,
      "geography": 42,
      "lifeScience": 38,
      "physicalScience": 37,
      "math": 39,
      "total": 275
    },
    {
      "name": "Dhruvi Pabari",
      "roll": "A2/0949/2023",
      "hindi": 25,
      "english": 54,
      "history": 42,
      "geography": 42,
      "lifeScience": 29,
      "physicalScience": 40,
      "math": 42,
      "total": 274
    },
    {
      "name": "Harsh Bhagat",
      "roll": "A2/0868/2023",
      "hindi": 42,
      "english": 46,
      "history": 48,
      "geography": 43,
      "lifeScience": null,
      "physicalScience": 35,
      "math": 56,
      "total": 270
    },
    {
      "name": "Neha Gupta",
      "roll": "A2/0888/2023",
      "hindi": 26,
      "english": 38,
      "history": 41,
      "geography": 40,
      "lifeScience": 39,
      "physicalScience": 36,
      "math": 46,
      "total": 266
    },
    {
      "name": "Subhasmita Panda",
      "roll": "A2/0928/2023",
      "hindi": 29,
      "english": 47,
      "history": 46,
      "geography": 11,
      "lifeScience": 40,
      "physicalScience": 42,
      "math": 44,
      "total": 259
    },
    {
      "name": "Yash Kr Shaw",
      "roll": "A2/0865/2023",
      "hindi": 25,
      "english": 46,
      "history": 44,
      "geography": 42,
      "lifeScience": 40,
      "physicalScience": 52,
      "math": 57,
      "total": 306
    },
    {
      "name": "Piyush Kr Singh",
      "roll": "A2/0885/2023",
      "hindi": 25,
      "english": 46,
      "history": 41,
      "geography": 38,
      "lifeScience": 35,
      "physicalScience": 34,
      "math": 29,
      "total": 248
    },
    {
      "name": "Md.Barkatullah",
      "roll": "A2/0881/2023",
      "hindi": 32,
      "english": 45,
      "history": 45,
      "geography": 44,
      "lifeScience": 41,
      "physicalScience": 38,
      "math": 47,
      "total": 292
    },
    {
      "name": "Radhika Chandak",
      "roll": "A2/0869/2023",
      "hindi": 28,
      "english": 50,
      "history": 19,
      "geography": 22,
      "lifeScience": 27,
      "physicalScience": 29,
      "math": 44,
      "total": 219
    },
    {
      "name": "Aman Shaw",
      "roll": "A2/0953/2023",
      "hindi": 28,
      "english": 42,
      "history": 24,
      "geography": 3,
      "lifeScience": 32,
      "physicalScience": 48,
      "math": 39,
      "total": 216
    },
    {
      "name": "Meet Rupda",
      "roll": "A2/0939/2023",
      "hindi": 24,
      "english": 43,
      "history": 28,
      "geography": 14,
      "lifeScience": 24,
      "physicalScience": 23,
      "math": 43,
      "total": 199
    },
    {
      "name": "Niraj Kr Yadav",
      "roll": "A2/0899/2023",
      "hindi": 22,
      "english": 47,
      "history": 50,
      "geography": 19,
      "lifeScience": 22,
      "physicalScience": 12,
      "math": 21,
      "total": 193
    },
    {
      "name": "Bhoomi Bhagania",
      "roll": "A2/0920/2023",
      "hindi": 28,
      "english": 50,
      "history": 18,
      "geography": 18,
      "lifeScience": 18,
      "physicalScience": 34,
      "math": 27,
      "total": 193
    },
    {
      "name": "Amit Kumar",
      "roll": "A2/0970/2023",
      "hindi": null,
      "english": 44,
      "history": 40,
      "geography": 43,
      "lifeScience": 32,
      "physicalScience": null,
      "math": 23,
      "total": 182
    },
    {
      "name": "Rohi Kumari",
      "roll": "A2/0951/2023",
      "hindi": 24,
      "english": 42,
      "history": 28,
      "geography": 28,
      "lifeScience": 28,
      "physicalScience": 18,
      "math": 12,
      "total": 180
    },
    {
      "name": "Vivek Singh",
      "roll": "A2/0954/2023",
      "hindi": 24,
      "english": 41,
      "history": 23,
      "geography": 24,
      "lifeScience": 22,
      "physicalScience": 23,
      "math": 44,
      "total": 201
    },
    {
      "name": "Pranjal Rai",
      "roll": "A2/0883/2023",
      "hindi": 26,
      "english": 41,
      "history": 26,
      "geography": 22,
      "lifeScience": 18,
      "physicalScience": 12,
      "math": 26,
      "total": 171
    },
    {
      "name": "Anjali Singh",
      "roll": "A2/0924/2023",
      "hindi": 20,
      "english": 41,
      "history": 21,
      "geography": 27,
      "lifeScience": 21,
      "physicalScience": 18,
      "math": 43,
      "total": 191
    },
    {
      "name": "Puja Yadav",
      "roll": "A2/0894/2023",
      "hindi": 17,
      "english": 28,
      "history": 32,
      "geography": 25,
      "lifeScience": 14,
      "physicalScience": 19,
      "math": 28,
      "total": 163
    },
    {
      "name": "Abhishek kumar",
      "roll": "A2/0938/2023",
      "hindi": 25,
      "english": 44,
      "history": 23,
      "geography": null,
      "lifeScience": 33,
      "physicalScience": null,
      "math": 36,
      "total": 161
    },
    {
      "name": "Simran Kharwar",
      "roll": "A2/0929/2023",
      "hindi": 23,
      "english": 40,
      "history": 6,
      "geography": 23,
      "lifeScience": 24,
      "physicalScience": 25,
      "math": 15,
      "total": 156
    },
    {
      "name": "Satya Prakash Shaw",
      "roll": "A2/0946/2023",
      "hindi": 18,
      "english": 37,
      "history": 45,
      "geography": 21,
      "lifeScience": 12,
      "physicalScience": 5,
      "math": 10,
      "total": 148
    },
    {
      "name": "Archana Singh",
      "roll": "A2/0873/2023",
      "hindi": 20,
      "english": 31,
      "history": 32,
      "geography": 18,
      "lifeScience": 16,
      "physicalScience": 22,
      "math": 36,
      "total": 175
    },
    {
      "name": "Priyanshu Rai",
      "roll": "A2/0906/2023",
      "hindi": 21,
      "english": 39,
      "history": null,
      "geography": 29,
      "lifeScience": 20,
      "physicalScience": 19,
      "math": 15,
      "total": 143
    },
    {
      "name": "Shruti Shreya",
      "roll": "A2/0891/2023",
      "hindi": 19,
      "english": 50,
      "history": 26,
      "geography": 25,
      "lifeScience": 17,
      "physicalScience": 19,
      "math": 12,
      "total": 168
    },
    {
      "name": "Riya yadav",
      "roll": "A2/0893/2023",
      "hindi": 30,
      "english": 41,
      "history": 31,
      "geography": 16,
      "lifeScience": 10,
      "physicalScience": 8,
      "math": 5,
      "total": 141
    },
    {
      "name": "Shreya Gupta",
      "roll": "A2/0945/2023",
      "hindi": 24,
      "english": 41,
      "history": 16,
      "geography": 16,
      "lifeScience": 19,
      "physicalScience": 14,
      "math": 27,
      "total": 157
    },
    {
      "name": "Eklavya Tiwari",
      "roll": "A2/0909/2023",
      "hindi": 13,
      "english": 37,
      "history": 31,
      "geography": 15,
      "lifeScience": 17,
      "physicalScience": 18,
      "math": 25,
      "total": 156
    },
    {
      "name": "Diksha Pathak",
      "roll": "A2/0911/2023",
      "hindi": 25,
      "english": 37,
      "history": 9,
      "geography": 18,
      "lifeScience": 14,
      "physicalScience": 17,
      "math": 16,
      "total": 136
    },
    {
      "name": "Astha Sharma",
      "roll": "A2/0912/2023",
      "hindi": 19,
      "english": 38,
      "history": 36,
      "geography": 30,
      "lifeScience": 17,
      "physicalScience": 29,
      "math": 1,
      "total": 170
    },
    {
      "name": "Bhakti Gupta",
      "roll": "A2/0917/2023",
      "hindi": 31,
      "english": 50,
      "history": 17,
      "geography": 17,
      "lifeScience": 17,
      "physicalScience": 19,
      "math": null,
      "total": 151
    },
    {
      "name": "Ansika Rajak",
      "roll": "A2/0923/2023",
      "hindi": 25,
      "english": 36,
      "history": 12,
      "geography": 14,
      "lifeScience": 10,
      "physicalScience": 21,
      "math": 14,
      "total": 132
    },
    {
      "name": "Khushi Gupta",
      "roll": "A2/0927/2023",
      "hindi": 29,
      "english": 41,
      "history": null,
      "geography": 15,
      "lifeScience": 8,
      "physicalScience": 21,
      "math": 18,
      "total": 132
    },
    {
      "name": "Vedant Singh",
      "roll": "A2/0875/2023",
      "hindi": 13,
      "english": 40,
      "history": 22,
      "geography": 27,
      "lifeScience": 24,
      "physicalScience": 20,
      "math": 7,
      "total": 153
    },
    {
      "name": "Umang Singh",
      "roll": "A2/0866 /2023",
      "hindi": null,
      "english": 48,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": 34,
      "math": 46,
      "total": 128
    },
    {
      "name": "Chetna Jawar",
      "roll": "A2/0926/2023",
      "hindi": 19,
      "english": 41,
      "history": 10,
      "geography": 13,
      "lifeScience": 13,
      "physicalScience": 17,
      "math": 15,
      "total": 128
    },
    {
      "name": "Priyanka Singh",
      "roll": "A2/0896/2023",
      "hindi": 23,
      "english": 28,
      "history": 26,
      "geography": 17,
      "lifeScience": 9,
      "physicalScience": 15,
      "math": 9,
      "total": 127
    },
    {
      "name": "Sadhana Sharma",
      "roll": "A2/0889/2023",
      "hindi": 15,
      "english": 37,
      "history": 17,
      "geography": 14,
      "lifeScience": 16,
      "physicalScience": 19,
      "math": 25,
      "total": 143
    },
    {
      "name": "Komal Shaw",
      "roll": "A2/0910/2023",
      "hindi": 20,
      "english": 40,
      "history": 22,
      "geography": 7,
      "lifeScience": 12,
      "physicalScience": 13,
      "math": 10,
      "total": 124
    },
    {
      "name": "Zuhair Arshad",
      "roll": "A2/0944/2023",
      "hindi": 12,
      "english": 35,
      "history": 13,
      "geography": 7,
      "lifeScience": 8,
      "physicalScience": 15,
      "math": 27,
      "total": 117
    },
    {
      "name": "Niranjan Kr Mondal",
      "roll": "A2/0900/2023",
      "hindi": 21,
      "english": 34,
      "history": 10,
      "geography": 9,
      "lifeScience": 15,
      "physicalScience": 11,
      "math": 16,
      "total": 116
    },
    {
      "name": "Riya Kaur",
      "roll": "A2/0892/2023",
      "hindi": 14,
      "english": 36,
      "history": 20,
      "geography": 18,
      "lifeScience": 15,
      "physicalScience": 8,
      "math": 1,
      "total": 112
    },
    {
      "name": "Suraj Shaw",
      "roll": "A2/0913/2023",
      "hindi": 18,
      "english": 35,
      "history": null,
      "geography": 27,
      "lifeScience": 22,
      "physicalScience": 26,
      "math": 11,
      "total": 139
    },
    {
      "name": "Radhika Asopa",
      "roll": "A2/0922/2023",
      "hindi": 21,
      "english": 36,
      "history": 11,
      "geography": 27,
      "lifeScience": 2,
      "physicalScience": 13,
      "math": 2,
      "total": 112
    },
    {
      "name": "Ranvir Singh",
      "roll": "A2/0876/2023",
      "hindi": 17,
      "english": 42,
      "history": 11,
      "geography": 7,
      "lifeScience": 11,
      "physicalScience": 8,
      "math": 14,
      "total": 110
    },
    {
      "name": "Priyanka panchamia",
      "roll": "A2/0890/2023",
      "hindi": 19,
      "english": 29,
      "history": 11,
      "geography": 16,
      "lifeScience": 10,
      "physicalScience": 14,
      "math": 4,
      "total": 103
    },
    {
      "name": "Prerak daga",
      "roll": "A2/0905/2023",
      "hindi": 12,
      "english": 43,
      "history": 10,
      "geography": 12,
      "lifeScience": 12,
      "physicalScience": 11,
      "math": 2,
      "total": 102
    },
    {
      "name": "Sudhanshu Kr Shaw",
      "roll": "A2/0903/2023",
      "hindi": 15,
      "english": 32,
      "history": 12,
      "geography": 15,
      "lifeScience": 13,
      "physicalScience": 8,
      "math": 6,
      "total": 101
    },
    {
      "name": "Shruti pandey",
      "roll": "A2/0925/2023",
      "hindi": 22,
      "english": 30,
      "history": 18,
      "geography": 16,
      "lifeScience": null,
      "physicalScience": null,
      "math": 14,
      "total": 100
    },
    {
      "name": "Simran Shaw",
      "roll": "A2/0966/2023",
      "hindi": 21,
      "english": 29,
      "history": 21,
      "geography": 8,
      "lifeScience": 8,
      "physicalScience": 13,
      "math": 8,
      "total": 100
    },
    {
      "name": "Ritika Singh",
      "roll": "A2/0919/2023",
      "hindi": 22,
      "english": 33,
      "history": 17,
      "geography": 8,
      "lifeScience": 12,
      "physicalScience": 8,
      "math": 7,
      "total": 107
    },
    {
      "name": "Harsh upadhyay",
      "roll": "A2/0930/2023",
      "hindi": 5,
      "english": 38,
      "history": 12,
      "geography": 11,
      "lifeScience": null,
      "physicalScience": 15,
      "math": 17,
      "total": 98
    },
    {
      "name": "Akash Shaw",
      "roll": "A2/0880/2023",
      "hindi": 19,
      "english": 31,
      "history": 16,
      "geography": 17,
      "lifeScience": 8,
      "physicalScience": 15,
      "math": 5,
      "total": 111
    },
    {
      "name": "Satyam Choudhry",
      "roll": "A2/0886/2023",
      "hindi": 14,
      "english": 37,
      "history": 18,
      "geography": 7,
      "lifeScience": 15,
      "physicalScience": 9,
      "math": 13,
      "total": 113
    },
    {
      "name": "Suryakant Shaw",
      "roll": "A2/0902/2023",
      "hindi": 22,
      "english": 26,
      "history": 20,
      "geography": 11,
      "lifeScience": 4,
      "physicalScience": 8,
      "math": 4,
      "total": 95
    },
    {
      "name": "Mantasha Naaz",
      "roll": "A2/0870/2023",
      "hindi": null,
      "english": null,
      "history": 28,
      "geography": 31,
      "lifeScience": 32,
      "physicalScience": 15,
      "math": 15,
      "total": 121
    },
    {
      "name": "Sneha Verma",
      "roll": "A2/0960/2023",
      "hindi": 16,
      "english": 37,
      "history": null,
      "geography": 12,
      "lifeScience": 11,
      "physicalScience": 5,
      "math": 11,
      "total": 92
    },
    {
      "name": "Aditya Tiwari",
      "roll": "A2/0877/2023",
      "hindi": 14,
      "english": 41,
      "history": 16,
      "geography": 5,
      "lifeScience": 4,
      "physicalScience": 8,
      "math": 3,
      "total": 91
    },
    {
      "name": "Harsh Sharma",
      "roll": "A2/0950/2023",
      "hindi": 17,
      "english": 33,
      "history": 19,
      "geography": 11,
      "lifeScience": 7,
      "physicalScience": 4,
      "math": 0,
      "total": 91
    },
    {
      "name": "Khushi Patel",
      "roll": "A2/0952/2023",
      "hindi": null,
      "english": 38,
      "history": null,
      "geography": 16,
      "lifeScience": null,
      "physicalScience": 21,
      "math": 15,
      "total": 90
    },
    {
      "name": "Srishti Rao",
      "roll": "A2/0916/2023",
      "hindi": 18,
      "english": 41,
      "history": 10,
      "geography": 9,
      "lifeScience": null,
      "physicalScience": 12,
      "math": null,
      "total": 90
    },
    {
      "name": "Harsh Vardhan Rai",
      "roll": "A2/0964/2023",
      "hindi": 17,
      "english": 39,
      "history": 29,
      "geography": 20,
      "lifeScience": 15,
      "physicalScience": 16,
      "math": 0,
      "total": 136
    },
    {
      "name": "Devansh Singh",
      "roll": "A2/0878/2023",
      "hindi": 14,
      "english": 27,
      "history": null,
      "geography": 20,
      "lifeScience": 6,
      "physicalScience": 7,
      "math": 12,
      "total": 86
    },
    {
      "name": "Harsh Bardhan Gupta",
      "roll": "A2/0936/2023",
      "hindi": null,
      "english": 35,
      "history": 27,
      "geography": 17,
      "lifeScience": null,
      "physicalScience": 18,
      "math": 7,
      "total": 104
    },
    {
      "name": "Rishu Maurya",
      "roll": "A2/0874/2023",
      "hindi": null,
      "english": 39,
      "history": 8,
      "geography": 5,
      "lifeScience": 4,
      "physicalScience": 16,
      "math": 9,
      "total": 81
    },
    {
      "name": "Sanskar Pandey",
      "roll": "A2/0904/2023",
      "hindi": 15,
      "english": 39,
      "history": 7,
      "geography": 8,
      "lifeScience": 5,
      "physicalScience": 6,
      "math": 1,
      "total": 81
    },
    {
      "name": "Titli Singh",
      "roll": "A2/0915/2023",
      "hindi": 15,
      "english": null,
      "history": 20,
      "geography": 13,
      "lifeScience": 11,
      "physicalScience": 17,
      "math": 5,
      "total": 81
    },
    {
      "name": "Yash Raj Singh",
      "roll": "A2/0898/2023",
      "hindi": 10,
      "english": 37,
      "history": 5,
      "geography": 3,
      "lifeScience": 9,
      "physicalScience": 9,
      "math": 15,
      "total": 88
    },
    {
      "name": "Kabya Shaw",
      "roll": "A2/0958/2023",
      "hindi": 15,
      "english": 26,
      "history": 2,
      "geography": 10,
      "lifeScience": 8,
      "physicalScience": 13,
      "math": 4,
      "total": 78
    },
    {
      "name": "Manya Singh",
      "roll": "A2/0863/2023",
      "hindi": 17,
      "english": 26,
      "history": 11,
      "geography": 12,
      "lifeScience": 6,
      "physicalScience": 9,
      "math": 6,
      "total": 87
    },
    {
      "name": "Rishika Srivastav",
      "roll": "A2/0914/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": 31,
      "lifeScience": null,
      "physicalScience": 29,
      "math": 14,
      "total": 74
    },
    {
      "name": "Amima Praveen",
      "roll": "A2/0934/2023",
      "hindi": null,
      "english": null,
      "history": 19,
      "geography": 15,
      "lifeScience": 16,
      "physicalScience": 17,
      "math": 6,
      "total": 73
    },
    {
      "name": "Rohit Kr Rai",
      "roll": "A2/0897/2023",
      "hindi": 12,
      "english": 38,
      "history": 6,
      "geography": 6,
      "lifeScience": 7,
      "physicalScience": 3,
      "math": 7,
      "total": 79
    },
    {
      "name": "Rohan Shaw",
      "roll": "A2/0931/2023",
      "hindi": null,
      "english": 31,
      "history": 17,
      "geography": 11,
      "lifeScience": 6,
      "physicalScience": 5,
      "math": 1,
      "total": 71
    },
    {
      "name": "Suman Roy",
      "roll": "A2/0864/2023",
      "hindi": 12,
      "english": 31,
      "history": 13,
      "geography": 8,
      "lifeScience": 9,
      "physicalScience": 8,
      "math": 2,
      "total": 83
    },
    {
      "name": "Aditya Singh",
      "roll": "A2/0907/2023",
      "hindi": 12,
      "english": 33,
      "history": null,
      "geography": 7,
      "lifeScience": 6,
      "physicalScience": 6,
      "math": 1,
      "total": 65
    },
    {
      "name": "Twinkle Kumari",
      "roll": "A2/0962/2023",
      "hindi": 30,
      "english": null,
      "history": 5,
      "geography": 11,
      "lifeScience": 10,
      "physicalScience": 9,
      "math": null,
      "total": 65
    },
    {
      "name": "Vishal Shaw",
      "roll": "A2/0867/2023",
      "hindi": null,
      "english": 30,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": 11,
      "math": 21,
      "total": 62
    },
    {
      "name": "Bisheakh Chourasia",
      "roll": "A2/0901/2023",
      "hindi": 7,
      "english": 30,
      "history": 3,
      "geography": 5,
      "lifeScience": 2,
      "physicalScience": 4,
      "math": 0,
      "total": 51
    },
    {
      "name": "Tarik Raza",
      "roll": "A2/0968/2023",
      "hindi": 8,
      "english": 32,
      "history": 5,
      "geography": 6,
      "lifeScience": 2,
      "physicalScience": 4,
      "math": 3,
      "total": 60
    },
    {
      "name": "Rokshar Khatoon",
      "roll": "A2/0969/2023",
      "hindi": null,
      "english": null,
      "history": 36,
      "geography": 9,
      "lifeScience": 3,
      "physicalScience": null,
      "math": null,
      "total": 48
    },
    {
      "name": "Swaraj Singh",
      "roll": "A2/0908/2023",
      "hindi": 12,
      "english": 26,
      "history": 6,
      "geography": null,
      "lifeScience": 3,
      "physicalScience": null,
      "math": null,
      "total": 47
    },
    {
      "name": "Shafaat Akhtar",
      "roll": "A2/0932/2023",
      "hindi": null,
      "english": null,
      "history": 12,
      "geography": 11,
      "lifeScience": 5,
      "physicalScience": 7,
      "math": 1,
      "total": 36
    },
    {
      "name": "Sanjana Tiwari",
      "roll": "A2/0895/2023",
      "hindi": 3,
      "english": 24,
      "history": null,
      "geography": 5,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": 32
    },
    {
      "name": "Khushbo Chauhan",
      "roll": "A2/0959/2023",
      "hindi": 13,
      "english": null,
      "history": 2,
      "geography": 6,
      "lifeScience": 4,
      "physicalScience": 6,
      "math": 3,
      "total": 34
    },
    {
      "name": "Simon Poddar",
      "roll": "A2/0921/2023",
      "hindi": 8,
      "english": null,
      "history": 13,
      "geography": null,
      "lifeScience": 2,
      "physicalScience": 8,
      "math": null,
      "total": 31
    },
    {
      "name": "Ibtesam parween",
      "roll": "A2/0861/2023",
      "hindi": null,
      "english": null,
      "history": 8,
      "geography": 7,
      "lifeScience": 8,
      "physicalScience": 5,
      "math": 2,
      "total": 30
    },
    {
      "name": "Md Nasir",
      "roll": "A2/0872/2023",
      "hindi": null,
      "english": null,
      "history": 9,
      "geography": 8,
      "lifeScience": 7,
      "physicalScience": 2,
      "math": 0,
      "total": 26
    },
    {
      "name": "Tanisha Prasad",
      "roll": "A2/0941/2023",
      "hindi": 12,
      "english": null,
      "history": 11,
      "geography": 7,
      "lifeScience": 4,
      "physicalScience": 3,
      "math": null,
      "total": 37
    },
    {
      "name": "Saiba Parveen",
      "roll": "A2/0935/2023",
      "hindi": null,
      "english": null,
      "history": 6,
      "geography": 11,
      "lifeScience": 3,
      "physicalScience": 3,
      "math": 2,
      "total": 25
    },
    {
      "name": "Khushi Shaw",
      "roll": "A2/0961/2023",
      "hindi": 7,
      "english": null,
      "history": 11,
      "geography": null,
      "lifeScience": null,
      "physicalScience": 5,
      "math": null,
      "total": 23
    },
    {
      "name": "Fatma Khatoon",
      "roll": "A2/0933/2023",
      "hindi": null,
      "english": null,
      "history": 6,
      "geography": 10,
      "lifeScience": 1,
      "physicalScience": 3,
      "math": 2,
      "total": 22
    },
    {
      "name": "Namala Kavyanjali",
      "roll": "A2/0943/2023",
      "hindi": null,
      "english": null,
      "history": 12,
      "geography": 7,
      "lifeScience": null,
      "physicalScience": 14,
      "math": 6,
      "total": 39
    },
    {
      "name": "Ritika Gupta",
      "roll": "A2/0918/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": 8,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": 8
    },
    {
      "name": "Insha Shabbir",
      "roll": "A2/0871/2023",
      "hindi": null,
      "english": null,
      "history": 9,
      "geography": 7,
      "lifeScience": 5,
      "physicalScience": 3,
      "math": 1,
      "total": 25
    },
    {
      "name": "Simran Gupta",
      "roll": "A2/0967/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": 6,
      "lifeScience": null,
      "physicalScience": 5,
      "math": null,
      "total": 11
    },
    {
      "name": "Aditya Prasad",
      "roll": "A2/0957/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": 8,
      "math": null,
      "total": 8
    },
    {
      "name": "Nidhi Gupta",
      "roll": "A2/0947/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    },
    {
      "name": "Debottam Das",
      "roll": "A2/0963/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    },
    {
      "name": "Krish Kr Shaw",
      "roll": "A2/0940/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    },
    {
      "name": "Shruti gupta",
      "roll": "A2/0942/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    },
    {
      "name": "Md.Sharique Anwar",
      "roll": "A2/0955/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    },
    {
      "name": "Ishwan Aman Parwez",
      "roll": "A2/0965/2023",
      "hindi": null,
      "english": null,
      "history": null,
      "geography": null,
      "lifeScience": null,
      "physicalScience": null,
      "math": null,
      "total": null
    }
   ];