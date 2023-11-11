basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(2000)
})
