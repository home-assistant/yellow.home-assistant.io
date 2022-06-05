const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
