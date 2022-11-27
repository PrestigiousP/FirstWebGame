class Player extends GameObject {

    constructor(){
        super()
    }

    render(ctx){
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.position.x, this.position.y, 40, 40)
    }
}