
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");
let resultArea = document.getElementById(".comment");


function calculate(){
    if (height.value== '' || weight.value== '' || (male.checked==false && female.checked==false)){
        console.log('All fields are required!')
    }else {
        countBMI()
    }
}

function countBMI(){

let bmi = weight.value/(height.value/100*height.value/100)
console.log(bmi);
let result
if(bmi<18.5){
    result = 'underweight';
}else if(18.5<=bmi&&bmi<=24.9){
    result = 'healthy';
}else if(25<=bmi&&bmi<=29.9){
    result = 'overweight';
}else if(30<=bmi&&bmi<=34.9){
    result = 'obese'
}else {
    result = 'extremely obese';
}
console.log(result)


document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

