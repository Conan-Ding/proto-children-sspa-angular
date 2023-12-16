const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { AngularWebpackPlugin } = require("@ngtools/webpack");

module.exports = (config, options) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./app3-moduel": "./src/app/app.module.ts",
      },
      remotes: {
        host: "host@http://localhost:9000/remoteEntry.js",
      },
      shared: {
        "@babel/runtime": {}
      },
    })
  );
  config.plugins.push(
    new AngularWebpackPlugin({
      tsconfig: "./tsconfig.json",
    })
  );
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
