function initElements(renderElements, player){

    const enemy = new BasicEnemy(player.position)
    enemy.position = { x: 400, y: 400 }
    enemy.velocity = { angle: 0, speed: 1 }

    renderElements.push(enemy)
}