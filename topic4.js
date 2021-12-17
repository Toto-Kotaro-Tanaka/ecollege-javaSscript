// document.getElementById("title").innerHTML = "Good-Bye World!";
// document.querySelector("h1").innerHTML = "Good morning World";

document
    .getElementById("clickMe")
    .addEventListener("click", () => console.log("hey..."));

const btn = document.getElementById("remdiv");
const tempDiv = document.getElementById("tempDiv");

btn.addEventListener("click", function removeDiv() {
    let status = document.getElementById("remdiv").value;
    if (status === "Remove") {
        tempDiv.parentNode.removeChild(tempDiv);
        btn.value = "Replace";
    } else {
        let eDiv = document.createElement("div");
        eDiv.id = "tempDiv";
        document.body.appendChild(eDiv);
        btn.value = "Remove";
    }
    console.log(status);
});

let listItem = 0;

function addList() {
    if (listItem >= 4) {
        listItem = 0;
    }

    if (listItem == 0) {
        let travelMode = "Plane";
    }

    if (listItem == 1) {
        let travelMode = "Train";
    }

    if (listItem == 2) {
        let travelMode = "Automobile";
    }

    if (listItem == 3) {
        let travelMode = "Boat";
    }
    listItem++;

    let newNode = document.createElement("LI");
    let textNode = document.createTextNode("travelMode");
    newNode.appendChild(textNode);
    document.getElementById("transportation").appendChild(newNode);
}

function removeList() {
    let list = document.getElementById("transportation");
    list.removeChild(list.childNodes[0]);
}