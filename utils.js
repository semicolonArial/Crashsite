function isColliding(A, B, offset=0) {
    return (
        isCollidingX(A, B, offset) && 
        isCollidingY(A, B, offset)
    )
}

function isCollidingX(A, B, offset=0) {
    return (
        A.pos.x + offset <= B.pos.x + B.width &&
        A.pos.x + A.width - offset >= B.pos.x
    )
}

function isCollidingY(A, B, offset=0) {
    return (
        A.pos.y + A.height - offset >= B.pos.y &&
        A.pos.y + offset<= B.pos.y + B.height
    )
}