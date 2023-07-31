var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var resultArea = document.getElementById(".comment");


function calculate(){
    if (age.value== '' || height.value== '' || weight.value== '' || (male.checked==false && female.checked==false)){
        console.log('All fields are required!')
    }else {
        countBMI()
    }
}

function countBMI(){
    var p = [age.value, height.value, weight.value];

    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female")
    }

console.log(p)
var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
console.log(bmi)
var result = '';
if(bmi<18.5){
    result = 'underweight';
}else if(18.5<=bmi&&bmi<=24.9){
    result = 'healthy';
}else if(25<=bmi&&bmi<=29.9){
    result = 'overweight';
}else if(30<=bmi&&bmi<=34.9){
    result = 'obese'
}else if(35<=bmi){
    result = 'extremely obese';
}
console.log(result)


document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

