let counter=0;

// function to decrease the count by 1
document.getElementById("decrement").onclick=function(){
    counter-=1;
    document.getElementById('count').innerHTML=counter;
}

//function to increase the count by 1
document.getElementById("increment").onclick=function(){
    counter+=1;
    document.getElementById('count').innerHTML=counter;
}