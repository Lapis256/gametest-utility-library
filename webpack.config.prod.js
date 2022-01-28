const { base, Plugin } = require("./webpack.config.base.js");


const fileName = "gametest-utility-lib.js";


module.exports = {
    ...base,
    mode: "production",
    optimization: {
      minimize: true
    },
    plugins: [
        new Plugin(fileName)
    ],
    output: {
        ...base.output,
        filename: fileName
    }
};
