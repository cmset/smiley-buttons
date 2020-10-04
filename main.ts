input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("hello")
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    music.playMelody("D F A E B F E G ", 120)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("hello")
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("hi")
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playMelody("G F G A - F E D ", 120)
})
