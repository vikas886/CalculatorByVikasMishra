let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('td');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
    
        if(buttonText=='AC'){
        screenValue='';
        screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    });
}
