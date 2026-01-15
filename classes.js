class Player {
    constructor(pos) {
        this.alive = true
        this.pos = {
            x: pos.x,
            y: pos.y
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
        this.width = 79
        this.height = 79
        this.grounded = false
        
        this.sprite = new Image()
        this.sprite.src = "./img/ben.jpg"
    }
    update() {   
        this.draw()
        this.move()
        this.rotate() 
        this.fall()
        this.handleInput()
        this.grounded = false
        this.pos.y = Math.round(this.pos.y);
        this.pos.x = Math.round(this.pos.x);
        
    }
    rotate() {}
    handleInput() {}
    move() {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }
    fall() {
        if (this.fall_speed > 0) {
             this.vel.y += this.fall_speed
             if (this.vel.y > this.max_fall_speed) this.vel.y = this.max_fall_speed
        } else {
            this.vel.y += this.fall_speed
            if (this.vel.y < -this.max_fall_speed) this.vel.y = -this.max_fall_speed
        }
    }
    draw() {
        vtx.save();
            vtx.translate(offset.x+this.width/2, offset.y+this.height/2)
            vtx.rotate(this.degrees*(Math.PI/180))
            vtx.drawImage(this.sprite,-this.width/2, -this.height/2,  this.width, this.height)
        vtx.restore();
    }
}
class Cube extends Player{
    constructor(pos) {
        super(pos)
        this.sprite.src = "./img/ben.jpg"
    }
    rotate() {
        if (!this.grounded) {
            this.degrees += 20
        } else {
            this.degrees = (Math.round(this.degrees / 90) * 90)
        }
    }
    jump(power, forced) {
        if (this.grounded || forced) {
            if (this.fall_speed > 0) {
                this.vel.y = -power
            } else this.vel.y = power
            P.input.press.jump = false
        }
    }
    handleInput() {
        if (this.input.press.jump) {
            if (this.grounded) {
                this.jump(this.jump_power, false)
            }
        }
    }
}
class Ufo extends Player {
    constructor(pos) {
        super(pos)
        this.sprite.src = "./img/ufo.jpg"
        this.pos = pos
        this.jump_power = 20
    }
	jump(power=this.jump_power) {
        if (this.fall_speed > 0) {
            this.vel.y = -power
        } else this.vel.y = power
    }
    handleInput() {
        if (this.input.press.jump){
            this.jump()
            P.input.press.jump = false
        }
    }
}
class Ship extends Player {
    constructor(pos) {
        super(pos)
        this.sprite.src = "./img/ship.jpg"
        this.pos = pos
        this.jump_power = 7
        this.fall_speed
    }
	jump(power=this.jump_power) {
        if (this.fall_speed > 0) {
            this.vel.y = -power
        } else this.vel.y = power
    }
    handleInput() {
        if (this.input.hold.jump){
            this.jump()
            P.input.press.jump = false
        }
    } 
}

class Block {
    constructor({pos, width, height, color, collision, layer}) {
        this.pos = pos
        this.width = width
        this.height = height
        this.color = color
        this.collision = collision
        this.layer = layer
    }
    isVisible() {
        return (
            this.pos.x + this.width > P.pos.x - offset.x &&
            this.pos.x < P.pos.x - offset.x + view.width &&
            this.pos.y + this.height > P.pos.y - offset.y &&
            this.pos.y < P.pos.y - offset.y + view.height
        )
    }
    update() {
        if (this.isVisible()) {
            if (this.collision) {
                this.checkYCollision()
            }
            this.draw()
        }
    }
    draw() {
        vtx.fillStyle = this.color
        vtx.fillRect(this.pos.x - 650, this.pos.y - 100, this.width, this.height)
    }
	checkYCollision() {
		
	}
	resetAttributes() {
		
	}
}
class FloorBlock extends Block {
    constructor({pos, color, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: color,
            collision: collision,
            layer: layer,
        })
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            if (P.fall_speed > 0) {
                if (P.pos.y + P.height >= this.pos.y + this.height) {
                    P.alive = false
                } else if (P.vel.y > 0) {
                    P.vel.y = 0
                    P.pos.y = this.pos.y - P.height
                    P.grounded = true
                }
            } else {
                if (P.pos.y + P.height <= this.pos.y + this.height) {
                    P.alive = false
                } else if (P.vel.y < 0) {
                    P.vel.y = 0
                    P.pos.y = this.pos.y + P.height
                    P.grounded = true
                }
            }
        }
    }
}
class PadBlock extends Block {
    constructor({pos, jump_power, color, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 20,
            color: color,
            collision: collision,
            layer: layer,
        })
        this.jump_power = jump_power
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            P.jump(this.jump_power, true)
        }
    }
}
class SpikeBlock extends Block {
    constructor({pos, color, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: color,
            collision: collision,
            layer: layer,
        })
    }
    checkYCollision() {
        if (isColliding(this, P, 30)) {
            P.alive = false
        }
    }
}
class OrbBlock extends Block {
    constructor({pos, jump_power, color, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: color,
            collision: collision,
            layer: layer,
        })
        
        this.jump_power = jump_power
    }
    draw() {
        vtx.fillStyle = this.color
        vtx.fillRect(this.pos.x - 650, this.pos.y - 100, this.width/2, this.height/2)
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            if (P.input.press.jump) {
                P.vel.y = 0
                P.jump(this.jump_power, true)
            }
        }
    }
}
class GoalBlock extends Block {
    constructor({pos, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: "green",
            collision: collision,
            layer: layer,
        })
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            win()
        }
    }
}
class PortalBlock extends Block {
    constructor({pos, action, color, collision, layer}) {
        super({
            pos: pos,
            width: 80,
            height: 160,
            color: color,
            collision: collision,
            layer: layer,
        })
		this.actions = {
			"invertGravity": this.invertGravity,
            "setCube": this.setCube,
            "setUfo": this.setUfo,
            "setShip": this.setShip,
		}
		this.actionOnTouch = this.actions[action]
    }
	invertGravity() {
		if (P.fall_speed > 0) {
			P.pos.y -= 3;
		}
		P.fall_speed *= -1
	}
    setCube() {
        const pos = {
            x: P.pos.x,
            y: P.pos.y,
        }
        P = new Cube(pos)
    }
    setUfo() {
        const pos = {
            x: P.pos.x,
            y: P.pos.y,
        }
        P = new Ufo(pos)
    }
    setShip() {
        const pos = {
            x: P.pos.x,
            y: P.pos.y,
        }
        
        P = new Ship(pos)
    }
    checkYCollision() {
        if (isColliding(this, P) && !this.touched) {
			this.actionOnTouch()
			this.touched = true
        }
    }
	resetAttributes() {
		this.touched = false
	}
}
