// document.getElementById("title").innerHTML = "Good-Bye World!";
// document.querySelector("h1").innerHTML = "Good morning World";

document
    .getElementById("clickMe")
    .addEventListener("click", () => console.log("hey..."));

const btn = document.getElementById("remdiv");
const tempDiv = document.getElementById("tempDiv");

const removeDiv = () => {
    tempDiv.parentNode.removeChild(tempDiv);
};

btn.addEventListener("click", removeDiv);