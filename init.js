let container = document.getElementById("container");
let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "click here";
container.append(btn);

btn.addEventListener("click",handleOnClick);
function handleOnClick(){
    document.body.style.backgroundColor = "red";
}