const width = TileMaps["level1"].width
const height = 36
const block_size = 80
offset = {
    x: 100,
    y: 300,
}
const Blocks = []
let start_pos 
const blocksData = TileMaps["level1"].layers[0].data;

const blocksData2D = []
for (let i = 0; i < blocksData.length; i += width) {
    blocksData2D.push(blocksData.slice(i, i + width))
}

blocksData2D.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value == 1) {
            Blocks.push(
                new FloorBlock({
                    pos: {
                        x: x*block_size, 
                        y: y*block_size+offset.y
                    },
                    width: block_size,
                    height: block_size,
                })
            )
        } else if (value == 17) {
            Blocks.push(
                new SpikeBlock({
                    pos: {
                        x: x*block_size,
                        y: y*block_size+offset.y
                    },
                    width: block_size,
                    height: block_size,
                })
            )
        } else if (value == 13) {
            Blocks.push(
                new PadBlock({
                    pos: {
                        x: x*block_size,
                        y: y*block_size+offset.y+block_size/4*3
                    },
                    width: block_size,
                    height: block_size/4,
                })
            )
        } else if (value == 29) {
            Blocks.push(
                new OrbBlock({
                    pos: {
                        x: x*block_size+block_size/2,
                        y: y*block_size+offset.y+block_size/2
                    },
                    width: block_size/2,
                    height: block_size/2
                })
            )
        } else if (value == 2) {
            start_pos = {
                x: x*block_size,
                y: y*block_size+offset.y
            }
        }
    })
})
console.log(blocksData2D)