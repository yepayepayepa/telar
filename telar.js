const THREAD_VERTICAL = "vertical";
const THREAD_HORIZONTAL = "horizontal";


class TelarAxis {
    constructor(length) {
        this.data = new Array(length);
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = { color: null, value: 0 };            
        }
    }

    setColors(colors, start = 0) {
        for (let i = 0;  i < colors.length && i + start < this.data.length; i++) {
            this.data[start + i].color = colors[i];
        }
    }

    setSeries(series, start = 0) {
        for (let i = 0;  i < series.length && i + start < this.data.length; i++) {
            this.data[start + i].value = series[i];
        }
    }
}

class Telar {
    constructor(threadingLength, treadlingLength, looseness) {
        this.threading = new TelarAxis(threadingLength);
        this.treadling = new TelarAxis(treadlingLength);
        this.looseness = looseness;
    }

    setThreadingColors(colors, start = 0) {
        this.threading.setColors(colors, start);
    }

    setThreadingSeries(series, start = 0) {
        this.threading.setSeries(series, start);
    }

    setTreadlingColors(colors, start = 0) {
        this.treadling.setColors(colors, start);
    }

    setTreadlingSeries(series, start = 0) {
        this.treadling.setSeries(series, start);
    }

    setTieUp(tieUp) {
        this.tieUp = tieUp;
    }

    weave(render) {
        this.telarMatrix = [];

        let threadValue, treadleValue, over, under;
        for (let i = 0; i < this.treadling.data.length; i++) {
            this.telarMatrix[i] = new Array(this.threading.data.length);
            treadleValue = this.treadling.data[i].value - 1;
            for (let j = 0; j < this.threading.data.length; j++) {
                threadValue = this.threading.data[j].value - 1;

                if(this.tieUp[treadleValue][threadValue] > 0) {
                    over = THREAD_VERTICAL;
                    under = THREAD_HORIZONTAL;
                } else {
                    over = THREAD_HORIZONTAL;
                    under = THREAD_VERTICAL;
                }

                this.telarMatrix[i][j] = {
                    over: {
                        orientation: over,
                        color: over == THREAD_VERTICAL ? this.threading.data[j].color : this.treadling.data[i].color,
                    },
                    under: {
                        orientation: under,
                        color: under == THREAD_VERTICAL ? this.threading.data[j].color : this.treadling.data[i].color,
                    },
                    frame: {
                        x: j * (1 / this.threading.data.length),
                        y: i * (1 / this.treadling.data.length),
                        width: (1 / this.threading.data.length),
                        height: (1 / this.treadling.data.length)
                    }
                }

                this.render(this.telarMatrix[i][j]);
            }
        }
    }

    render(cross) {
        const HI_RES_CORRECTION = 0.9;
        const SHADOW_COLOR = "rgba(0, 0, 0, 0.7)";
        const SHADOW_WEIGHT = 0.3;

        noStroke();
    
        const drawCrossThread = (thread, frame) => {
            const lx = frame.width * this.looseness;
            const ly = frame.height * this.looseness;

            if(thread.orientation === THREAD_VERTICAL) {
                noStroke();
                fill(thread.color);
                rect(dimensionlessx(frame.x + lx), dimensionlessy(frame.y - ly * HI_RES_CORRECTION), dimensionless(frame.width - lx * 2), dimensionless(frame.height + lx * 2 * HI_RES_CORRECTION));

                strokeWeight(SHADOW_WEIGHT);
                stroke(SHADOW_COLOR);
                line(
                    dimensionlessx(frame.x + lx) + dimensionless(frame.width - lx * 2), dimensionlessy(frame.y - ly * HI_RES_CORRECTION),
                    dimensionlessx(frame.x + lx) + dimensionless(frame.width - lx * 2), dimensionlessy(frame.y - ly * HI_RES_CORRECTION) + dimensionless(frame.height + lx * 2 * HI_RES_CORRECTION)
                );
            }
            if(thread.orientation === THREAD_HORIZONTAL) {
                noStroke();
                fill(thread.color);
                rect(dimensionlessx(frame.x - lx * HI_RES_CORRECTION), dimensionlessy(frame.y + ly), dimensionless(frame.width + lx * 2 * HI_RES_CORRECTION), dimensionless(frame.height - ly * 2));

                strokeWeight(SHADOW_WEIGHT);
                stroke(SHADOW_COLOR);
                line(
                    dimensionlessx(frame.x - lx * HI_RES_CORRECTION), dimensionlessy(frame.y + ly) + dimensionless(frame.height - ly * 2),
                    dimensionlessx(frame.x - lx * HI_RES_CORRECTION) + dimensionless(frame.width + lx * 2 * HI_RES_CORRECTION), dimensionlessy(frame.y + ly) + dimensionless(frame.height - ly * 2)
                );
            }

        };

        drawCrossThread(cross.under, cross.frame);
        drawCrossThread(cross.over, cross.frame);
    }

