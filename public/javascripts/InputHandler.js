const arrowUp = 'ArrowUp'
const arrowDown = 'ArrowDown'
const arrowLeft = 'ArrowLeft'
const arrowRight = 'ArrowRight'

const rightAngle = 0
const downRightAngle = 0.25 * Math.PI
const downAngle = 0.5 * Math.PI
const downLeftAngle = 0.75 * Math.PI
const leftAngle = Math.PI
const upLeftAngle = 1.25 * Math.PI
const upAngle = 1.5 * Math.PI
const upRightAngle = 1.75 * Math.PI

let directions = {
    right: false,
    left: false,
    down: false,
    up: false
}

const keysPressed = []
const keyboardSubscribers = []

addSubscriber = (sub) => keyboardSubscribers.push(sub);

addEventListener('keydown', (event) => {
    switch (event.key) {
        case arrowRight:
            directions.right = true
            break;
        case arrowLeft:
            directions.left = true
            break;
        case arrowDown:
            directions.down = true
            break;
        case arrowUp:
            directions.up = true
            break;
    }

    let angle = getAngle()

    keyboardSubscribers.forEach(element => {
        element.updateVelocity(angle)
    });
    
})

addEventListener('keyup', (event) => {
    switch (event.key) {
        case arrowRight:
            directions.right = false
            break;
        case arrowLeft:
            directions.left = false
            break;
        case arrowDown:
            directions.down = false
            break;
        case arrowUp:
            directions.up = false
            break;
    }

    let angle = getAngle()

    keyboardSubscribers.forEach(element => {
        element.updateVelocity(angle)
    });
})

function getAngle() {
    const count = countDirections()

    switch(count){
        case 0:
            return null
        case 1:
            return getDirection()
        case 2:
            return getDiagonalDirection()
        default:
            return null
    }
}

function getDiagonalDirection(){
    if(directions.down){
        if(directions.left){
            return downLeftAngle
        }
        else if (directions.right){
            return downRightAngle
        }
        if(directions.up){
            return null
        }
    }
    else if(directions.up){
        if(directions.right){
            return upRightAngle
        }
        else if(directions.left){
            return upLeftAngle
        }
    }
}

function getDirection() {
    if (directions.down){
        return downAngle
    }
    else if (directions.left){
        return leftAngle
    }
    else if (directions.right){
        return rightAngle
    }
    return upAngle
}

function countDirections(){
    const right = directions.right ? 1 : 0
    const left = directions.left ? 1 : 0
    const up = directions.up ? 1 : 0
    const down = directions.down ? 1 : 0

    const totalDirections = right + left + up + down
    return totalDirections
}

