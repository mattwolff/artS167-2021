let btnA = document.querySelector("#something");
let btnB = document.querySelector("#else");
let body = document.querySelector('body');
let secret = document.querySelector('#secret');

console.log(btnA, btnB);

btnA.onclick = function() {
    body.classList.toggle('invert');
}

btnB.onclick = function() {
    secret.classList.toggle('hidden');
}

let w = document.querySelector("#width");
let h = document.querySelector("#height");

function reportDimensions() {
  w.textContent = window.innerWidth;
  h.textContent = window.innerHeight;
}
reportDimensions();
window.onresize = reportDimensions;


let header = document.querySelector('h1');

setInterval(function() {
    header.style.fontSize = `${Math.random() * 200}px`;
}, 1000);





// console.log('Howdy, Console');

// // let numberOfVisitors;
// // numberOfVisitors = 4;

// let groceries = ["eggs", "spinach", "milk"];
// console.log(groceries);


// function sayHello(name) {
//     console.log(`hello ${name}`);
// }

// sayHello(12);

// function addNumbers(n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// console.log(addNumbers(12,12,12));


// console.log(header);
// // header.innerText = 'Something New';