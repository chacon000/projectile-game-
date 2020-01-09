function player () {
    someGuy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f d d d d d d f . . . . 
. . . . f d f d d f d f . . . . 
. . . . f d d f f d d f . . . . 
. . . . . f f 9 9 f f . . . . . 
. . . f f f f 9 9 f f f f . . . 
. . f 9 9 9 9 9 9 9 9 9 9 f . . 
. . f 9 f f 9 9 9 9 9 f 9 f . . 
. . f 9 f f 9 9 9 9 9 f 9 f . . 
. . f 9 f f 8 8 8 8 8 f 9 f . . 
. . f 9 f f 8 f f f 8 f 9 f . . 
. . . f . f 8 f . f 8 f f . . . 
. . . . . f 8 f . f 8 f . . . . 
. . . . . f 8 f . f 8 f . . . . 
. . . . f f f f . f f f f . . . 
`, SpriteKind.Player)
    someGuy.setPosition(78, 101)
    controller.moveSprite(someGuy, 100, 100)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . f d f . . . . . . . . 
. . . . . f d f . . . . . . . . 
. . . . . f d f . . . . . . . . 
f f f f f f d f f f f f f f . . 
d d d d d d d d d d d d d d f . 
d d d d d d d f d d d d d d f . 
d d d d d d d f f f f f f f f . 
d d d d d d d f d d d d d d f . 
d d d d d d d f f f f f f f f . 
d d d d d d d f d d d d d d f . 
f f f f d d d f f f f f f f f . 
. . . f f d d f d d d d d d f . 
. . . . f f d f f f f f f f f . 
. . . . . f f f d d d d d d f . 
`, someGuy, 50, 0)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
let projectile2: Sprite = null
let someGuy: Sprite = null
player()
projectile()
game.onUpdate(function () {
	
})
