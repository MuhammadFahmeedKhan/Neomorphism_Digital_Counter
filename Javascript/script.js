const digit = document.getElementById('digit');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

let count = 0;

plus.addEventListener('click', () =>{
    count++;
    digit.innerHTML = count;
})

minus.addEventListener('click', () =>{
    count--;
    digit.innerHTML = count;
    
    if(count==0){
        minus.disabled=true;
    }
    else if(count!=0 && count<0){
         minus.disabled = false;
     }
})

reset.addEventListener('click', () =>{
    count=0;
    digit.innerHTML = count;
})