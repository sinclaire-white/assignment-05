
// complete button click alert and disable

function interaction(id){
    document.getElementById(id)
    .addEventListener("click", function(event){
        event.preventDefault();
        
        document.getElementById(id).disabled = true;
        let taskAssigned = innerHTMLInNumber("task-assigned");
        let taskCompleted = innerHTMLInNumber("task-completed");
        if(taskAssigned>0){   
        let decrease = taskAssigned-1;
        let increase = taskCompleted+1;
        document.getElementById("task-assigned").innerHTML = decrease;
        document.getElementById("task-completed").innerHTML = increase;
        alert("Board updated successfully");
        if(decrease===0){
            alert("Congratulations you have completed all the availabe task");
        }
        }
        })
}


function innerHTMLInNumber(id){
    return parseInt(document.getElementById(id).innerHTML);
}


interaction("ShopEase-btn");
interaction("CloudSync-btn");
interaction("SwiftPay-btn");
interaction("Meta-btn");
interaction("Google-btn");
interaction("Glassdoor-btn");

// dynamic date

// const date = new Date();
// date.toLocaleDateString();
// document.getElementById("date").innerHTML=date;

const today = new Date();
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dayNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
let year = today.getFullYear();
let month = monthNames[today.getMonth()];
let date = today.getDate();
let day = dayNames[today.getDay()];

document.getElementById("date").innerText = `${month} ${date}, ${year}`;

document.getElementById("day").innerText = `${day}`;


// Clear History

document.getElementById("clear-btn")
.addEventListener("click", function(){
    document.getElementById("history")
    .innerHTML=""
})



// bg-color-change

function generateRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}

document.getElementById("color-change").addEventListener("click", function(){
    document.body.style.backgroundColor = generateRandomColor();
})


























// document.getElementById("ShopEase-btn")
// .addEventListener("click", function(){
//     alert("Board updated successfully");
//     document.getElementById("ShopEase-btn").disabled = true;
//     let taskAssigned = innerHTMLInNumber("task-assigned");
//     let taskCompleted = innerHTMLInNumber("task-completed")
//     let decrese = taskAssigned-1;
//     let increase = taskCompleted+1;
//     document.getElementById("task-assigned").innerHTML = decrese;
//     document.getElementById("task-completed").innerHTML = increase;
// })




// function disable(id){
//     document.getElementById(id).disabled = true;
// }



// parseInt(document.getElementById("task-assigned").innerHTML);

// parseInt(document.getElementById("task-completed").innerHTML);