const c = document.getElementById("main")
const ctx = c.getContext("2d")
c.style.border = "1px solid black"
c.width = 29000
c.height = 6000
ctx.imageSmoothingEnabled = false;
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

let lastDrawTime = 0;
window.requestAnimationFrame(animate);

function animate(timestamp) {
    const viewX = P.pos.x - offset.x;
    const viewY = P.pos.y - offset.y;

    ctx.clearRect(viewX, viewY, view.width, view.height);
    P.update();
    Blocks.forEach(Block => Block.update());

    // Only update the viewport if it has moved significantly
    vtx.clearRect(0, 0, view.width, view.height);
    vtx.drawImage(c, viewX, viewY, view.width, view.height, 0, 0, view.width, view.height);
    if (P.alive) {
        window.requestAnimationFrame(animate);
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
view.addEventListener("mousedown", (e) => {
    P.input.press.jump = true
})
view.addEventListener("mouseup", (e) => {
    P.input.press.jump = false
})