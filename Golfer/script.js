// (Score - Course Rating) * 113 / Slope Rating = Handicap
// Pompano Palms Course Rating: 67.3
// Pompano Palms Slope Rating: 119

console.log('listening');

// let pastScores = [];

// const pompanoPalms = {
//     course: 67.3,
//     slope: 119
// };

// const pompanoPines = {
//     course: 67.9,
//     slope: 128
// };

// const palmAireOaks = {
//     course: 68.4,
//     slope: 121
// };

// const palmAirePalms = {
//     course: 70.1,
//     slope: 125
// };

// const coralRidge = {
//     course: 70,
//     slope: 126
// }


function getHandicap() {

//     let courseRating = 0;
//     let slopeRating = 0;

//     let ddSelection = document.getElementById(courses);

//     if (window.document.getElementById('courses').value === "pompanoPines"){
//         let courseRating = pompanoPines.course;
//         let slopeRating = pompanoPines.slope;
//         console.log(courseRating);
//         console.log(slopeRating);
    
//     } else if (document.getElementById('courses').value === "pompanoPalms"){
//         let courseRating = pompanoPalms.course;
//         let slopeRating = pompanoPalms.slope;
//         console.log(courseRating);
//         console.log(slopeRating);
    
//     } else if (document.getElementById('courses').value === "palmAireOaks") {
//         let courseRating = palmAireOaks.course;
//         let slopeRating = palmAireOaks.slope;
//         console.log(courseRating);
//         console.log(slopeRating);
    
//     } else if (document.getElementById('courses').value === "palmAirePalms") {
//         let courseRating = palmAirePalms.course;
//         let slopeRating = palmAirePalms.slope;
//         console.log(courseRating);
//         console.log(slopeRating);
    
//     } else if (document.getElementById('courses').value === "coralRidge") {
//         let courseRating = coralRidge.course;
//         let slopeRating = coralRidge.slope;
//         console.log(courseRating);
//         console.log(slopeRating);
    
//     } else {
//         console.log("none selected")
//     }
    const course = document.getElementById("golfCourses");

    let score = document.getElementById('recentScore').value;
    // let courseRating = 67.3;
    // let slopeRating = 119;
    let courseRating;
    let slopeRating;

    // pastScores.push(handicap)
    switch(course.options[course.selectedIndex].value){
        case "pompanoPalms":
        console.log("Pompano Palms");
        courseRating = 67.3;
        slopeRating = 119;
        break;
        case "pompanoPines":
        console.log("Pompano Pines");
        courseRating = 65;
        slopeRating = 115;
        break;
        default: console.log("default");
    }
    let handicap = (score - courseRating) * 113 / slopeRating;

    document.getElementById("result").innerHTML = `Your handicap is ${handicap.toFixed(0)}.`;

    

    // document.getElementById("pastScores").innerHTML = "<li>" + pastScores[i] + "</li>";

    // console.log(pastScores);

};

// for (let i = 0; i < pastScores.length; i++) {
//     document.getElementById("pastScores").innerHTML = pastScores[i];
// }

// document.getElementById("pastScores").innerHTML = pastScores;