function calculateFeatures() {
    const features = {
        "Tiles": "Many",
    }

    // console.log(JSON.stringify(features, null, 4));

    // Sends the features to fxhash for processing
    window.$fxhashFeatures = features;
    return features;
}