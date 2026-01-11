function isColliding(A, B) {
    return (
        isCollidingX(A, B) && 
        isCollidingY(A, B)
    )
}

function isCollidingX(A, B, offset=0) {
    return (
        A.pos.x + offset <= B.pos.x + B.width &&
        A.pos.x + A.width - offset >= B.pos.x
    )
}

function isCollidingY(A, B) {
    return (
        A.pos.y + A.height >= B.pos.y &&
        A.pos.y <= B.pos.y + B.height
    )
}