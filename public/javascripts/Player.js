class Player {
    position = {
        x: Number,
        y: Number
    }

    dimension = {
        width: Number,
        Height: Number,
    }

    set position(arg){
        this.position.x = arg.x
        this.position.y = arg.y
    }

    testme(){
        console.log('hihi')
    }
}