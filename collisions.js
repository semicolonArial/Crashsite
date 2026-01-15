let blocksData2D = []
let Blocks = []
let start_pos = { x: null, y: null };

function makeLevel(level) {
    Blocks = []
    const width = TileMaps[level].width
    const block_size = 80
    offset = {
        x: 100,
        y: 300,
    }
    map_layers = [
        TileMaps[level].layers[0], //bg
        TileMaps[level].layers[1], //main
        TileMaps[level].layers[2], //deco
        TileMaps[level].layers[3], //fg
    ]
    for (let i = 0; i < map_layers.length; i++) {
        const data2D = []
        for (let j = 0; j < map_layers[i].data.length; j += width) {
         
            data2D.push(map_layers[i].data.slice(j, j + width))
        }
        map_layers[i].data = data2D
    }
    map_layers.forEach((layer, n) => {
        const collision = layer.properties.find(prop => prop.name === "Collision")?.value || false;
        layer.data.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value == 0) {
                    //Do nothing!!
                } else if (value == 1) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "black",
                        })
                    )
                } else if (value == 2) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "midnightblue",
                        })
                    )
                } else if (value == 3) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkslateblue",
                        })
                    )
                } else if (value == 4) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "saddlebrown",
                        })
                    )
                } else if (value == 5) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "sienna",
                        })
                    )
                } else if (value == 6) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "orange",
                        })
                    )
                } else if (value == 7) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "burlywood",
                        })
                    )
                } else if (value == 8) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "blanchedalmond",
                        })
                    )
                } else if (value == 19) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkolivegreen",
                        })
                    )
                } else if (value == 20) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "peru",
                        })
                    )
                } else if (value == 21) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "seagreen",
                        })
                    )
                } else if (value == 22) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "slateblue",
                        })
                    )
                } else if (value == 23) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "steelblue",
                        })
                    )
                } else if (value == 24) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "orchid",
                        })
                    )
                } else if (value == 25) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "skyblue",
                        })
                    )
                } else if (value == 26) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "cyan",
                        })
                    )
                } else if (value == 37) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "yellow",
                        })
                    )
                } else if (value == 38) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "palegreen",
                        })
                    )
                } else if (value == 39) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "yellowgreen",
                        })
                    )
                } else if (value == 40) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "mediumseagreen",
                        })
                    )
                } else if (value == 41) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "lightslategrey",
                        })
                    )
                } else if (value == 42) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "slategrey",
                        })
                    )
                } else if (value == 43) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkviolet",
                        })
                    )
                } else if (value == 44) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "firebrick",
                        })
                    )
                } else if (value == 55) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "lavender",
                        })
                    )
                } else if (value == 56) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "white",
                        })
                    )
                } else if (value == 57) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "lightgrey",
                        })
                    )
                } else if (value == 58) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "grey",
                        })
                    )
                } else if (value == 59) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "indianred",
                        })
                    )
                } else if (value == 61) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkseagreen",
                        })
                    )
                } else if (value == 62) {
                    Blocks.push(
                        new FloorBlock({
                            pos: {
                                x: x*block_size, 
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkgoldenrod",
                        })
                    )
                } else if (value == 73) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "black",
                        })
                    )
                } else if (value == 74) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "crimson",
                        })
                    )
                }else if (value == 75) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "yellow",
                        })
                    )
                }else if (value == 76) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "palegreen",
                        })
                    )
                }else if (value == 77) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "orange",
                        })
                    )
                } else if (value == 78) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "skyblue",
                        })
                    )
                }else if (value == 79) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "pink",
                        })
                    )
                } else if (value == 80) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkseagreen",
                        })
                    )
                } else if (value == 91) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "midnightblue",
                        })
                    )
                } else if (value == 92) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkslateblue",
                        })
                    )
                } else if (value == 93) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "sienna",
                        })
                    )
                } else if (value == 94) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "blanchedalmond",
                        })
                    )
                } else if (value == 95) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "indianred",
                        })
                    )
                } else if (value == 96) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "white",
                        })
                    )
                } else if (value == 97) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "cyan",
                        })
                    )
                } else if (value == 98) {
                    Blocks.push(
                        new SpikeBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,

                            color: "darkviolet",
                        })
                    )
                } else if (value == 127) {
                    Blocks.push(
                        new PadBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y+block_size/4*3
                            },
                            collision: collision,
                            layer: n,
                            height: block_size/4,
                            color: "pink",
                            jump_power: 20
                        })
                    )
                } else if (value == 128) {
                    Blocks.push(
                        new PadBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y+block_size/4*3
                            },
                            collision: collision,
                            layer: n,
                            height: block_size/4,
                            color: "yellow",
                            jump_power: 30
                        })
                    )
                } else if (value == 129) {
                    Blocks.push(
                        new PadBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y+block_size/4*3
                            },
                            collision: collision,
                            layer: n,
                            height: block_size/4,
                            color: "red",
                            jump_power: 40
                        })
                    )
                } else if (value == 109) {
                    Blocks.push(
                        new OrbBlock({
                            pos: {
                                x: x*block_size+block_size/2,
                                y: y*block_size+offset.y+block_size/2
                            },
                            collision: collision,
                            layer: n,
                            width: block_size/2,
                            height: block_size/2,
                            color: "pink",
                            jump_power: 18,
                        })
                    )
                } else if (value == 110) {
                    Blocks.push(
                        new OrbBlock({
                            pos: {
                                x: x*block_size+block_size/2,
                                y: y*block_size+offset.y+block_size/2
                            },
                            collision: collision,
                            layer: n,
                            width: block_size/2,
                            height: block_size/2,
                            color: "yellow",
                            jump_power: 25,
                        })
                    )
                } else if (value == 111) {
                    Blocks.push(
                        new OrbBlock({
                            pos: {
                                x: x*block_size+block_size/2,
                                y: y*block_size+offset.y+block_size/2
                            },
                            collision: collision,
                            layer: n,
                            width: block_size/2,
                            height: block_size/2,
                            color: "red",
                            jump_power: 32,
                        })
                    )
                } else if (value == 145) {
                    Blocks.push(
                        new PortalBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y-block_size
                            },
                            collision: collision,
                            layer: n,
                            height: block_size*2,
                            color: "orange",
                            action: "invertGravity",
                        })
                    )
                } else if (value == 146) {
                    Blocks.push(
                        new PortalBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y-block_size
                            },
                            collision: collision,
                            layer: n,
                            height: block_size*2,
                            color: "green",
                            action: "setCube",
                        })
                    )
                } else if (value == 147) {
                    Blocks.push(
                        new PortalBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y-block_size
                            },
                            collision: collision,
                            layer: n,
                            height: block_size*2,
                            color: "blue",
                            action: "setUfo",
                        })
                    )
                } else if (value == 148) {
                    Blocks.push(
                        new PortalBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y-block_size
                            },
                            collision: collision,
                            layer: n,
                            height: block_size*2,
                            color: "cyan",
                            action: "setShip",
                        })
                    )
                } else if (value == 163) {
                    start_pos = {
                        x: x*block_size,
                        y: y*block_size+offset.y
                    }
                } else if (value == 164) {
                    Blocks.push(
                        new GoalBlock({
                            pos: {
                                x: x*block_size,
                                y: y*block_size+offset.y
                            },
                            collision: collision,
                            layer: n,
                            height: block_size
                        })
                    )
                }
            })
        })
    })
}