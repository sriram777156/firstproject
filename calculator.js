let answer=document.body.getElementById("answer");

console.log("ok")
function click(value) {
    console.log("ok", value)
    if(answer.textContent=="0"){
        answer.textContent=value

    }
    else{
        answer.textContent+=value
    }
      
}