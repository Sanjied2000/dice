let A= document.getElementsByClassName('A');
let B= document.getElementsByClassName('B');

A[3].style.visibility='hidden';
A[4].style.visibility='hidden';
A[5].style.visibility='hidden';
B[3].style.visibility='hidden';
B[4].style.visibility='hidden';
B[5].style.visibility='hidden';
function dice(){

    let a=Math.floor(Math.random() * 6)+1;

    let b=Math.floor(Math.random() * 6)+1;
refresh()    ;

    if(a==1){
        A[4].style.visibility='visible';
    }
    else if(a==2){
        A[2].style.visibility='visible';
        A[6].style.visibility='visible';
    }
    else if(a==3){
        A[0].style.visibility='visible';
        A[4].style.visibility='visible';
        A[8].style.visibility='visible';
    }
    else if(a==4){
        A[0].style.visibility='visible';
        A[6].style.visibility='visible';
        A[2].style.visibility='visible';
        A[8].style.visibility='visible';
    }
    else if(a==5){
        A[0].style.visibility='visible';
        A[2].style.visibility='visible';
        A[4].style.visibility='visible';
        A[6].style.visibility='visible';
        A[8].style.visibility='visible';
    }
    else if(a==6){
        A[0].style.visibility='visible';
        A[1].style.visibility='visible';
        A[2].style.visibility='visible';
        A[6].style.visibility='visible';
        A[7].style.visibility='visible';
        A[8].style.visibility='visible';
    }
    if(b==1){
        B[4].style.visibility='visible';
    }
    else if(b==2){
        B[2].style.visibility='visible';
        B[6].style.visibility='visible';
    }
    else if(b==3){
        B[0].style.visibility='visible';
        B[4].style.visibility='visible';
        B[8].style.visibility='visible';
    }
    else if(b==4){
        B[0].style.visibility='visible';
        B[6].style.visibility='visible';
        B[2].style.visibility='visible';
        B[8].style.visibility='visible';
    }
    else if(b==5){
        B[0].style.visibility='visible';
        B[2].style.visibility='visible';
        B[4].style.visibility='visible';
        B[6].style.visibility='visible';
        B[8].style.visibility='visible';
    }
    else if(b==6){
        B[0].style.visibility='visible';
        B[1].style.visibility='visible';
        B[2].style.visibility='visible';
        B[6].style.visibility='visible';
        B[7].style.visibility='visible';
        B[8].style.visibility='visible';
    }




    if(a>b){
        document.getElementById("vic").innerHTML = "🚩Player 1 win";
       
    }
    else if(b>a){
        document.getElementById("vic").innerHTML = "Player 2 win🚩";
    }
    else{
        document.getElementById("vic").innerHTML = "Draw!!!";
    }
}
function refresh(){
for(let i=0;i<=8;i++){
    A[i].style.visibility='hidden';
}
for(let i=0;i<=8;i++){
    B[i].style.visibility='hidden';
}
}



