import commonPlugins, { commonResolve, commonRules } from "./webpack.common";

const devConfig = {
  mode: "development",
  resolve: {
    ...commonResolve,
  },
  module: { rules: [...commonRules] },
  output: {
    // Public path acts as a context url path
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [...commonPlugins],
};

export default devConfig;
