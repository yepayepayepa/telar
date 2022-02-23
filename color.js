class Color {
    constructor(v1, v2, v3) {
        if(typeof(v1) === "string" && v1.startsWith("#") && v2 === undefined && v3 === undefined) {
            hex = v1.replace('#', '');

            var bigint = parseInt(hex, 16);

            this.r = (bigint >> 16) & 255;
            this.g = (bigint >> 8) & 255;
            this.b = bigint & 255;

            return;
        }

        throw "Color parameters not supported"
    }

    lightness(percentage) {
        this.r = Math.round(this.r * (1 + percentage));
        this.g = Math.round(this.g * (1 + percentage));
        this.b = Math.round(this.b * (1 + percentage));
    }
}