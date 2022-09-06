let counter=0;
document.getElementById("decrement").onclick=function(){
    counter-=1;
    document.getElementById('count').innerHTML=counter;
}
document.getElementById("increment").onclick=function(){
    counter+=1;
    document.getElementById('count').innerHTML=counter;
}