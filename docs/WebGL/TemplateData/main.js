var canvas = document.querySelector("#unity-canvas");

var config = {
    dataUrl: "Build/WebGL.data.gz",
    frameworkUrl: "Build/WebGL.framework.js.gz",
    codeUrl: "Build/WebGL.wasm.gz",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Andrew Allbright",
    productName: "Metal Slug Inspired Combat Sequence",
    productVersion: "0.0.2",
    devicePixelRatio: 1,
}

createUnityInstance(canvas, config);
