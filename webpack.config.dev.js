const { base } = require("./webpack.config.base.js");


const fileName = "gametest-utility-lib.dev.js";


module.exports = {
    ...base,
    mode: "development",
    devtool: false,
    output: {
        ...base.output,
        filename: fileName
    }
};
