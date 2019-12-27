const percent = document.querySelector("#percentage");
const categ = document.querySelector("#category");
const add = document.querySelector(".add");
const addElementButt = document.querySelector(".addElem");
const inputList = document.querySelector(".element-inputs")
const selectLi = document.querySelector("li").lastElementChild;
const yourScore = document.querySelector(".yourScore");
const totalScore = document.querySelector(".totalScore");
const percentage = document.querySelector(".yourPercent");
const percentageTotal = document.querySelector(".totalPercent");

let sumScore = 0;
let sumTotal = 0;
let actNum = 0;
let yourPercent; 
let totalPercent; 

addElementButt.addEventListener("click",addElement);
percent.addEventListener("input",computePercentage);
if(percent.value.length === 0)
        percent.value = 0;
    

function addElement(){
    const li = document.createElement('li');
    const addActBox = document.createElement('input','text');
    const addScoreBox = document.createElement('input','number');
    const addTotalBox = document.createElement('input','number');

    li.appendChild(addActBox);
    addActBox.classList.add("activity");
    addActBox.value = "Activity " + (actNum+1) ;

    li.appendChild(addScoreBox);
    addScoreBox.classList.add("scoreBox");
    addScoreBox.setAttribute("type","number");
    addScoreBox.setAttribute("onInput","computeYourScore()");
    addScoreBox.setAttribute("step","0.01");
    addScoreBox.value = 0 ;

    li.appendChild(addTotalBox);
    addTotalBox.classList.add("totalBox");
    addTotalBox.setAttribute("type","number");
    addTotalBox.setAttribute("onInput","computeTotalScore()");
    addTotalBox.setAttribute("step","0.01");
    addTotalBox.value = 0 ;
   
    inputList.appendChild(li);
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createElement('br'));
    //document.createElement('br');
    actNum++;
    console.log(inputList);
    computeYourScore();
    computeTotalScore();
    computePercentage();
}

function getWeight(){
    
}


function computeYourScore(){
    const liVal = document.querySelectorAll('li');
    const score = document.querySelectorAll('.scoreBox');
    let sum = 0;
    let scoreIn;
    for(let i = 0; i < liVal.length; i++){
        if(score[i]){
            scoreIn = parseFloat(score[i].value);
            if(score[i].value.length == 0){
                score[i].value = 0;
                scoreIn = 0;
                
            }
            else
                score[i].value = scoreIn;

            sum = sum + scoreIn;
            sumScore = sum;
            score[i].addEventListener("input",displayScore(sum));
            score[i].addEventListener("input",computePercentage);
        }
    
    }
}
function computeTotalScore(){
    const liVal = document.querySelectorAll('li');
    const score = document.querySelectorAll('.totalBox');
    let sum = 0;
    let scoreIn;
    for(let i = 0; i < liVal.length; i++){
        if(score[i]){
            scoreIn = parseFloat(score[i].value);
            if(score[i].value.length == 0){
                score[i].value = 0;
                scoreIn = 0;
            }
            else
                score[i].value = scoreIn;

            sum = sum + scoreIn;
            sumTotal = sum;
            score[i].addEventListener("input",displayTotal(sum));
            score[i].addEventListener("input",computePercentage);
            
        }
    
    }
}

function computePercentage(){
    yourPercent = sumScore / sumTotal;
    totalPercent = yourPercent * percent.value / 100;
    percentage.innerHTML = `Your Percentage: ${yourPercent.toFixed(2) * 100} %`;
    percentageTotal.innerHTML = `Total Percentage: ${totalPercent.toFixed(2) * 100} %`;
}


function displayTotal(sum){
    totalScore.innerHTML = `Total Score: ${sum}`;
}

function displayScore(sum){
    yourScore.innerHTML = `Your Score: ${sum}`;
}

