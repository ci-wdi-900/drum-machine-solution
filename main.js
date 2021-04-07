// Create a count that keeps track of the metronome
// This will always be 1, 2, 3, or 4
let count = 0;

// Setup the sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');

// Get the four checkboxes
const metronomeCheck = document.querySelector('#metronome input[type="checkbox"]');
const kickDrumCheck = document.querySelector('#kick-drum input[type="checkbox"]');
const snareDrumCheck = document.querySelector('#snare-drum input[type="checkbox"]');
const hiHatCheck = document.querySelector('#hi-hat input[type="checkbox"]');

// Get the three text inputs
const kickDrumInput = document.querySelector('#kick-drum input[type="text"]');
const snareDrumInput = document.querySelector('#snare-drum input[type="text"]');
const hiHatInput = document.querySelector('#hi-hat input[type="text"]');

// Get the element in which to display the metronome count
const countDisplay = document.querySelector('.count');

// This function is called every 600ms
function update() {

    // Every update, add one to count. If count is 4, reset it to 1.
    count = count % 4 + 1;

    // Display the count on the DOM
    countDisplay.innerText = `Count: ${count}`

    // If the metronome checkbox is checked...
    if (metronomeCheck.checked) {
        // If count is 4, play tock. Else, play tick
        if (count === 4) {
            tock.play();
        } else {
            tick.play();
        }
    }

    // If kick drum checkbox is checked AND the value of the kick
    // drum text input equals the metronome count, play the kick drum
    if (kickDrumCheck.checked && kickDrumInput.value === count.toString()) {
        kickDrum.play();
    }

    // If snare drum checkbox is checked AND the value of the snare
    // drum text input equals the metronome count, play the snare drum
    if (snareDrumCheck.checked && snareDrumInput.value === count.toString()) {
        snareDrum.play();
    }

    // If hi hat checkbox is checked AND the value of the hi hat
    // text input equals the metronome count, play the hi hat
    if (hiHatCheck.checked && hiHatInput.value === count.toString()) {
        hiHat.play();
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
