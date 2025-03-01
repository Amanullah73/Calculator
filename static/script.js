function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById("display").value;

    fetch("/calculate", {
        method: "POST",
        body: JSON.stringify({ expression: expression }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("display").value = data.result;
    })
    .catch(error => console.error("Error:", error));
}

function turnOff() {
    document.getElementById("display").value = "";
    document.getElementById("display").disabled = true;
    
    let buttons = document.querySelectorAll("button:not(.off)");
    buttons.forEach(button => {
        button.disabled = true;
        button.style.background = "#888"; // Gray out buttons
    });
}
