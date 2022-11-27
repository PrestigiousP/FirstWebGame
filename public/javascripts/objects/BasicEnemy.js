class BasicEnemy extends GameObject{

    constructor(position){
        super()

        this.playerPosition = position
    }

    updatePosition(){

        const opposite = this.playerPosition.y - this.position.y
        const adjacent = this.playerPosition.x - this.position.x

        console.log(`${opposite} ${adjacent}`)


        if(opposite < 0 && adjacent < 0){
            this.velocity.angle = Math.atan(opposite/adjacent) + Math.PI
        }
        else if (opposite < 0 && adjacent > 0){
            this.velocity.angle = Math.atan(opposite/adjacent)
        }
        else if (opposite > 0 && adjacent < 0){
            this.velocity.angle = Math.atan(opposite/adjacent) - Math.PI
        }else{
            this.velocity.angle = (Math.PI * 0.5) - Math.atan(adjacent/opposite)
        }

        this.position.x += Math.cos(this.velocity.angle) * this.velocity.speed;
        this.position.y += Math.sin(this.velocity.angle) * this.velocity.speed;
    }

    render(ctx){
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(this.position.x, this.position.y, 40, 40)
    }
}