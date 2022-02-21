class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    subtract(another) {
        this.x -= another.x;
        this.y -= another.y;
    }
}