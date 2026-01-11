const c = document.getElementById("main")
const ctx = c.getContext("2d")
c.style.border = "1px solid black"
c.width = 32000
c.height = 6000

const view = document.getElementById("viewport")
const vtx = view.getContext("2d")
view.style.border = "1px solid black"
view.width = 1200
view.height = 800
offset = {
    x: 100,
    y: 300,
}


const P = new Player({
    pos: start_pos
})
// const Floor = new FloorBlock()
animate()

function animate() {
    ctx.clearRect(P.pos.x-offset.x, P.pos.y-offset.y, view.width + 1000, view.height)
    P.update()
    Blocks.forEach(Block => {
        Block.update()
    });
    vtx.clearRect(0, 0, view.width, view.height)
    vtx.drawImage(c, P.pos.x-offset.x, P.pos.y-offset.y, view.width, view.height, 0, 0, view.width, view.height)
    if (P.alive) {
        window.requestAnimationFrame(animate)
    }
}

window.addEventListener("keydown", (e) => {
    switch (event.key) {
        case "w":
            P.input.press.jump = true
            break
        case " ":
            P.input.press.jump = true
            break
    }
})
window.addEventListener("keyup", (e) => {
    switch (event.key) {
        case "w":
            P.input.press.jump = false
    }
})