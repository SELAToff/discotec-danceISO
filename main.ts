for (let index = 0; index < randint(10, 1000); index++) {
    led.setBrightness(randint(0, 255))
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.pause(100)
}
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
