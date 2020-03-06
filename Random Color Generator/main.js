// Courtney Merkel
// Project 1
console.log(`Hi! This is Courtney Merkel's Project 1!`)
console.log(`I've included my algorithm line by line before my code`)

// Create an array of 5+ colors
const colors = ['orange', 'magenta', 'lightblue', 'yellow', 'coral', 'mistyrose', 'palevioletred', 'mediumaquamarine'];

// When button is clicked,
// Change the background color to one of the ones in the array 
// Change <p class="large"> text to the name of the standardized HTML color

// MY ANSWER:
// ----------
// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const p2 = document.querySelector('.large');
// function changeHTMLcolor() {
//     let randomColorIndex = Math.floor(Math.random() * Math.floor(8));
//     body.style.cssText = 'background-color: ' + colors[randomColorIndex];
//     p2.innerText = colors[randomColorIndex];
// }
// button.addEventListener('click', changeHTMLcolor);
// ----------


// CHALLENGE #1
// ------------
// Pick background color RANDOMLY out of hex code possibilities
// Display hex codes as text

// MY ANSWER:
// ----------
// // Find button so later it can listen when clicked
// const button = document.querySelector('button');
// // Find body so later we can modify the CSS
// const body = document.querySelector('body');
// // Find the second line of text in my HTML so we can change it
// const p2 = document.querySelector('.large');
// // Make a list of all of the possibilities that a give number in a 6-digit hex code could be
// const hexPossibilities = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
// // Create a function that will be called later upon click
// function changeHexColor() {
//     // Randomly generate the 1st value of hex code
//     let hex1 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Randomly generate the 2nd value of hex code
//     let hex2 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Randomly generate the 3rd value of hex code
//     let hex3 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Randomly generate the 4th value of hex code
//     let hex4 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Randomly generate the 5th value of hex code
//     let hex5 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Randomly generate the 6th value of hex code
//     let hex6 = hexPossibilities[Math.floor(Math.random() * Math.floor(16))];
//     // Concatenate the full hex code together, with a hash at the beginning
//     let fullHexCode = '#' + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;
//     // Set the body's style of cssText to contain the new hex code that will change the color
//     body.style.cssText = 'background-color: ' + fullHexCode;
//     // Change this line of text to show the user what color hex code they're viewing for the body's background
//     p2.innerText = fullHexCode;
//     // Find the first line of text in my HTML
//     let title = document.querySelector('.first-paragraph');
//     // Change it to reflect the fact that it's a hex code, not a standardized  HTML color code
//     title.innerText = 'hex color code:';
// }
// // Upon click of the button, instantiate the changeHexColor function
// button.addEventListener('click', changeHexColor);
// ----------

// CHALLENGE #2
// When button is clicked,
// Change background color to randomly generated HSL color
// Display HSL as text
// IF background color is dark, display light text
// ELSE IF background color is light, display dark text

// MY ANSWER:
// ----------
// Find button so later it can listen when clicked
const button = document.querySelector('button');
// Find body so later we can modify the CSS
const body = document.querySelector('body');
// Find the second line of text in my HTML so we can change it
const p2 = document.querySelector('.large');
// Create a function that will be called later upon click
function changeHSLColor() {
    // Randomly generate the 1st value of HSL code, hues can range from 0 to 360
    let hue = Math.ceil(Math.random() * Math.floor(360));
    // Randomly generate the 2nd value of HSL code, saturation can range from 0 to 100
    let saturation = Math.ceil(Math.random() * Math.floor(100));
    // Randomly generate the 3rd value of HSL code, lightness can range from 0 to 100
    let lightness = Math.ceil(Math.random() * Math.floor(100));
    // Concatenate the full HSL code together, formatted with percents and parentheses
    let fullHSLCode = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    // Set the body's style of cssText to contain the new hex code that will change the color
    body.style.cssText = 'background-color: ' + fullHSLCode;
    // Change this line of text to show the user what color hex code they're viewing for the body's background
    p2.innerText = fullHSLCode;
    // Find the first line of text in my HTML
    let title = document.querySelector('.first-paragraph');
    // Change it to reflect the fact that it's a hex code, not a standardized  HTML color code
    title.innerText = 'hsl color code:';
    // Determine if lightness is below 50
    if (lightness < 50) {
        // Add the CSS class of light-text to the title & p2
        title.classList.add('light-text');
        p2.classList.add('light-text');
        // If lightness is greater than 50
    } else if (lightness >= 50) {
        // Remove light-text CSS from title & p2
        title.classList.remove('light-text');
        p2.classList.remove('light-text');
        // Add dark-text CSS to title & p2
        title.classList.add('dark-text');
        p2.classList.add('dark-text');
    }
}
// Upon click of the button, instantiate the changeHexColor function
button.addEventListener('click', changeHSLColor);
// ----------