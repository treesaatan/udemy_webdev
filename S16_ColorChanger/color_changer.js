let isPurple = false;
let button = document.querySelector("button");

// *** Easy to Make Solution ***
// button.addEventListener("click", function() {
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });

// *** Easy to Make Solution pt. 2***
// button.addEventListener("click", function() {
//     if(isPurple){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });


// *** Most Efficient Solution ***
button.addEventListener("click", function() {
    document.body.classList.toggle("pink");
});


