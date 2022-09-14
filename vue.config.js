const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const vueSrc = "./src";

module.exports = defineConfig({
  pages: {
    index: {
      // entry for the page
      entry: "src/construction/main.js",
      title: "PeoplePro"
    },
    construction: {
      entry: "src/landing/main.js",
      title: "PeoplePro"
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc)
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
});
