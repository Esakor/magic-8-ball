input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (random == 2) {
        basic.showIcon(IconNames.Happy)
        basic.showString("YES")
    } else if (random == 1) {
        basic.showIcon(IconNames.Skull)
        basic.showString("NO")
    } else {
        basic.showIcon(IconNames.SmallSquare)
        basic.showString("MAYBE")
    }
})
let random = 0
basic.showString("ASK A QUESTION")
basic.pause(1000)
basic.showString("Double, double toil and trouble; fire burn and cauldron bubble")
