const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");
module.exports = withImages(
  withSass(
    withTM({
      transpileModules: ["somemodule", "and-another"]
    })
  )
);
