const percent = document.querySelector("#percentage");
const categ = document.querySelector("#category");
const add = document.querySelector(".add");
const addElementButt = document.querySelector(".addElem");
const inputList = document.querySelector(".element-inputs")
const selectLi = document.querySelector("li").lastElementChild;


let sum = 0;
let actNum = 0;

addElementButt.addEventListener("click",addElement);


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
    addScoreBox.setAttribute("onInput","computeTotalScore()");
    addScoreBox.value = 0 ;

    li.appendChild(addTotalBox);
    addTotalBox.classList.add("totalBox");
    addTotalBox.value = 0 ;
   
    inputList.appendChild(li);
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createElement('br'));
    //document.createElement('br');
    actNum++;
    console.log(inputList);
    computeTotalScore();
}


function computeTotalScore(){
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
                //sum = 0;
            }
            else{
                score[i].value = scoreIn;
            }
          
            sum = sum + scoreIn;
            score[i].addEventListener("input",getVal(sum));
        }
    
    }
}



function getVal(sum){
    categ.value = sum;
}

