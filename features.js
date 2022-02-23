function calculateFeatures() {
    const colorPalette = pseudorandom.pick(["Colorful"]);

    const features = {
        "Colors": colorPalette,
    }

    // console.log(JSON.stringify(features, null, 4));

    // Sends the features to fxhash for processing
    window.$fxhashFeatures = features;
    return features;
}