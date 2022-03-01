let telar;

function setup() {
    pseudorandom.fxhash();

    const TELAR_RESOLUTION = 360;

    const telarBuilder = new TelarBuilder();

    telarBuilder.addWeavePatterns(specialPatterns);
    telarBuilder.addWeavePatterns(foursPatterns);
    telarBuilder.addWeavePatterns(eightsPatterns);
    telarBuilder.addWeavePatterns(sixteensPatterns);
    telarBuilder.addWeavePatterns(twentyFoursPatterns);

    telarBuilder.addColorPalettes(colorPalettes);
    telarBuilder.addColorPatterns(colorPatterns);

    telar = telarBuilder.build(TELAR_RESOLUTION, pseudorandom.decimal(0.07, 0.2));
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background(0);
    telar.weave();
    addGrain(7);    
    fxpreview();
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
  
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        telar.invertedX = !telar.invertedX;
        telar.revert = !telar.revert;
        redraw();
    }

    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        telar.invertedY = !telar.invertedY;
        telar.revert = !telar.revert;
        redraw();
    }

    if (key == "s" || key == "S") {
        const DESIRED_SIZE_IN_PIXELS = 6000;
        resizeCanvas(DESIRED_SIZE_IN_PIXELS / pixelDensity(), DESIRED_SIZE_IN_PIXELS / pixelDensity());
        saveCanvas('telar_yepayepayepa_' + fxhash, 'png');
    }
}
