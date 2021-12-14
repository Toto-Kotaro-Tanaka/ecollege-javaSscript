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