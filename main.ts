input.onButtonPressed(Button.A, function () {
    led.plot(0, 2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
