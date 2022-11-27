class BasicEnemy extends GameObject{

    constructor(){
        super()
    }

    render(ctx){
        ctx.fillStyle = '#6C0';
        ctx.fillRect(this.position.x, this.position.y, 40, 40)
    }

    getRender(){

    }
}