sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
})
game.onUpdate(function () {
    let head: Sprite = null
    head.x += controller.dx()
})
