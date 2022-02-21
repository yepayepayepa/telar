let telar;

function setup() {
    pseudorandom.fxhash();
    noiseSeed(fxhash);

    const telarWidth  = 300;
    const telarHeight = 300; 

    telar = new Telar(telarWidth, telarHeight);
  
    telar.setThreadingColors(Telar.generateColorSeries(telarWidth, ["#efb702", "#47acf0", "#358f49", "#ff9b9b", "#f64000", "#222222"], [15, 25, 30]));
    telar.setThreadingSeries(Telar.generateNumberSeries(telarWidth, [1, 2, 3, 4]));
    
    telar.setTreadlingColors(Telar.generateColorSeries(telarHeight, ["#111111", "#358f49", "#47acf0", "#f64000", "#f0e7d8"], [1, 5, 10, 15, 25, 40]));
    telar.setTreadlingSeries(Telar.generateNumberSeries(telarHeight, [4, 3, 2, 1]));

    telar.setTieUp([
        [1, 0, 0, 1], 
        [0, 1, 1, 0], 
        [0, 1, 1, 0], 
        [1, 0, 0, 1],
    ]);

    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("#000");
    telar.weave();
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
        saveCanvas('prefix_' + fxhash, 'png');
    }
}
