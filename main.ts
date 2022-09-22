radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == germany) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    germany += 1
    basic.showNumber(germany)
})
input.onButtonPressed(Button.B, function () {
    germany += -1
    basic.showNumber(germany)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(germany)
})
let germany = 0
germany = 0
radio.setGroup(1)
