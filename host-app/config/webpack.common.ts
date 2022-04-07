import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

import { dependencies } from "../package.json";

const { ModuleFederationPlugin } = webpack.container;
//const WebpackAssetsManifest = require("webpack-assets-manifest");
export const commonResolve = {
  extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
};

export const commonRules = [
  {
    test: /\.m?js/,
    type: "javascript/auto",
    resolve: {
      fullySpecified: false,
    },
  },
  {
    test: /\.(css|s[ac]ss)$/i,
    use: ["style-loader", "css-loader", "postcss-loader"],
  },
  {
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
];

const commonPlugins = [
  new ModuleFederationPlugin({
    name: "host",
    filename: "remoteEntry.js",
    remotes: { products: "products@http://localhost:8081/remoteEntry.js" },
    exposes: {},

    shared: {
      ...dependencies,
      react: {
        singleton: true,
        requiredVersion: dependencies.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: dependencies["react-dom"],
      },
    },
  }),
  new HtmlWebPackPlugin({
    template: "./public/index.html",
  }),
  // new WebpackAssetsManifest({}),
];

export default commonPlugins;
