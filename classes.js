class Player {
    constructor() {
        this.alive = true
        this.pos = {
            x:0,
            y:0
        }
        this.vel = {
            x: 10,
            y: 0,
        }
        this.start_time
        this.degrees = 0
        this.jump_power = 25
        this.input = {
            press: {
                jump: false,
            },
            hold: {
                jump: false,
            }
        }
        this.fall_speed = 1.5
        this.max_fall_speed = 10
        this.width = 80
        this.height = 80
        this.grounded = false
        
        this.sprite = new Image()
        this.sprite.src = "./img/ben.jpg"
    }
    update() {
        
        this.draw()
        this.move()
        this.fall()
        // this.checkYCollision()
        this.rotate()
        // this.debugJumpHeight()
        
        this.handleInput()
        // this.jump()
        
        this.grounded = false
        this.pos.y += this.vel.y
        
    }
    rotate() {
        if (!this.grounded) {
            this.degrees += 20
        } else {
            this.degrees = (Math.round(this.degrees / 90) * 90)
        }
    }
    move() {
        this.pos.x += this.vel.x
    }
    jump(power) {
        this.vel.y = -power
    }
    fall() {
        this.vel.y += this.fall_speed
        if (this.vel.y > this.max_fall_speed) this.vel.y = this.max_fall_speed
    }
    draw() {
        ctx.save();
            ctx.translate(this.pos.x+this.width/2, this.pos.y+this.height/2)
            ctx.rotate(this.degrees*(Math.PI/180))
            ctx.drawImage(this.sprite,-this.width/2, -this.height/2, this.width, this.height)
        ctx.restore();
    }
    handleInput() {
        if (this.input.press.jump &&
            this.grounded) {
            this.jump(this.jump_power)
            this.input.press.jump = false
        }
    }
    debugSpeed() {
        if (!this.start_time) {
            this.start_time = performance.now()
            this.start_x = this.pos.x
        }
        if (performance.now() - this.start_time > 1000) {
            console.log(this.pos.x - this.start_x)
            this.start_time = performance.now()
            this.start_x = this.pos.x
        }
    }
    respawn(pos) {
        this.pos.x = pos.x
        this.pos.y = pos.y// Reset to starting x position
        this.vel.y = 0; // Reset vertical velocity
        this.alive = true; // Set alive state to true
    }
}

class FloorBlock {
    constructor({pos, width, height}) {
        this.pos = pos
        this.width = width
        this.height = height
    }
    update() {
        if (this.pos.x + this.width+100 > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        ) {
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            if (P.pos.y + P.height >= this.pos.y + this.height) {
                P.alive = false
            } else if (P.vel.y > 0) {
                P.vel.y = 0
                P.pos.y = this.pos.y - P.height
                P.grounded = true
            }
        }
    }
}
class PadBlock {
    constructor({pos, width, height}) {
        this.pos = pos
        this.width = width
        this.height = height
    }
    update() {
        if (this.pos.x + this.width > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        ) {
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            P.jump(30)
        }
    }
}
class SpikeBlock {
    constructor({pos, width, height}) {
        this.pos = pos
        this.width = width
        this.height = height
    }
    update() {
        if (this.pos.x + this.width > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        ) {
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
    checkYCollision() {
        if (isColliding(this, P, 30)) {
            P.alive = false
        }
    }
}
class OrbBlock {
    constructor({pos, width, height}) {
        this.pos = pos
        this.width = width
        this.height = height
    }
    update() {
        if (this.pos.x + this.width > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        ) {
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            if (P.input.press.jump) {
                P.vel.y = 0
                P.jump(P.jump_power)
            }
            
        }
    }
}
class GoalBlock {
    constructor({pos, width, height}) {
        this.pos = pos
        this.width = width
        this.height = height
    }
    update() {
        if (this.pos.x + this.width > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        ) {
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        ctx.fillStyle = "green"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            win()
        }
    }
}
