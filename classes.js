class Player {
    constructor() {
        this.alive = true
        this.pos = {
            x: start_pos.x,
            y: start_pos.y,
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
        this.pos.y = Math.round(this.pos.y);
        this.pos.x = Math.round(this.pos.x);

        
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
        if (this.fall_speed > 0) {
            this.vel.y = -power
        } else this.vel.y = power
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
            this.start_time = performance.now()
            this.start_x = this.pos.x
        }
    }
    respawn(pos) {
        this.pos.x = pos.x
        this.pos.y = pos.y// Reset to starting x position
        this.vel.y = 0; // Reset vertical velocity
        this.alive = true; // Set alive state to true
        music.currentTime = 0
		
    }
}

class Ufo extends Player {
	jump()
}

class Block {
    constructor({pos, width, height, color}) {
        this.pos = pos
        this.width = width
        this.height = height
        this.color = color
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
            this.checkYCollision()
            this.draw()
        }
    }
    draw() {
        vtx.fillStyle = this.color
        vtx.fillRect(this.pos.x - 650, this.pos.y - 100, this.width, this.height)
    }
	resetAttributes() {
		
	}
}
class FloorBlock extends Block {
    constructor({pos, color}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: color,
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
                    console.log("killed 'em!")
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
    constructor({pos, jump_power}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: "yellow",
        })
        this.jump_power = jump_power
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            P.jump(this.jump_power)
        }
    }
}
class SpikeBlock extends Block {
    constructor({pos}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: "red",
        })
    }
    checkYCollision() {
        if (isColliding(this, P, 30)) {
            P.alive = false
        }
    }
}
class OrbBlock extends Block {
    constructor({pos, jump_power}) {
        super({
            pos: pos,
            width: 40,
            height: 40,
            color: "yellow",
        })
        this.jump_power = jump_power
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            if (P.input.press.jump) {
                P.vel.y = 0
                P.jump(this.jump_power)
            }
            
        }
    }
}
class GoalBlock extends Block {
    constructor({pos}) {
        super({
            pos: pos,
            width: 80,
            height: 80,
            color: "green",
        })
    }
    checkYCollision() {
        if (isColliding(this, P)) {
            win()
        }
    }
}

class PortalBlock extends Block {
    constructor({pos, action, color}) {
        super({
            pos: pos,
            width: 80,
            height: 160,
            color: color,
        })
		this.actions = {
			"invertGravity": this.invertGravity,
		}
		this.actionOnTouch = this.actions[action]
    }
	invertGravity() {
		console.log(P.fall_speed)
		if (P.fall_speed > 0) {
			P.pos.y -= 3;
		}
		P.fall_speed *= -1
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
