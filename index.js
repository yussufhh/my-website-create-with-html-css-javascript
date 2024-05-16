// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle click events on a button
    function handleClick() {
        alert("Button clicked!");
    }

    // Get the button element by its ID
    var button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", handleClick);

    // Function to change the text of an element
    function changeText() {
        var textElement = document.getElementById("myText");
        textElement.textContent = "Text changed!";
    }

    // Get the element by its ID
    var textButton = document.getElementById("changeTextButton");

    // Add a click event listener to the button
    textButton.addEventListener("click", changeText);
});
