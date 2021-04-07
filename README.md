# Drum machine

In this project, you'll be creating a drum machine that runs in the browser! 

Check out the starting point for this project here: https://ci-wdi-900.github.io/drum-machine/

We're given a ticking metronome that plays a sound every 600ms. In this assignment, we'll transform this simple metronome into a drum machine that lets us make a variety of different beats!

**Make at least one commit per part of this assignment.**

If you get stuck on anything, check out [GUIDANCE.md](GUIDANCE.md).

## Part 1: Improving the metronome

### 1A: Playing `tock.mp3`

The first thing to do for this assignment is to improve the metronome. Right now, the metronome only plays the 'tick.mp3' sound. Lets improve this to play the 'tock.mp3' sound every fourth beat. The metronome should continue to play 'tick.mp3' for the three prior beats.

`i.e.: tick tick tick tock tick tick tick tock ...`

### 1B: Metronome count

Additionally, let's display the current count in the metronome. This count should start at 1 and increment everytime the metronome ticks. After 4, it whould reset back to 1.

`i.e.: 1 2 3 4 1 2 3 4 ...`

## Part 2: Adding user input

We've improved the metronome, now lets allow users to make the drum machine play different instruments.

### 2A: Adding checkboxes

In the HTML, create a new element. This element will contain inputs that the user can use to control the drum machine.

Inside this container, add more HTML (this can also be done via Javscript) that creates four checkboxes labelled "metronome", "kick drum", "snare drum", and "hi hat". By default, "metronome" should be the only checkbox that is checked.

### 2B: Toggling the metronome

Make it so that if the "metronome" checkbox is un-ticked, the metronome sounds stop playing.

### 2C: Toggling the instruments

Additionally, make it so that if "kick drum" is checked, `kick-drum.mp3` is played every beat.

Do the same for `hi-hat.mp3` nd `snare-drum.mp3`.

## Part 3: Timing

Now that we have custom instruments, lets allow users of our drum machine to choose when their sounds are played.

### 3A: Adding inputs

Next to each checkbox (excluding "metronome"), add a number input. 

### 3B: Customizing instrument timing

Now write some Javascript so that if the input beside an instrument contains "1", that instrument only plays on the 1st metronome count (out of 4).

If the input contains 3, that instrument will play on the third metronome count.

## Stretch goals

* Customize the look of the page! Use Bootstrap and your CSS skills to make the page look nice. Consider switching out the metronome for a different animation.

* Add more sounds! You can find loads of sounds at https://freesound.org/ (you'll need to make an account to download)

* Add an input to the page that allows the user to change the drum machine's tempo! To do this, you'll need to modify both the Javascript and the CSS that controls the metronome animation.

* Allow the timing inputs to contain multiple values. For example, allow a user to input "2, 3" to play an instrument on both counts 2 and 3.

* Add an input to the page that allows a user to change maximum metronome count. For example, this could allow the metronome to count up to 5 instead of 4.

* Create your own feature(s)! Think up a feature that you'd like to add and implement it!

* Make it look nice on mobile devices.