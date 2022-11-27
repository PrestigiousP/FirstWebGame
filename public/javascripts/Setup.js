function initRenderElements(renderElements){

    const enemy = new BasicEnemy()
    enemy.position = { x: 400, y: 400 }
    enemy.velocity = { angle: 0, speed: 0 }

    renderElements.push(enemy)
}