    /**
     * Returns a prefilled array with TelayKeys ready to be used as threading or threadling
     * @param Number targetLength the desired length of the resulting array
     * @param Array colors the list of colors to use
     * @param Array pattern the pattern of repetition to be used to fill the threading or treadling with colors
     * @returns 
     */
    generateColorSeries(targetLength, colors, pattern) {
        if(pattern == undefined) {
            pattern = new Array(colors.length);
            pattern.fill(1);
        }

        const series = [];
        let colorIndex = 0;
        while(series.length < targetLength) {
            for (let i = 0; i < pattern.length; i++) {
                const current = pattern[i];
                for (let j = 0; j < current; j++) {
                    series.push(this.noiseColor(colors[colorIndex % colors.length], 
                        series.length));
                    if(series.length == targetLength) {
                        return series;
                    }      
                }
                colorIndex++;
            }
        }
    }

    noiseColor(originalColor) {
        const noiseAmount = pseudorandom.integer(8, 16);
        const alteredColor = new Color(originalColor);
        alteredColor.addNoise(noiseAmount);
        return color(alteredColor.r, alteredColor.g, alteredColor.b);
    }

    generateNumberSeries(targetLength, pattern) {
        const series = [];
        while(series.length < targetLength) {
            for (let i = 0; i < pattern.length; i++) {
                series.push(pattern[i]);
                if(series.length == targetLength) {
                    return series;
                }
            }
        }
    }
}


class TelarBuilder {
    constructor(resolution) {
        this.resolution = resolution;
        this.weavePatterns = [];
        this.colorPalettes = [];
        this.colorPatterns = [];
    }

    addColorPalettes(colorPalettes) {
        this.colorPalettes = this.colorPalettes.concat(colorPalettes);
    }

    addColorPatterns(colorPatterns) {
        this.colorPatterns = this.colorPatterns.concat(colorPatterns);
    }

    addWeavePatterns(weavePatterns) {
        this.weavePatterns = this.weavePatterns.concat(weavePatterns);
    }

    build(telarWidth, telarHeight, tightness) {
        console.log("Building the weave...");
        console.log(this.weavePatterns);
        
        const telar = new Telar(telarWidth, telarHeight, tightness);
    
        const weavePattern = this.weavePatterns[pseudorandom.integer(0, this.weavePatterns.length - 1)];
        // const weavePattern = this.weavePatterns[1];
        
        const selectColorsFromPalette = (colorPalette, numberOfColors) => {
            const colorIndices = pseudorandom.integers(numberOfColors, 0, colorPalette.length - 1);
            const result = [];
            for (let i = 0; i < colorIndices.length; i++) {
                result.push(colorPalette[colorIndices[i]]);
            }
            return result;
        }

        let selectedPalette = this.colorPalettes[pseudorandom.integer(0, this.colorPalettes.length - 1)];
        let selectedThreadPattern = this.colorPatterns[pseudorandom.integer(0, this.colorPatterns.length - 1)];
        let selectedTreadlePattern = this.colorPatterns[pseudorandom.integer(0, this.colorPatterns.length - 1)];


        // selectedPalette = this.colorPalettes[this.colorPalettes.length - 1];  // FOR TESTING ONLY
        // selectedThreadPattern = this.colorPatterns[this.colorPatterns.length - 1];  // FOR TESTING ONLY
        // selectedTreadlePattern = this.colorPatterns[this.colorPatterns.length - 1];  // FOR TESTING ONLY

        console.log(selectedPalette, selectedThreadPattern, selectedTreadlePattern);
        
        telar.setThreadingColors(telar.generateColorSeries(telarHeight, selectColorsFromPalette(selectedPalette, pseudorandom.integer(1, 10)),
            selectedThreadPattern));
        telar.setThreadingSeries(telar.generateNumberSeries(telarWidth, weavePattern.threading));
        
        telar.setTreadlingColors(telar.generateColorSeries(telarWidth, selectColorsFromPalette(selectedPalette, pseudorandom.integer(1, 10)),
            selectedTreadlePattern));
        telar.setTreadlingSeries(telar.generateNumberSeries(telarHeight, weavePattern.treadling));
    
        telar.setTieUp(weavePattern.tieUp);

        return telar;
    }
}