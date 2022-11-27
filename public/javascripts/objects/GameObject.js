class GameObject {
    constructor(){
        this.health = 1
        this.damage = 1
    }

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
        height: Number,
    }

    updateVelocity(angle){
        if(angle == null){
            this.velocity.speed = 0;
            return;
        }
        this.velocity.angle = angle;
        this.velocity.speed = 3;
    }

    updatePosition() {
        this.position.x += Math.cos(this.velocity.angle) * this.velocity.speed;
        this.position.y += Math.sin(this.velocity.angle) * this.velocity.speed;
    }

    render(ctx){
        ctx.fillStyle = '#000055';
        ctx.fillRect(this.position.x, this.position.y, 40, 40)
    }
}