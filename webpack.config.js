const path = require("path");

module.exports = {
    mode: "production",
    target: "es2020",
    entry: "./index.js",
    externals: [
        "mojang-minecraft",
        "mojang-gametest"
    ],
    experiments: {
        outputModule: true
    },
    output: {
        filename: "gametest-utility-lib.js",
        path: path.join(__dirname, "dist"),
        library: {
            type: "module"
        }
    }
};
