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
    constructor(threadingLength, treadlingLength) {
        this.threading = new TelarAxis(threadingLength);
        this.treadling = new TelarAxis(treadlingLength);
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
        noStroke();
    
        const looseness = 0.2;
        const drawCrossThread = (thread, frame) => {
            const lx = frame.width * looseness;
            const ly = frame.width * looseness;

            fill(thread.color);
            if(thread.orientation === THREAD_VERTICAL) {
                rect(dimensionlessx(frame.x + lx), dimensionlessy(frame.y - ly), dimensionless(frame.width - lx * 2), dimensionless(frame.height + lx * 2));
            }
            if(thread.orientation === THREAD_HORIZONTAL) {
                rect(dimensionlessx(frame.x - lx), dimensionlessy(frame.y + ly), dimensionless(frame.width + lx * 2), dimensionless(frame.height - ly * 2));
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
    static generateColorSeries(targetLength, colors, pattern) {
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

    static noiseColor(originalColor) {
        let colorNoise = pseudorandom.decimal(-5, 5);
        const alteredColor = new Color(originalColor);
        alteredColor.lightness(colorNoise / 100);

        return color(alteredColor.r, alteredColor.g, alteredColor.b);
    }

    static generateNumberSeries(targetLength, pattern) {
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