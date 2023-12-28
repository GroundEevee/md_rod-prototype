controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += -1
})
function waterShoot (mysprite: Sprite) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x += 1
})
scene.setBackgroundColor(9)
effects.starField.startScreenEffect()
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Pixel Uzi`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Pixel N`, SpriteKind.Player))
forever(function () {
    music.play(music.createSong(assets.song`Merry Melody`), music.PlaybackMode.UntilDone)
})
