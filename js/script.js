let type = "logout";
function handleClearInput() {
    document.getElementById("message").innerHTML = ''
}

function handleClearOutput() {
    document.getElementById("result").innerHTML = ""
}


// ConcatenatingTextStrings Function
function ConcatenatingTextStrings() {
    let firstValue = prompt("Enter first value");
    if (!firstValue) {
        alert("Plaese enter first value");
        return;
    } else {
        let secondValue = prompt("Enter second value");
        if (!secondValue) {
            alert("Plaese enter second value");
            return;
        }
        alert(firstValue + secondValue);
        document.getElementById("message").innerHTML = '<p>let firstValue = prompt("Enter first value");<br>let secondValue = prompt("Enter second value");<br>alert(firstValue + secondValue)</p > '
        document.getElementById("result").innerHTML = firstValue + secondValue;
    }
}

// functionGetName
function functionGetName() {
    let name = prompt("Enter your name");
    if (!name) {
        alert("Please enter your name")
        return
    } else {
        alert(name)
        document.getElementById("message").innerHTML = "<p>let name = prompt('Enter your name');<br> alert(name)</p>"
        document.getElementById("result").innerHTML = name;
    }
}

// functionOperator
function functionOperator() {
    let firstValue = +prompt("Enter first value")
    if (!firstValue) {
        alert("Plaese enter first value");
        return;
    } else {
        let secondValue = +prompt("Enter second value");
        if (!secondValue) {
            alert("Plaese enter second value");
            return;
        }
        if (firstValue === secondValue) {
            alert("Your value are same");
        } else {
            alert("Your values are not same")
        }
        document.getElementById("message").innerHTML = "<p>let val1 = +prompt('enter first value')<br> let val2 = +prompt('enter second value)<br>if(val1 === val2{alert('Values are same')}</p>"
        document.getElementById("result").innerHTML = "Your first value is " + firstValue + " & second value is " + secondValue;
    }
}

// ifElseIf
function ifElseIf() {
    let age = +prompt("Enter your age")
    if (!age) {
        alert("Please enter your age");
        return
    } else {
        if (age < 18) {
            alert("You are baby");
            document.getElementById("message").innerHTML = "<p>You are a baby</p>";
            document.getElementById("result").innerHTML = "Your age is " + age + " & you are baby";
        } else {
            let weight = +prompt("Enter your weight");
            if (age < 35 && weight < 70) {
                alert("You are smart boy");
                document.getElementById("message").innerHTML = "<p>You are a smart boy</p>";
                document.getElementById("result").innerHTML = "Your age is " + age + " & your weight is " + weight + " & you are smart boy";
            } else if (age >= 35) {
                if (weight > 70) {
                    alert("You are fat boy");
                    document.getElementById("message").innerHTML = "<p>You are a fat boy</p>";
                    document.getElementById("result").innerHTML = "Your age is " + age + " & your weight is " + weight + " & you are fat boy";
                } else if (weight < 70) {
                    alert("You are smart boy");
                    document.getElementById("message").innerHTML = "<p>You are a smart boy</p>";
                    document.getElementById("result").innerHTML = "Your age is " + age + " & your weight is " + weight + " & you are smatr boy";
                }
            }
        }
    }
}
function login() {
    let value = prompt("Name ", "Muhammad Bilal");
    let code = prompt("Password  ", "1234567890");
    if (!code) {
        alert("Username / Password incorrect");
        return;
    }
    if (!value) {
        alert("Username / Password incorrect");
        return;
    }
    else {
        alert("You are logged in!")
        type = "login"
    }
}
function check() {
   if(type === "login"){
    alert("🥳 Congratulations! You are logged in")
   }else{
    alert(" 🙏  Sorry! you are logged out")
   }
}