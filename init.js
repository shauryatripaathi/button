// let container = document.getElementById("container");
// let btn = document.createElement("button");
// btn.id = "btn";
// btn.innerHTML = "click here";
// container.append(btn);

// btn.addEventListener("click",handleOnClick);
// function handleOnClick(){
//     if(document.body.style.backgroundColor == ""){
//         document.body.style.backgroundColor = "red";
//     }
//     else{
//         document.body.style.backgroundColor = "";
//     }
//     }


// btn.addEventListener("click",handleOnBtn);
// function handleOnBtn(){
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
    
//     document.body.style.backgroundColor = `rgb(${x} ${y} ${z})`
//     console.log(x,y,z)
// }

let container = document.querySelector('#container');
let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "this is a button";
container.appendChild(btn);

let text1 = document.createElement("div");
text1.id = "text1";
text1.innerHTML = "this will change after click";
container.append(text1);

btn.addEventListener("click", handleOnClick);
function handleOnClick(){
    if(text1.innerHTML == "this will change after click"){
        text1.innerHTML = "text changed";
    }
    else{
        text1.innerHTML = "this will change after click";
    }
}