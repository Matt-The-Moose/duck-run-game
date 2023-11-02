namespace SpriteKind {
    export const arrow = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    arrow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e . . . . . . . . . . . . . . . 
        . e . . . . . . . . . . f . . . 
        . . e . . . . . . . . . f f . . 
        . e e e e e e e e e e e f f f . 
        . . e . . . . . . . . . f f . . 
        . e . . . . . . . . . . f . . . 
        e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.arrow)
    arrow.ax = 100
    arrow.setPosition(mySprite.x, mySprite.y)
})
info.onCountdownEnd(function () {
	
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 5000)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    game.showLongText("YOU WIN!", DialogLayout.Bottom)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.showLongText("GAME OVER!", DialogLayout.Bottom)
    effects.blizzard.startScreenEffect(500)
})
let arrow: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.startCountdown(0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.setBounceOnWall(true)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
myEnemy = sprites.create(img`
    ........................
    ....ffffff..............
    ..fffffffff.............
    .fffffffffff............
    .fffffffffff............
    .ffffffffffff...........
    .ffffffffffff...........
    ffffffffffff............
    ffe44ebf44e.............
    fee4d41fdde.............
    .feee4dddefffff.........
    ..ffee44e4ffe...........
    ...fffff44ee............
    ...ffffffff.............
    ...ffffffff.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setBounceOnWall(true)
myEnemy.setFlag(SpriteFlag.DestroyOnWall, false)
myEnemy.follow(mySprite, 25)
mySprite.setPosition(56, 93)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 3 . . . . . . 
    . . . . . . 1 3 . 3 3 . . . . . 
    . . . . . . 1 . . . 3 2 2 3 . . 
    . . . . . 1 3 . . . 2 2 2 3 3 . 
    . . . . . 1 3 . 2 2 3 2 2 2 3 . 
    . . 2 2 2 1 3 3 3 3 3 2 2 2 3 . 
    . . 2 2 2 1 3 2 2 2 2 2 2 2 3 . 
    . . 2 2 2 1 3 3 3 3 3 2 2 2 3 . 
    . . . . . 1 3 . 2 2 3 2 2 2 3 . 
    . . . . . 1 3 . . . 2 2 2 3 3 . 
    . . . . . . 1 . . . 3 2 2 3 . . 
    . . . . . . 1 3 . 3 3 . . . . . 
    . . . . . . . 1 1 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite, 50, 50)
forever(function () {
    info.changeCountdownBy(-1)
})
