const c = document.getElementById("main")
const ctx = c.getContext("2d")
c.style.border = "1px solid black"
c.width = 29000
c.height = 8000

const view = document.getElementById("viewport")
const vtx = view.getContext("2d")
view.style.border = "1px solid black"
view.width = 1500
view.height = 800
offset = {
    x: 100,
    y: 300,
}

const P = new Player()
const level_select = document.getElementById("level_select")
loadLevel(level_select.selectedOptions[0])

window.requestAnimationFrame(animate);

const FIXED_TIME_STEP = 15; // Milliseconds for each update
let lastUpdate = performance.now();
let accumulatedTime = 0;

function animate() {
    const now = performance.now();
    const deltaTime = now - lastUpdate;
    lastUpdate = now;

    accumulatedTime += deltaTime;
    while (accumulatedTime >= FIXED_TIME_STEP) {
        accumulatedTime -= FIXED_TIME_STEP;

        const viewX = Math.floor(P.pos.x - offset.x);
        const viewY = Math.floor(P.pos.y - offset.y);
        vtx.clearRect(0, 0, view.width, view.height);
        // Handle player respawn
        if (!P.alive) {
            P.respawn(start_pos)
        } else {
            P.update();
            Blocks.forEach(Block => Block.update());
        }

        vtx.drawImage(c, viewX, viewY, view.width, view.height, 0, 0, view.width, view.height);
    }

    window.requestAnimationFrame(animate);
}

function win() {
    alert('"Lowkey litt weird ass, bro" \n - Benjamin"')
    level_select.selectedOptions[0].style = "color: green"
    P.respawn(start_pos)
}

function loadLevel(selected_option) {
    level_to_load = selected_option.value
    makeLevel(level_to_load)
    P.respawn(start_pos)
}
window.addEventListener("keydown", (e) => {
    switch (event.key) {
        case "w":
            P.input.press.jump = true
            break
        case " ":
            P.input.press.jump = true
            break
        case "ArrowUp":
            P.input.press.jump = true
            break
    }
})
window.addEventListener("keyup", (e) => {
    switch (event.key) {
        case "w":
            P.input.press.jump = false
        case " ":
            P.input.press.jump = false
            break
        case "ArrowUp":
            P.input.press.jump = false
            break
    
    }
})
view.addEventListener("mousedown", (e) => {
    P.input.press.jump = true
})
view.addEventListener("mouseup", (e) => {
    P.input.press.jump = false
})