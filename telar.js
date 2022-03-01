const VERTICAL = "vertical";
const HORIZONTAL = "horizontal";


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
    constructor(threadingLength, treadlingLength, colorPalette, looseness) {
        this.threading = new TelarAxis(threadingLength);
        this.treadling = new TelarAxis(treadlingLength);
        this.colorPalette = colorPalette;
        this.looseness = looseness;
        this.reverted = false;
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

    weave() {
        this.telarMatrix = [];

        let threadValue, treadleValue, over, under;
        for (let i = 0; i < this.treadling.data.length; i++) {
            this.telarMatrix[i] = new Array(this.threading.data.length);
            treadleValue = this.treadling.data[i].value - 1;
            for (let j = 0; j < this.threading.data.length; j++) {
                threadValue = this.threading.data[j].value - 1;
                if(this.tieUp[treadleValue][threadValue] > 0) {
                    over = VERTICAL;
                    under = HORIZONTAL;
                } else {
                    over = HORIZONTAL;
                    under = VERTICAL;
                }

                this.telarMatrix[i][j] = {
                    over: {
                        orientation: over,
                        color: over == VERTICAL ? this.threading.data[j].color : this.treadling.data[i].color,
                    },
                    under: {
                        orientation: under,
                        color: under == VERTICAL ? this.threading.data[j].color : this.treadling.data[i].color,
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
        const SHADOW_COLOR = "rgba(0, 0, 0, 0.5)";

        noStroke();
    
        const drawCrossThread = (thread, frame) => {
            const lx = frame.width * this.looseness;
            const ly = frame.height * this.looseness;

            if(thread.orientation === VERTICAL) {
                noStroke();
                fill(thread.color);
                rect(dimensionlessx(frame.x + lx), dimensionlessy(frame.y - ly * HI_RES_CORRECTION), dimensionless(frame.width - lx * 2), dimensionless(frame.height + lx * 2 * HI_RES_CORRECTION));

                strokeWeight(pseudorandom.decimal(0.1, 0.6));
                stroke(SHADOW_COLOR);
                line(
                    dimensionlessx(frame.x + lx) + dimensionless(frame.width - lx * 2), dimensionlessy(frame.y - ly * HI_RES_CORRECTION),
                    dimensionlessx(frame.x + lx) + dimensionless(frame.width - lx * 2), dimensionlessy(frame.y - ly * HI_RES_CORRECTION) + dimensionless(frame.height + lx * 2 * HI_RES_CORRECTION)
                );
            }
            if(thread.orientation === HORIZONTAL) {
                noStroke();
                fill(thread.color);
                rect(dimensionlessx(frame.x - lx * HI_RES_CORRECTION), dimensionlessy(frame.y + ly), dimensionless(frame.width + lx * 2 * HI_RES_CORRECTION), dimensionless(frame.height - ly * 2));

                strokeWeight(pseudorandom.decimal(0.1, 0.5));
                stroke(SHADOW_COLOR);
                line(
                    dimensionlessx(frame.x - lx * HI_RES_CORRECTION), dimensionlessy(frame.y + ly),
                    dimensionlessx(frame.x - lx * HI_RES_CORRECTION) + dimensionless(frame.width + lx * 2 * HI_RES_CORRECTION), dimensionlessy(frame.y + ly)
                );
            }

        };

        if(!this.reverted) {
            drawCrossThread(cross.under, cross.frame);
            drawCrossThread(cross.over, cross.frame);
        } else {
            drawCrossThread(cross.over, cross.frame);
            drawCrossThread(cross.under, cross.frame);
        }
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
    constructor() {
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



    overlapWeavePattern(telar, newWeavePattern, type, start, count) {
        // console.log("ENTRADAS", telar.tieUp.length, newWeavePattern.tieUp.length, type);

        let newRowNumber = telar.tieUp.length;
        let newColNumber = telar.tieUp[0].length;

        if(type == HORIZONTAL) {
            newRowNumber += newWeavePattern.tieUp.length;
            newColNumber = Math.max(telar.tieUp[0].length, newWeavePattern.tieUp[0].length);
        }
        if(type == VERTICAL) {
            newRowNumber = Math.max(telar.tieUp.length, newWeavePattern.tieUp.length);
            newColNumber += newWeavePattern.tieUp[0].length;
        }

        const newTieUp = new Array(newRowNumber);
        for (let i = 0; i < newRowNumber; i++) {
            newTieUp[i] = new Array(newColNumber);
            for (let j = 0; j < newColNumber; j++) {
                newTieUp[i][j] = 0;
                if(i < telar.tieUp.length && j < telar.tieUp[0].length) {
                    newTieUp[i][j] = telar.tieUp[i][j];
                } else {
                    if(type == HORIZONTAL && i >= telar.tieUp.length ||
                        type == VERTICAL && j >= telar.tieUp[0].length) {
                        newTieUp[i][j] = newWeavePattern.tieUp[i % newWeavePattern.tieUp.length][j % newWeavePattern.tieUp[0].length];
                    }
                }
            }
        }

        const newPatternColor = pseudorandom.pick(telar.colorPalette);

        if(type == VERTICAL) {
            for (let i = start; i < start + count && i < telar.threading.data.length; i++) {
                telar.threading.data[i].value = telar.tieUp[0].length + newWeavePattern.threading[i % newWeavePattern.threading.length];
                telar.threading.data[i].color = newPatternColor;
            }
        }
        if(type == HORIZONTAL) {
            for (let i = start; i < start + count && i < telar.treadling.data.length; i++) {
                telar.treadling.data[i].value = telar.tieUp.length + newWeavePattern.treadling[i % newWeavePattern.treadling.length];
                telar.treadling.data[i].color = newPatternColor;
            }
        }

        // console.log("QUE PEDO", newTieUp.length);

        telar.tieUp = newTieUp;
    }

    build(telarSize, tightness) {        
        const baseWeavePattern = this.weavePatterns[pseudorandom.integer(0, this.weavePatterns.length - 1)];
        
        let selectedPalette = this.colorPalettes[pseudorandom.integer(0, this.colorPalettes.length - 1)];
        let selectedThreadPattern = this.colorPatterns[pseudorandom.integer(0, this.colorPatterns.length - 1)];
        let selectedTreadlePattern = this.colorPatterns[pseudorandom.integer(0, this.colorPatterns.length - 1)];
        
        // selectedPalette = this.colorPalettes[this.colorPalettes.length - 1];  // FOR TESTING ONLY
        // selectedThreadPattern = this.colorPatterns[this.colorPatterns.length - 1];  // FOR TESTING ONLY
        // selectedTreadlePattern = this.colorPatterns[this.colorPatterns.length - 1];  // FOR TESTING ONLY

        if(pseudorandom.boolean()) {
            selectedThreadPattern.reverse();
        }
        if(pseudorandom.boolean()) {
            selectedTreadlePattern.reverse();
        }
        
        const baseThreadingColorNumber = pseudorandom.integer(2, selectedPalette.length);
        const baseTreadlingColorNumber = pseudorandom.integer(2, selectedPalette.length);
        
        const telar = new Telar(telarSize, telarSize, selectedPalette, tightness);

        telar.setThreadingColors(telar.generateColorSeries(
                telarSize, 
                pseudorandom.pickAllowingRepeatedButNotAllTheSame(selectedPalette, baseThreadingColorNumber),
                selectedThreadPattern
            ));
        telar.setThreadingSeries(telar.generateNumberSeries(
                telarSize, 
                baseWeavePattern.threading
            ));
        
        telar.setTreadlingColors(telar.generateColorSeries(
                telarSize, 
                pseudorandom.pickAllowingRepeatedButNotAllTheSame(selectedPalette, baseTreadlingColorNumber),
                selectedTreadlePattern
            ));
        telar.setTreadlingSeries(telar.generateNumberSeries(
                telarSize, 
                baseWeavePattern.treadling
            ));
    
        telar.setTieUp(baseWeavePattern.tieUp);

        
        // this.overlapWeavePattern(telar, this.weavePatterns[pseudorandom.integer(0, this.weavePatterns.length - 1)], HORIZONTAL, pseudorandom.integer(0, 222), 137);
        // this.overlapWeavePattern(telar, this.weavePatterns[pseudorandom.integer(0, this.weavePatterns.length - 1)], VERTICAL, pseudorandom.integer(0, 270), 89);
        
        let patternWidth = telarSize;
        let type;

        while(Math.floor(patternWidth /= 1.618) >= 1) {
            if(pseudorandom.boolean()) {
                type = VERTICAL;
            } else {
                type = HORIZONTAL;
            }
            this.overlapWeavePattern(telar, this.weavePatterns[pseudorandom.integer(0, this.weavePatterns.length - 1)], type, pseudorandom.integer(0, telarSize - Math.floor(patternWidth) - 1), Math.floor(patternWidth));
        }

        return telar;
    }
}