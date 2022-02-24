let telar;

function setup() {
    pseudorandom.fxhash();

    const TELAR_RESOLUTION = 400;

    const telarBuilder = new TelarBuilder(TELAR_RESOLUTION);

    telarBuilder.addWeavePatterns(specialPatterns);
    telarBuilder.addWeavePatterns(basic4x4Patterns);

    telarBuilder.addColorPalettes(colorPalettes);

    telarBuilder.addColorPatterns(colorPatterns);

    telar = telarBuilder.build({ x: 0, y: 0, width: 400, height: 400,});

    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("#ebedf1");
    telar.weave();

    addGrain(15);
}

function addGrain(n){
    loadPixels();
    for(let e = 0; e < width * pixelDensity() * (height * pixelDensity()) * 4; e += 4) {
        let i = map(pseudorandom.decimal(), 0, 1, -n, n);
        pixels[e]     = pixels[e] + i,
        pixels[e + 1] = pixels[e + 1] + i,
        pixels[e + 2] = pixels[e + 2] + i,
        pixels[e + 3] = pixels[e + 3] + i;
    }
    updatePixels();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Saves the artwork as an image of DESIRED_SIZE_IN_PIXELS size when the S key is pressed
// taking into consideration the pixel density of the user's display
function keyPressed() {
    const DESIRED_SIZE_IN_PIXELS = 5000;
  
    if (key == 's' || key == 'S') {
        resizeCanvas(DESIRED_SIZE_IN_PIXELS / pixelDensity(), DESIRED_SIZE_IN_PIXELS / pixelDensity());
        saveCanvas('telar_' + fxhash, 'png');
    }
}
