radio.onReceivedNumber(function (receivedNumber) {
    let Mode1 = 0
    if (Mode1 == 0) {
        if (receivedNumber == 1) {
            Player_1.change(LedSpriteProperty.Y, -1)
        }
        if (receivedNumber == 2) {
            Player_1.change(LedSpriteProperty.X, 1)
        }
        if (receivedNumber == 3) {
            Player_1.change(LedSpriteProperty.Y, 1)
        }
        if (receivedNumber == 4) {
            Player_1.change(LedSpriteProperty.X, 1)
        }
        if (receivedNumber == 5) {
            Player_2.change(LedSpriteProperty.Y, -1)
        }
        if (receivedNumber == 6) {
            Player_2.change(LedSpriteProperty.X, 1)
        }
        if (receivedNumber == 7) {
            Player_2.change(LedSpriteProperty.Y, 1)
        }
        if (receivedNumber == 8) {
            Player_2.change(LedSpriteProperty.X, -1)
        }
        if (receivedNumber == 13) {
            Player_4.change(LedSpriteProperty.Y, -1)
        }
        if (receivedNumber == 14) {
            Player_4.change(LedSpriteProperty.X, 1)
        }
        if (receivedNumber == 15) {
            Player_4.change(LedSpriteProperty.Y, 1)
        }
        if (receivedNumber == 16) {
            Player_4.change(LedSpriteProperty.X, -1)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Player_3.change(LedSpriteProperty.Y, 1)
    radio.sendNumber(11)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player_3.change(LedSpriteProperty.X, -1)
    radio.sendNumber(12)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    Pause = 1
    while (Pause == 1) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            Pause = 0
            game.resume()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player_3.change(LedSpriteProperty.Y, -1)
    radio.sendNumber(9)
})
input.onGesture(Gesture.TiltRight, function () {
    Player_3.change(LedSpriteProperty.X, 1)
    radio.sendNumber(10)
})
let Pause = 0
let Player_4: game.LedSprite = null
let Mode4 = 0
let Player_3: game.LedSprite = null
let Player_2: game.LedSprite = null
let Player_1: game.LedSprite = null
let Mode3 = 0
radio.setGroup(1)
basic.showString("Micro World")
basic.showString("How many players?")
let Choose_1234 = 1
while (Choose_1234 == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        Choose_1234 = 0
        Mode3 = 1
        Player_1 = game.createSprite(0, 2)
        Player_2 = game.createSprite(2, 2)
        Player_3 = game.createSprite(4, 2)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        Choose_1234 = 0
        Mode4 = 1
        Player_1 = game.createSprite(3, 1)
        Player_2 = game.createSprite(3, 3)
        Player_3 = game.createSprite(1, 1)
        Player_4 = game.createSprite(1, 3)
    }
}
