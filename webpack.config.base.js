const path = require("path");
const fs = require("fs");


const outputDir = "dist";
const license = fs.readFileSync("LICENSE", "utf-8").trim();
const headerText = `/*
${license}
*/

/* Library Source URL */
/* https://github.com/Lapis256/gametest-utility-library */

`;

class Plugin {
    constructor(fileName) {
        this.fileName = fileName;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap("Plugin", (compilation) => {
            const lib = fs.readFileSync(`${outputDir}/${this.fileName}`, "utf-8").trim();
            fs.writeFileSync(`${outputDir}/${this.fileName}`, headerText + lib, "utf-8");
        });
    }
}

exports.Plugin = Plugin;


exports.base = {
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
        path: path.join(__dirname, "dist"),
        library: {
            type: "module"
        }
    }
};
