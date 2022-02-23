let telar;

function setup() {
    pseudorandom.fxhash();

    const telarWidth = telarHeight = pseudorandom.integer(350, 500); 

    telar = new Telar(telarWidth, telarHeight);

    const weavePattern = staticPatterns[4];
    
    // telar.setThreadingColors(Telar.generateColorSeries(telarWidth, ["#efb702", "#47acf0", "#358f49", "#ff9b9b", "#f64000", "#222222"], [15, 25, 30]));
    telar.setThreadingColors(Telar.generateColorSeries(telarWidth, ["#47acf0", "#358f49"], [40]));
    telar.setThreadingSeries(Telar.generateNumberSeries(telarWidth, weavePattern.threading));
    
    // telar.setTreadlingColors(Telar.generateColorSeries(telarHeight, ["#111111", "#358f49", "#47acf0", "#f64000", "#f0e7d8"], [1, 5, 10, 15, 25, 40]));
    telar.setTreadlingColors(Telar.generateColorSeries(telarHeight, ["#efb702", "#f64000", "#ff9b9b", "#358f49", "#f64000", "#222222"], [1,1,2,3,5,8,13,21,34,55]));
    telar.setTreadlingSeries(Telar.generateNumberSeries(telarHeight, weavePattern.treadling));

    telar.setTieUp(weavePattern.tieUp);


    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("#000");
    telar.weave();

    addGrain(10);
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
