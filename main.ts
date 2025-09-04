namespace SpriteKind {
    export const pa = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.up.isPressed()) {
        gun = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            . . . . . . . 2 f 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ddd, 50, 50)
        spriteutils.setVelocityAtAngle(gun, spriteutils.angleFrom(ddd, mySprite2), 50)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (ddd.isHittingTile(CollisionDirection.Bottom)) {
        nobre_de_saut = 0
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (nobre_de_saut < nombre_de_saut_max) {
        ddd.vy = -111
        nobre_de_saut += 1
    }
})
sprites.onOverlap(SpriteKind.pa, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
    sprites.destroy(ddd)
    game.reset()
})
sprites.onOverlap(SpriteKind.pa, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.confetti, 500)
})
let gun: Sprite = null
let nobre_de_saut = 0
let nombre_de_saut_max = 0
let mySprite2: Sprite = null
let ddd: Sprite = null
ddd = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 f f 8 8 8 f 3 8 8 . . 
    . . . 8 8 f 3 8 8 8 f f 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 f 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 6 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 6 6 6 6 6 6 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(scene.backgroundImage())
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 5 2 2 2 2 2 5 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 5 5 5 5 2 2 2 2 2 . . 
    . . . 2 2 5 2 2 5 5 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 5 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(ddd, 100, 0)
mySprite2.vx = 43
mySprite2.setPosition(46, 27)
mySprite2.setPosition(46, 27)
ddd.setStayInScreen(true)
mySprite2.setStayInScreen(true)
info.setLife(3)
ddd.ay = 300
info.startCountdown(60)
tiles.setCurrentTilemap(tilemap`niveau1`)
nombre_de_saut_max += 2
nobre_de_saut = 0
game.onUpdateInterval(5000, function () {
	
})
forever(function () {
    music.play(music.stringPlayable("C5 A C5 F B D A E ", 107), music.PlaybackMode.UntilDone)
})
