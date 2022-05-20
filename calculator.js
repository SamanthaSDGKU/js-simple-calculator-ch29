function calculation(){
    let num1 = Number(prompt("Enter the num1: "));
    let num2 = Number(prompt("Enter the num2: "));
    //sum result
    document.getElementById("results").innerHTML=` 
    <p>${num1} + ${num2} = ${sum(num1,num2)}</p>
    <p> Subs </p>
    <p> Multi </p>
    <p> Div </p>
    `;  
}

function sum(a,b){
    return a+b;
}

//subs function

//multi function

//division function