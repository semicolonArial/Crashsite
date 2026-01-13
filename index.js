const view = document.getElementById("viewport")
const vtx = view.getContext("2d")
view.style.border = "1px solid black"
view.width = 1500
view.height = 800
offset = {
    x: 100,
    y: 300,
}
const music = document.createElement("audio");



// myAudio.pause();

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
        

        
        vtx.clearRect(0, 0, view.width, view.height);

        if (!P.alive) {
            P.respawn(start_pos)
        } else {
            P.update();
            vtx.save();
                vtx.translate(-P.pos.x + view.width / 2, -P.pos.y + view.height / 2);
                Blocks.forEach(Block => Block.update());
            vtx.restore();
            }
       
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
    music.src = "./snd/"+selected_option.value+".mp3";
    music.play(); 
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