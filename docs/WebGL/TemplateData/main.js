var canvas = document.querySelector("#unity-canvas");

var config = {
    dataUrl: "Build/WebGL.data",
    frameworkUrl: "Build/WebGL.framework.js",
    codeUrl: "Build/WebGL.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Andrew Allbright",
    productName: "Metal Slug Inspired Combat Sequence",
    productVersion: "0.0.3",
    devicePixelRatio: 1,
}

createUnityInstance(canvas, config);
