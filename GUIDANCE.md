# Guidance

This file contains guidance on how to accomplish this assignment. As always, there are many ways to solve these projects. The below notes lay out one possible way.

## 1A

1. The first thing we need to do is load the tock sound. This can be done exactly like how we load the tick sound on line 2. Check out the `sounds` folder to see all the available mp3 files in this project.

1. Now we need to know when every fourth beat is occuring. To do this, we'll need a new global variable that keeps track of the current metronome count. Create this variable somewhere above the `update()` function using `let`. Initialize this variable to `0`.

1. Everytime that `update()` is run, we need to increment our count. Do this by adding one to the count variable inside of the `update()` function.

1. Add a conditional in `update()` that plays `tock` if the count is divisble by four and otherwisie plays `tick`.

## 1B

1. In the HTML, create a new element somewhere that will contain the metronome count.

1. Every time the `update()` function is called, we need to update the value of this metronome count element. We can do this by determing what the current count is based on the global count variable we defined previously.

1. Again, within `update()`, use `document.querySelector` to get the element that will contain the metronome count. Then, set the `.innerText` of that element to the current count.

## 2A

1. In the HTML, create a `div` that will contain your checkboxes. You may want to mess with your CSS to make this look nice.

1. Now inside this `div`, create four checkboxes. Each checkbox should also have a parent container. This could look like the following:

```
<div>
  <input type="checkbox" id="kick-drum" value="kick-drum">
  <label for="kick-drum">Kick drum</label>
</div>
```

## 2B

* In your JS, we'll need some additional code in `update()` that determines if the metronome checkbox is checked.

* Inside `update()`, use `document.querySelector` to select the 'metronome' checkbox element. Determine if it's check by looking at its `.checked` property. If it is checked, play either tick or tock (the code you wrote previously).

## 2C

* Load the other instrument `mp3` files above the `update()` function in the same way that `tick.mp3` was loaded.
* Similar to the code in 2B, inside your update function, determine whether the other three checkboxes are checked.
* If they are, play the associated instrument.

## 3A

* Wherever you add the checkboxes to the page, also add some text inputs to the page. This might look like the following:

```
<div>
  <input type="checkbox" id="kick-drum" value="kick-drum">
  <label for="kick-drum">Kick drum</label>

  <input id="kick-drum-timing>
</div>
```

## 3B

* In your JS, right after determining if an instrument's checkbox was checked (inside that if statement), determine what the value of the associated timing input is. You can do this by first selecting that input element with `document.querySelector`, then by looking at its `.value` property.

* Compare this `.value` number to your global current metronome count variable. If both are equal, play the sound! Warning: `.value` may be a string. If you want to convert this to a number, use `Number(str)`. The following sample code may help.

```
// Total number of beats that have occured
let count = 0;

function update() {

    // Add one to count
    count++;

    // Get the count on the metronome (1, 2, 3, or 4)
    const metronomeCount = (count % 4) + 1;

    // Get the kickdrum checkbox
    const checkbox = document.querySelector( ... );

    // If it's checked...
    if (checkbox.checked) {

        // Get the kickdrum timing input
        const timingInput = document.querySelector( ... );
        
        // If the timing input count equals the metronome count...
        if (Number(timingInput.value) === metronomeCount) {

            // TODO: Play the sound!
        }
    }
}

```