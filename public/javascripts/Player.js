class Player {
    position = {
        x: Number,
        y: Number
    }

    velocity = {
        angle: Number,
        speed: Number
    }

    dimension = {
        width: Number,
        Height: Number,
    }

    update() {
        this.position.x += Math.cos(this.velocity.angle) * this.velocity.speed;
        this.position.y += Math.sin(this.velocity.angle) * this.velocity.speed;
    }
}