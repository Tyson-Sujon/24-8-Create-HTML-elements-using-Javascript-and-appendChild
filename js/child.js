// const x = document.getElementById("players-container");
// console.log(document.getElementById("players-container"));

//create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "New born footballer ";

//find the parent where you will add the child

const playersList = document.getElementById("player-list");

// append the child to the parent (11.25)
playersList.appendChild(newChild);
