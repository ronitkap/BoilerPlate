import commonPlugins, { commonResolve, commonRules } from "./webpack.common";
//import path from "path";
const devConfig = {
  mode: "development",
  resolve: {
    ...commonResolve,
  },
  module: { rules: [...commonRules] },
  output: {
    // Public path acts as a context url path
    publicPath: "http://localhost:8080/",
  },

  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [...commonPlugins],
};

export default devConfig;
