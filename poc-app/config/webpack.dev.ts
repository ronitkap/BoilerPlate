import commonPlugins, { commonResolve, commonRules } from "./webpack.common";
const devConfig = {
  mode: "development",
  resolve: {
    ...commonResolve,
  },
  module: { rules: [...commonRules] },
  output: {
    publicPath: "http://localhost:8081/",
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [...commonPlugins],
};

export default devConfig;
