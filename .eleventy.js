const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy(
    {
      "public/images": "images",
      "public/resources": "resources",
    }
  );
  eleventyConfig.addFilter("sortByOrder", (arr) => {
    if (!arr) return [];
    arr.sort((a, b) => (a.data.order > b.data.order ? 1 : -1));
    return arr;
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
