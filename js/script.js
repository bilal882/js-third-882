let cities = ["Faisalabad", "Lahore", "Karachi", "Sialkot", "Okara", "Islamabad", "Multan"]

function clearFunction() {
    document.getElementById("input").value = ""
}

function simplrAlert() {
    document.getElementById("output").innerHTML = "";
    let value = document.getElementById("input").value;
    if (!value) {
        alert("Invalid value")
    } else {
        alert(value)
    }
}

function printMyName() {
    document.getElementById("output").innerHTML = "";
    let value = document.getElementById("input").value;
    if (!value) {
        alert("Invalid value")
    } else {
        alert("Have a Good day" + value + " 🥳")
        document.getElementById("output").innerHTML = "Have a Good day" + value + " 🥳";
    }
}
function clearOutput() {
    document.getElementById("output").innerHTML = ""
}


function printAllCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br>";
    }
}

function addCity() {
    document.getElementById("output").innerHTML = "";
    let value = document.getElementById("input").value;
    if (!value) {
        alert("Invalid value")
    } else {
        cities.push(value);
        for (let i = 0; i < cities.length; i++) {
            document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br>";
            document.getElementById("input").value = ""
        }
    }
}


function generateTable() {
    document.getElementById("output").innerHTML = "";
    let value = +prompt("Enter number");
    if (!value) {
        alert("Please enter a valid value ")
    } else {
        for (let i = 1; i < 11; i++) {
            document.getElementById("output").innerHTML += value + "*" + i + " = " + value * i + "<br>";
        }
    }
}